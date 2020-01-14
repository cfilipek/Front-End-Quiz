export default function() {
	return [
    {id: 1, q: "JavaScript Data Types",
     ans: ["JS has a several data types-- most are primative", "Primatives: Boolean T or F, Numbers: whole number & floating point numbers, Null, Undefined, Strings", "Non-primatives: Arrays (technically an object), Objects, DS: Maps and Sets"]},

    {id: 2, q: "const && let vs var", ans: ["const and let were added in ES6 because var was causing lexical scope and using variable hoisting (hoisting is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution)", "const and let use block scope (solves the issues with variable hoisting)", "let is a reassignment variable, const is a constant variable-- still able to pop and push from arrays etc."]}
	]
}
