##### nterpreter pattern: Implement a specialized computer language to rapidly solve a specific set of problems.

#### Files:
chainOfRepsonsibilitty.js: a skeleton of the pattern, and two real examples with different ways to use the pattern.

#### Some notes:
+ Some applications are so complex that they require advanced configuration. You could offer a basic scripting language which allows the end-user to manipulate your application through simple instructions. The Interpreter pattern solves this particular problem – that of creating a simple scripting language.
+ The abstract syntax tree of Interpreter is a Composite (therefore Iterator and Visitor are also applicable).
+ Interpreter can use State to define parsing contexts.

#### Nice articles:
+ https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/
