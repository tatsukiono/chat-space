# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# chat-space DB設計

## usersテーブル

|Column|Type|0ptions|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users



## messagesテーブル

|Column|Type|0ptions|
|------|----|-------|
|body|text|null :false|
|image|string|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|

### Association
- belong_to :user
- belong_to :group



## groupsテーブル

|Column|Type|0ptions|
|------|----|-------|
|name|string|null :false|
|menber|string|

### Association
- has_many :messages
- has_many :users, through: :groups_users



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user








