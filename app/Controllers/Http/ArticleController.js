"use strict";

const marked = require("marked");
const Article = use("App/Models/Article");

class ArticleController {
  async show({ view, params }) {
    const article = await Article.query()
      .where("slug", "=", params.id)
      .first();

    article.content = marked(article.content);

    return view.render("article.show", {
      article
    });
  }
}

module.exports = ArticleController;
