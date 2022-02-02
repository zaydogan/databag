package databag

import (
  "net/http"
  "databag/internal/store"
)

func GetCards(w http.ResponseWriter, r *http.Request) {

  account, code, err := BearerAppToken(r, false);
  if err != nil {
    ErrResponse(w, code, err)
    return
  }

  var cards []store.Card
  if err := store.DB.Where("account_id = ?", account.Guid).Find(&cards).Error; err != nil {
    ErrResponse(w, http.StatusInternalServerError, err)
    return
  }

  WriteResponse(w, &cards)
}