import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";
export default class CompanyRoute extends Route {
  @service store;
  async model(params) {
    const p = await this.store.findRecord("company", params.company_id, {
      include: "employees",
    });
    return p;
  }
}
