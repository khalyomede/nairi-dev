"use strict";

class HomeController {
  index({ view }) {
    return view.render("home.index");
  }
}

module.exports = HomeController;
