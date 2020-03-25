describe("FizzBuzz", function() {

  var fizzBuzz

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function() {
    it("should return fizz when given 3", function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

    it("should return fizz when given 9", function() {
      expect(fizzBuzz.play(9)).toEqual("Fizz");
    });
  });

  describe("multiples of 5", function() {
    it("should return buzz when given 5", function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });

    it("should return buzz when given 20", function() {
      expect(fizzBuzz.play(20)).toEqual("Buzz");
    });
  });

  describe("multiples of 3 and 5", function() {
    it("should return fizzbuzz when given 15", function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });

    it("should return fizzbuzz when given 30", function() {
      expect(fizzBuzz.play(30)).toEqual("FizzBuzz");
    });
  });

  describe("all other numbers", function() {
    it("should return the number 1 when given 1", function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it("should return the number 2 when given 2", function() {
      expect(fizzBuzz.play(2)).toEqual(2);
    });
  });
});
