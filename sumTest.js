var sum = require('./lib/sum')

const result = sum(2, 3)
const expected = 5
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`)
}

result = sum(3, 3)
const expected = 6
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`)
}

