import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class EmployeeComponent extends Component {
  @service store;
  @tracked update = true;

  @action delete(employee_id) {
    let employee = this.store.peekRecord("employee", employee_id);
    employee.destroyRecord();
  }
  @action updateFlag(employee_id) {}
}
