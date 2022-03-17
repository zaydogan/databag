package databag

import (
  "errors"
  "net/http"
  "databag/internal/store"
)

func GetProfileMessage(w http.ResponseWriter, r *http.Request) {
  var code int
  var err error
  tokenType := r.Header.Get("TokenType")

  // load account record
  var account *store.Account
  if tokenType == APP_TOKENAPP {
    if account, code, err = BearerAppToken(r, true); err != nil {
      ErrResponse(w, code, err)
      return
    }
  } else if tokenType == APP_TOKENCONTACT {
    var card *store.Card
    if card, code, err = BearerContactToken(r, true); err != nil {
      ErrResponse(w, code, err)
      return
    }
    account = &card.Account
  } else {
    ErrResponse(w, http.StatusBadRequest, errors.New("invalid token type"))
    return
  }
  detail := &account.AccountDetail

  // generate identity DataMessage
  identity := Identity{
    Revision: account.ProfileRevision,
    Handle: account.Username,
    Name: detail.Name,
    Description: detail.Description,
    Location: detail.Location,
    Image: detail.Image,
    Version: APP_VERSION,
    Node: getStrConfigValue(CONFIG_DOMAIN, ""),
  }
  msg, res := WriteDataMessage(detail.PrivateKey, detail.PublicKey, detail.KeyType,
    APP_SIGNPKCS1V15, account.Guid, APP_MSGIDENTITY, &identity)
  if res != nil {
    ErrResponse(w, http.StatusInternalServerError, res)
    return
  }

  WriteResponse(w, msg)
}

