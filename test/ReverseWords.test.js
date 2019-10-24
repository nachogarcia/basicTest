const reverseWords = require("../src/reverseWords.js")

describe('Reverse words', () => {
  it('changes the order of the words', () => {
    expect(reverseWords('Hello world')).toEqual('world Hello')
  })
})
