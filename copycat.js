/*jslint plusplus: true */
/**
 * Overcomes JavaScript's behaviour of only passing references instead of
 * creating copies for objects, functions and arrays.
 *
 * Performs a deep copy of the input (where appropriate) and returns the
 * copy.
 *
 * @method copy
 *
 * @param input 
 *
 * @return A deep copy of whatever was given as input.
 *
 */
var copyCat = function copyCat(input) {
    "use strict";

    var output = input,
        i;

    if (typeof input === "object" && input !== null) {
        if (Object.prototype.toString.call(input) === "[object Array]") { // array
            output = [];

            i = input.length;
            while (i--) {
                output[i] = copyCat(input[i]);
            }
        } else { // object
            output = {};

            for (i in input) {
                if (input.hasOwnProperty(i)) {
                    output[i] = copyCat(input[i]);
                }
            }
        }
    }

    return output;

};
