# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161223045708) do

  create_table "answers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "question_id"
    t.string   "label"
    t.string   "content"
    t.boolean  "correct"
    t.string   "image_url"
    t.string   "image"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "categories", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "description"
    t.string   "image_url"
    t.string   "image"
    t.string   "slug"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "levers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "slug"
    t.string   "image_url"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "questions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "category_id"
    t.string   "title"
    t.string   "question_type"
    t.string   "content"
    t.string   "hint"
    t.integer  "lever_id"
    t.string   "slug"
    t.integer  "points"
    t.integer  "remain_points"
    t.string   "image_url"
    t.string   "image"
    t.string   "difficulty_level"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["title", "category_id", "lever_id"], name: "index_questions_on_title_and_category_id_and_lever_id", using: :btree
    t.index ["title", "lever_id"], name: "index_questions_on_title_and_lever_id", using: :btree
    t.index ["title", "question_type"], name: "index_questions_on_title_and_question_type", using: :btree
    t.index ["title", "user_id"], name: "index_questions_on_title_and_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "email"
    t.string   "type"
    t.string   "uid"
    t.string   "provider"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.integer  "points"
    t.string   "phone_number"
    t.string   "address"
    t.string   "hobby"
    t.string   "lon"
    t.string   "lat"
    t.string   "description"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["email", "name"], name: "index_users_on_email_and_name", unique: true, using: :btree
    t.index ["email", "type"], name: "index_users_on_email_and_type", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["type"], name: "index_users_on_type", using: :btree
    t.index ["uid"], name: "index_users_on_uid", unique: true, using: :btree
  end

  create_table "users_answers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "answer_id"
    t.boolean  "correct"
    t.string   "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
