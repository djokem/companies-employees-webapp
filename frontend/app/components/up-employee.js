import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
export default class UpEmployeeComponent extends Component {
  @service store;

  @action cancel() {
    history.back();
  }

  @action update(employee) {
    if (this.validate(employee)) {
      employee.save();
      alert(
        "Successfully updated employee:\n " +
          employee.name +
          " " +
          employee.surname +
          "\n " +
          employee.email +
          "\n " +
          employee.address +
          "\n " +
          employee.salary +
          "\n\nClick Cancel button to go back"
      );
      //history.back();
    }
  }

  validate(employee) {
    let nameFlag = employee.name === "";
    let surnameFlag = employee.surname === "";
    let emailFlag = employee.email === "";
    let addressFlag = employee.address === "";
    let salaryFlag = Number(employee.salary);
    if (nameFlag || surnameFlag || emailFlag || addressFlag) {
      alert("None of the fields should be empty!");
      return false;
    }
    if (Number.isNaN(salaryFlag)) {
      alert("Salary should be a number!");
      return false;
    }
    return true;
  }
}
