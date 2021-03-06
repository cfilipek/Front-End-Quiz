export default function() {
	return [
    {id: 1,
      color: "#FCC1FF",
     q: "JavaScript Data Types",
     ans: ["JS has a several data types-- most are primative", "Primatives: Boolean T or F, Numbers: whole number & floating point numbers, Null, Undefined, Strings", "Non-primatives: Arrays (technically an object), Objects, DS: Maps and Sets"]},

    {id: 2,
      color: "#A2FF91",
       q: "const && let vs. var",
       ans: ["const and let were added in ES6 because var was causing lexical scope and using variable hoisting (hoisting is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution)", "const and let use block scope (solves the issues with variable hoisting)", "let is a reassignment variable, const is a constant variable-- still able to pop and push from arrays etc."]},
     {id: 3,
      color: "#FFFCC1",
       q: "pass by value vs. pass by reference",
       ans: ["Pass By Value (primitives)", "Pass by Reference (objects)", 'The terms "pass by value" and "pass by reference" are used to describe the two ways that variables can be passed on. Cliff notes version: : pass by value means the actual value is passed on. Pass by reference means that a number (called a memory address) is passed on, this address defines where the value is stored.']},
     {id: 4,
      color: "#C1C6FF",
       q: "map() vs. filter() vs. reduce()",
       ans: ["Array methods -- to help create new arrays", "map()--create a new array", "filter() -- filter out values based on your criteria", "reduce() -- unique, map & filter accomplishable, can return single value for example, has an accumulator value -- a little more powerful"]},
      {id: 5,
      color: "#FECC68",
       q: "falsey values",
       ans: ["Boolean false, undefined, null, empty strings, 0", "Evaluate to false", "Truthy -- everything else"]},
      {id: 6,
      color: "#68F9FE",
       q: "global variables",
       ans: ["What are some global variables you use and thoughts on the topic?", "The DOM does-- window and document object", "One of the worse standards -- can be manipulated by anything adding risk to your program"]},
       {id: 7,
      color: "#6883FE",
       q: "this",
       ans: ["Essentially allows us to access current context"]},
       {id: 8,
      color: "#FE68B8",
       q: "== vs ===",
       ans: ["== loosely equals -- evaluates value", "=== strictly equals -- evaluates type and value, have better control of data in program"]},
       {id: 9,
        color: "#79D5C3",
         q: 'coercion - 3 + 2 + "7"',
         ans: ['What might happen? Comparing/converting of data types. Inverts numbers to strings. String "57"']},
       {id: 10,
        color: "#FF5733",
         q: 'typeof',
         ans: ['Checks type of data value passed in','Array would return object (gotcha) can use isArray()']}
	]
}
