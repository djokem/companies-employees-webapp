import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class NewEmployeeComponent extends Component {
  @tracked name;
  @tracked surname;
  @tracked email;
  @tracked address;
  @tracked salary;
  @tracked add = false;
  @service store;

  @action cancel() {
    this.add = !this.add;
  }

  validate() {
    let nameFlag = this.name === "";
    let surnameFlag = this.surname === "";
    let emailFlag = this.email === "";
    let addressFlag = this.address === "";
    let salaryFlag = Number(this.salary);
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

  @action addFlag(company_id) {
    if (this.add) {
      if (this.validate()) {
        let salary = Number(this.salary);
        let company = this.store.peekRecord("company", company_id);
        let employee = this.store.createRecord("employee", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          address: this.address,
          salary: salary,
          company: company,
        });
        employee.save();
        alert(
          "Employee:\n " +
            this.name +
            " " +
            this.surname +
            "\n " +
            this.email +
            "\n " +
            this.address +
            "\n " +
            this.salary +
            "\n\nIs successfully added!"
        );
        this.name = "";
        this.surname = "";
        this.email = "";
        this.address = "";
        this.salary = "";
      } else {
        this.add = false;
      }
    }
    this.add = !this.add;
  }
}
