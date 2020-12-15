import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service store;
  async model() {
    const resp = await this.store.findAll("company");
    // Save
    // const record = this.store.createRecord("user", {
    //   name: "Rails is Omakase",
    // });
    // record.save();
    return resp;
    //return await this.store.findAll('user');
  }
}
