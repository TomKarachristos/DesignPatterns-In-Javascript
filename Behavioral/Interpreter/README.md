##### Interpreter pattern implement a specialized computer language to rapidly solve a specific set of problems.

The interpreter pattern specifies how to evaluate sentences in a language.The basic idea is to have a class for each symbol (terminal or nonterminal) in a specialized computer language. The syntax tree of a sentence in the language is an instance of the composite pattern and is used to evaluate (interpret) the sentence for a client.

Uses:
+ Specialized database query languages such as SQL.
+ Specialized computer languages which are often used to describe communication protocols.
+ Most general-purpose computer languages actually incorporate several specialized languages.

#### Rules Of Thumb:
+ Some applications are so complex that they require advanced configuration. You could offer a basic scripting language which allows the end-user to manipulate your application through simple instructions. The Interpreter pattern solves this particular problem – that of creating a simple scripting language.
+ The abstract syntax tree of Interpreter is a Composite (therefore Iterator and Visitor are also applicable).
+ Interpreter can use State to define parsing contexts.

#### Nice articles:
