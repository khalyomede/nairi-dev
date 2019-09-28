"use strict";

const marked = require("marked");
const Article = use("App/Models/Article");

class HomeController {
  async index({ view }) {
    const articles = await Article.all();

    return view.render("home.index", { articles: articles.rows });
  }
}

module.exports = HomeController;
