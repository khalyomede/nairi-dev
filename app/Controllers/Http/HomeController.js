"use strict";

class HomeController {
  index({ request, response }) {
    return response.send("hello world");
  }
}

module.exports = HomeController;
