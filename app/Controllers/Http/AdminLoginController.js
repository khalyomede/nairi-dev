"use strict";

class AdminLoginController {
  create({ view }) {
    return view.render("admin/login/create");
  }
}

module.exports = AdminLoginController;
