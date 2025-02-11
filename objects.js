/* const job = {
  title: "Dev",
  location: "NY",
  salary: 50000,
}; */

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  describe(){
    console.log(`I'm a ${this.title}, I work in ${this.place} and i earn ${this.salary}}`)
  }
}
const developer = new Job('Dev','NY',50000);
developer.describe();