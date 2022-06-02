Employee = require('./employee.js');
  Next, you will define your `Manager` class as a child of the `Employee` class
  that inherits all of the same properties.

> ** Note **: A `Manager` may be under another `Manager` because
  > `Manager`s might report to higher - level`Manager`s.

You will need an additional `employees` property that holds an array of all
`Employee`s assigned to the`Manager`.
