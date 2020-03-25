function FizzBuzz() {
};

FizzBuzz.prototype.play = function(number) {
  if(this._isDivisibleBy(number, 3) && this._isDivisibleBy(number, 5)) {
    return "FizzBuzz"; }
  else if(this._isDivisibleBy(number, 3)) {
    return "Fizz"; }
  else if(this._isDivisibleBy(number, 5)) {
    return "Buzz"; }
  else {
    return number };
};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
};
