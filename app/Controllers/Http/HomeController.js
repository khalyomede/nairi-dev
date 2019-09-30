"use strict";

const marked = require("marked");
const Post = use("App/Models/Post");

class HomeController {
  async index({ view }) {
    const posts = await Post.all();

    return view.render("home/index", { posts: posts.rows });
  }
}

module.exports = HomeController;
