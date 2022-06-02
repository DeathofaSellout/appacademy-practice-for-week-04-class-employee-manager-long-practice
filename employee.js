class Employee {
  constructor(name, salary, title, manager){
    this.name = name;
    this.salary = salary;
    this.title = title;
    if(manager === undefined){
      //.Make sure the `manager` property will be set
      //to `null` if no manager argument is passed in.
      this.manager = null;
    } else {
      this.manager = manager;
    }
  }
}
module.exports = Employee;