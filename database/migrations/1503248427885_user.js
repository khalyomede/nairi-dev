"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.createIfNotExists("users", table => {
      table.increments();
      table
        .string("username", 191)
        .notNullable()
        .unique();
      table
        .string("email", 191)
        .notNullable()
        .unique();
      table.string("password", 191).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.dropIfExists("users");
  }
}

module.exports = UserSchema;
