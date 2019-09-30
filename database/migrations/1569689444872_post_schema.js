"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PostSchema extends Schema {
  up() {
    this.createIfNotExists("post", table => {
      table.increments();
      table.timestamps();
      table.string("title", 191);
      table.string("slug", 191);
      table.string("excerpt", 191);
      table.string("image", 191);
      table.string("url", 101);
      table.datetime("publishedAt");
      table.text("content");
    });
  }

  down() {
    this.dropIfExists("post");
  }
}

module.exports = PostSchema;
