import EmberRouter from "@ember/routing/router";
import config from "assignment/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("company", { path: "/companies/:company_id" });
  this.route("update", { path: "/update/:employee_id" });
});
