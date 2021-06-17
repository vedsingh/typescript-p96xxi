// Import stylesheets
import './style.css';

// Write TypeScript code!
var textToWrite = '';

const appDiv: HTMLElement = document.getElementById('app');
textToWrite = `<h1>TypeScript Starter</h1>\n`;

function greeter(person: string) {
  return 'Hello ' + person;
}
document.write('<pre>');

let user = 'Jane User';
document.writeln('greeter(20) valid type=' + greeter(20));

document.writeln('greeter(20) invalid type=' + greeter(user));
//add all code from your own greeter.ts below this.

function greet(person: string, date: Date) {
  document.writeln(`Hello ${person}, how are you at ${date.toDateString()}`);
}

greet('Ved', new Date());

let msg = 'Hey there';

function getFavNumber(name: string): number {
  return name.length;
}

document.writeln('getFavNumber(22) //error=' + getFavNumber(22)); //error , if strict check, change in tsconfig noEmitOnError
document.writeln('getFavNumber(msg)=' + getFavNumber(msg));

const names = ['Alice', 'Bob', 'ved'];
names.forEach(function(s) {
  document.writeln('names=' + s.toUpperCase());
});

function addNum(xx: { x: number; y: number }) {
  return xx.x + xx.y;
}

document.writeln('addNum1=' + addNum({ x: 30, y: 40 }));

//union type
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) document.writeln('hello ' + x.join(' and '));
  else document.writeln('Welcome ' + x);
}

welcomePeople(names);
welcomePeople('Ved');
welcomePeople(30); //error since neither Array of string nor String
welcomePeople([30, 40, 60]); //error since neither Array of string nor String

//Type Aliases
type PointType = { x: number; y: number }; //no code generated for this. used only for Type checking

function addNumPointType(xx: PointType) {
  return xx.x + xx.y;
}
document.writeln('addNumPointType=' + addNumPointType({ x: 30, y: 40 }));
//extend Type
type PointType2 = PointType & { z: number };
function addNumPointType2(xx: PointType2) {
  return xx.x + xx.y - xx.z;
}
document.writeln(
  'addNumPointType2=' + addNumPointType2({ x: 30, y: 40, z: 15 })
);

interface PointInterface {
  x: number;
  y: number;
}
function addNumPointInterface(xx: PointInterface) {
  return xx.x + xx.y;
}
document.writeln(
  'addNumPointInterface=' + addNumPointInterface({ x: 30, y: 40 })
);
//extend Interface
interface PointInterface2 extends PointInterface {
  z: number;
}
function addNumPointInterface2(xx: PointInterface2) {
  return xx.x + xx.y - xx.z;
}
document.writeln(
  'addNumPointInterface2=' + addNumPointInterface2({ x: 30, y: 40, z: 30 })
);
//Type Assertion
const typeAssertionBool = <string>true;
document.writeln('typeAssertionBool=' + typeAssertionBool);
