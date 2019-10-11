var should = chai.should()
describe('function fizzBuzz', function () {
  it('The number could divide by 3, and return Fizz', function () {
    var result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })

  it('The number could divide by 5, and return Buzz', function () {
    var result = fizzBuzz(20)
    result.should.be.equal('Buzz')
  })

  it('The number could divide by 3 and 5, and return FizzBuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })

  it('The number couldnt divide by 3 and 5, and return the number', function () {
    var result = fizzBuzz(19)
    result.should.be.equal(19)
  })
})