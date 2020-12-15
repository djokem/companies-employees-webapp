import Model, { attr, belongsTo } from "@ember-data/model";

export default class EmployeeModel extends Model {
  @attr("string") name;
  @attr("string") surname;
  @attr("string") email;
  @attr("string") address;
  @attr("number") salary;
  @belongsTo("company") company;
}
