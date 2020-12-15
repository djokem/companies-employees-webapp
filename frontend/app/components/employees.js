import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class EmployeeComponent extends Component {
  @action avgSal(employees) {
    let avg = 0;
    employees.forEach((item, index) => {
      avg += item.salary;
      // console.log(`Menu Item ${index + 1}: ${item.name}`);
    });
    alert("Average salary is: " + avg / employees.length);
  }
}
