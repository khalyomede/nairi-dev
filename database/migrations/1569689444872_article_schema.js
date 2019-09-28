"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArticleSchema extends Schema {
  up() {
    this.createIfNotExists("articles", table => {
      table.increments();
      table.timestamps();
      table.string("title", 191);
      table.string("slug", 191);
      table.string("excerpt", 191);
      table.string("image", 191);
      table.string("url", 101);
      table.text("content");
    });
  }

  down() {
    this.dropIfExists("articles");
  }
}

module.exports = ArticleSchema;
