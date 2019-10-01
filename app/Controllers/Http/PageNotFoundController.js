"use strict";

class PageNotFoundController {
  index({ view }) {
    return view.render("page-not-found/index");
  }
}

module.exports = PageNotFoundController;
