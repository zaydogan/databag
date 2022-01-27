package databag

import (
  "net/http"
  "gorm.io/gorm"
  "github.com/google/uuid"
  "databag/internal/store"
)

func AddGroup(w http.ResponseWriter, r *http.Request) {

  account, code, err := BearerAppToken(r, false)
  if err != nil {
    ErrResponse(w, code, err)
    return
  }

  var subject Subject
  if err := ParseRequest(r, w, &subject); err != nil {
    ErrResponse(w, http.StatusBadRequest, err)
    return
  }

  group := &store.Group{
    GroupId: uuid.New().String(),
    AccountID: account.ID,
    Revision: 0,
    DataType: subject.DataType,
    Data: subject.Data,
  }
  err = store.DB.Transaction(func(tx *gorm.DB) error {
    if res := store.DB.Save(group).Error; res != nil {
      return res
    }
    if res := store.DB.Model(&account).Update("group_revision", account.GroupRevision + 1).Error; res != nil {
      return res
    }
    return nil
  })
  if err != nil {
    ErrResponse(w, http.StatusInternalServerError, err)
    return
  }

  SetStatus(account)
  WriteResponse(w, getGroupModel(group))
}


