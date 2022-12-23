//An object is a collection of name/value pairs, or a string to value map
let sub = {
    Topic : "javascript",
     edition :8,
    editor: "Vscode"  };
    // Access the properties of an object with . or []:

    console.log(`The Topic is ${sub.Topic}`)
    console.log(sub.editor)
    console.log(sub["edition"]) // => 7: another way to access property values.