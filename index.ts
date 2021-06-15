  // Import stylesheets
  import './style.css';

  // Write TypeScript code!
  var textToWrite = '';

  const appDiv: HTMLElement = document.getElementById('app');
  textToWrite = `<h1>TypeScript Starter</h1>\n`;

  function greeter(person: string) {
    return 'Hello ' + person;
  }

  let user = 'Jane User';
  textToWrite = textToWrite + greeter(user) + '<br>';

  textToWrite = textToWrite + greeter(20) + '<br>';

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeterPerson(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
  }

  let greeterUser = { firstName: 'Jane', lastName: 'Smile' };
  textToWrite = textToWrite + greeterPerson(greeterUser) + '<br>';

  class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
  }

  let studentUser = new Student('Jane', 'M', 'Smith');
  textToWrite = textToWrite + greeterPerson(studentUser) + '<br>';

  appDiv.innerHTML = textToWrite;
