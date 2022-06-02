let Employee = require("./Employee");

class Intern extends Employee {
  constructor (name, id, email, school){
      super(name, id, email)
      this.school = school
  }
  getTitle(){
    return 'Intern'
}
getSchool () {
    return this.school
}

}
module.exports = Intern;