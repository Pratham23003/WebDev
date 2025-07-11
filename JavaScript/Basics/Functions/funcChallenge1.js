// Create a function createGreetingMessage that:
// Takes a name as its first argument.
// Takes an optional language argument that defaults to 'english'.
// Based on the language, it should return a greeting:
// If english, return "Hello, [name]!"
// If spanish, return "¡Hola, [name]!"
// If french, return "Bonjour, [name]!"
// For any other language, default back to "Hello, [name]!"`;
const createGreetingMessage = (name, language = "english") => {
    if (language == "spanish") console.log("¡Hola, " + name);
    else if (language == "french") console.log("Bonjour, " + name);
    else console.log("Hello, " + name);
}
createGreetingMessage("Angrej");
createGreetingMessage("Spain Ala 22", "spanish");
createGreetingMessage("French Ala 22", "french");
createGreetingMessage("David veer", "german");