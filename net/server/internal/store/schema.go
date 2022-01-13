package store

import "gorm.io/gorm"

func AutoMigrate(db *gorm.DB) {
  db.AutoMigrate(&Config{});
  db.AutoMigrate(&App{});
  db.AutoMigrate(&Account{});
  db.AutoMigrate(&AccountToken{});
  db.AutoMigrate(&Group{});
  db.AutoMigrate(&Label{});
  db.AutoMigrate(&Card{});
  db.AutoMigrate(&CardGroup{});
  db.AutoMigrate(&LabelGroup{});
  db.AutoMigrate(&Article{});
  db.AutoMigrate(&ArticleAsset{});
  db.AutoMigrate(&ArticleTag{});
  db.AutoMigrate(&ArticleGroup{});
  db.AutoMigrate(&ArticleLabel{});
  db.AutoMigrate(&Dialogue{});
  db.AutoMigrate(&DialogueMember{});
  db.AutoMigrate(&Insight{});
  db.AutoMigrate(&Topic{});
  db.AutoMigrate(&TopicAsset{});
  db.AutoMigrate(&TopicTag{});
}

type Config struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  ConfigId          string          `gorm:"not null;uniqueIndex"`
  StrValue          string
  NumValue          int64
  BoolValue         bool
  BinValue          []byte
}

type AccountToken struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  AccountID         uint            `gorm:"index"`
  TokenType         string          `gorm:"not null;        `
  Token             string          `gorm:"not null;uniqueIndex"`
  Created           int64           `gorm:"autoCreateTime"`
  Account           Account
}

type Account struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  PublicKey         []byte          `gorm:"not null"`  
  PrivateKey        []byte          `gorm:"not null"`  
  KeyType           []byte          `gorm:"not null"` 
  ProfileId         string          `gorm:"not null;uniqueIndex"` 
  Username          string          `gorm:"not null;uniqueIndex"`
  Password          []byte          `gorm:"not null"`
  Name              string
  Description       string
  Location          string
  Image             string
  profileRevision   uint64          `gorm:"not null"`
  contentRevision   uint64          `gorm:"not null"`
  viewRevision      uint64          `gorm:"not null"`
  groupRevision     uint64          `gorm:"not null"`
  labelRevision     uint64          `gorm:"not null"`
  cardRevision      uint64          `gorm:"not null"`
  dialogueRevision  uint64          `gorm:"not null"`
  insightRevision   uint64          `gorm:"not null"`
  Created           int64           `gorm:"autoCreateTime"`
  Apps              []App
}

type App struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  AccountID         uint            `gorm:"index"`
  Name              string
  Description       string
  Image             string
  Url               string
  Token             string          `gorm:"not null;index"`
  Created           int64           `gorm:"autoCreateTime"`
  Account           Account
}

type Group struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  GroupId           string          `gorm:"not null;index:group,unqiue"`
  AccountID         uint            `gorm:"not null;index:group,unique"`
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Account           Account
}

type Label struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  LabelId           string          `gorm:"not null;index:label,unique"`
  AccountID         uint            `gorm:"not null;index:label,unique"`
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Account           Account
}

type Card struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  CardId            string          `gorm:"not null;index:card,unique"`
  AccountID         uint            `gorm:"not null;index:card,unique"`
  DID               string          `gorm:"not null"`
  Username          string
  Name              string
  Description       string
  Location          string
  Revision          uint64          `gorm:"not null"`
  Image             string
  Node              string          `gorm:"not null"`
  Status            string          `gorm:"not null"`
  Token             string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Account           Account
  Groups            []Group         `gorm:"many2many:card_groups;"`
}

type CardGroup struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  CardID            uint            `gorm:"not null;index:cardgroup,unique"`
  GroupID           uint            `gorm:"not null;index:cardgroup,unique"`
  Card              Card
  Group             Group
}

type LabelGroup struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  LabelID           uint            `gorm:"not null;index:labelgroup,unique"`
  GroupID           uint            `gorm:"not null;index:labelgroup,unique"`
  Label             Label
  Group             Group
}

type Article struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  ArticleId         string          `gorm:"not null;index:article,unique"`
  AccountID         uint            `gorm:"not null;index:article,unique"`
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Status            string          `gorm:"not null;index"`
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  TagUpdated        int64           `gorm:"not null"`
  TagRevision       uint64          `gorm:"not null"`
  Account           Account
}

type ArticleAsset struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  AssetId           string          `gorm:"not null;index:articleasset,unique"`
  ArticleID         uint            `gorm:"not null;index:articleasset,unique"`
  Status            string          `gorm:"not null;index"`
  Size              uint64
  Crc               uint32
  Transform         string
  TransformId       string
  TransformData     string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Article           Article
}

type ArticleTag struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  TagId             string          `gorm:"not null;index:articletag,unique"`
  ArticleID         uint            `gorm:"not null;index:articletag,unique"`
  CardID            uint
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Article           Article
  Card              Card
}

type ArticleGroup struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  ArticleID         uint            `gorm:"not null;index"`
  GroupID           uint            `gorm:"not null;index"`
  Article           Article
  Group             Group
}

type ArticleLabel struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  ArticleID         uint            `gorm:"not null;index"`
  LabelID           uint            `gorm:"not null;index"`
  Article           Article
  Label             Label
}

type Dialogue struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  DialogueId        string          `gorm:"not null;index:dialogue,unique"`
  AccountID         uint            `gorm:"not null;index:dialogue,unique"`
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Active            bool            `gorm:"not null"`
  MemberRevision    uint64          `gorm:"not null"`
  TopicUpdated      int64
  TopicRevision     uint64          `gorm:"not null"`
  Account           Account
  Cards             []Card          `gorm:"many2many:dialogue_member"`
}

type DialogueMember struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  DialogueID        uint            `gorm:"not null;index`
  CardID            uint            `gorm:"not null;index`
  Created           int64           `gorm:"autoCreateTime"`
  Card              Card
}

type Insight struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  InsightId         string          `gorm:"not null;index:insight,unique"`
  CardID            uint            `gorm:"not null;index:insight,unique"`
  dialogueRevision  uint64          `gorm:"not null"`
  memberRevision    uint64          `gorm:"not null"`
  topicRevision     uint64          `gorm:"not null"`
  Card              Card
}

type Topic struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  TopicId           string          `gorm:"not null;index:topic,unique"`
  AccountID         uint            `gorm:"not null;index:topic,unique"`
  CardID            uint
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Status            string          `gorm:"not null;index"`
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  TagUpdated        int64           `gorm:"not null"`
  TagRevision       uint64          `gorm:"not null"`
  Account           Account
  Card              Card
}

type TopicAsset struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  AssetId           string          `gorm:"not null;index:topicasset,unique"`
  TopicID           uint            `gorm:"not null;index:topicasset,unique"`
  Status            string          `gorm:"not null;index"`
  Size              uint64
  Crc               uint32
  Transform         string
  TransformId       string
  TransformData     string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Topic             Topic
}

type TopicTag struct {
  ID                uint            `gorm:"primaryKey;not null;unique;autoIncrement"`
  TagId             string          `gorm:"not null;index:topictag,unique"`
  TopicID           uint            `gorm:"not null;index:topictag,unique"`
  CardID            uint
  Revision          int64           `gorm:"not null"`
  DataType          string          `gorm:"index"`
  Data              string
  Created           int64           `gorm:"autoCreateTime"`
  Updated           int64           `gorm:"autoUpdateTime"`
  Topic             Topic
  Card              Card
}

