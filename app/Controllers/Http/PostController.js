"use strict";

const marked = require("marked");
const Post = use("App/Models/Post");

class PostController {
  async show({ view, params }) {
    const post = await Post.query()
      .where("slug", "=", params.id)
      .first();

    post.content = marked(post.content);

    return view.render("post/show", {
      post
    });
  }
}

module.exports = PostController;
