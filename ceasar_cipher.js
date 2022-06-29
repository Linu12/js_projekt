var caesarShift = function(str, step) {
    // Wrap the amount
    // if (step < 0) {
    //     return caesarShift(str, step + 26);
    // }

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
        // Get the character we'll be appending
        var c = str[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {
            // Get its code
            var code = str.charCodeAt(i);
            console.table(code)

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + step) % 26) + 65); // deszyfr -42 oraz ujemny krok
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + step) % 26) + 97);
            }
        }

        // Append
        output += c;
    }

    // All done!
    return output;
};

console.log(caesarShift("AaBCDEFGHIJKLMNOPRSTQUWZ", 1));