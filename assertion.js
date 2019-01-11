var helpFunction = require("./help-function");
describe ("assertion tests", function () {
    it ("sum", function () {
        expect(helpFunction.sumF(1, 2)).toEqual(3);
    })

    it ("string equal string", function() {
        expect(helpFunction.str).toBe('строка');
    })

    it ("string contain string", function () {
        expect(helpFunction.str).toContain("стр");
    })

    it ("array equal array", function() {
        expect(helpFunction.array).toEqual([1, 2, 3, 4]);
    })

    it ("array of string", function() {
        expect(helpFunction.arrayStr).toEqual(["d", "f", "r"]);
    })
})