var Item = require("../src/ItemClass");

describe("Tests for Item Class", function() {
    it("should throw error because description is empty", function(done) {
        expect(function() {
            var test = new Item();
        }).toThrow(new Error("Description cannot be empty."));
        done();
    });

    it("should throw error because description is not string", function(done) {
        expect(function() {
            var test = new Item(123);
        }).toThrow(new Error("Description must be a String."));
        done();
    });

    it("should create new Item without status", function(done) {
        var test = new Item("Test");
        expect(test.description).toEqual("Test");
        expect(test.finished).toBeFalsy();
        done();
    });

    it("should create new Item with status", function(done) {
        var test = new Item("Test", true);
        expect(test.description).toEqual("Test");
        expect(test.finished).toBeTruthy();
        done();
    });
    
    it("should create new item without status and change status to true", function(done) {
        var test = new Item("Test");
        expect(test.description).toEqual("Test");
        expect(test.finished).toBeFalsy();
        test.changeState();
        expect(test.finished).toBeTruthy();
        done();
    });

    it("should create new item with status and change status to false", function(done) {
        var test = new Item("Test", true);
        expect(test.description).toEqual("Test");
        expect(test.finished).toBeTruthy();
        test.changeState();
        expect(test.finished).toBeFalsy();
        done();
    });
})