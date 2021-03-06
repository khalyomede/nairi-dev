"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "HomeController.index");

Route.get("/admin/login", "AdminLoginController.create");
Route.post("/admin/login", "AdminLoginController.store");

Route.resource("article", "PostController").only(["show"]);

Route.any("*", "PageNotFoundController.index");
