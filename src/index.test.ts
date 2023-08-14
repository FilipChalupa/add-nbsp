import { addNbsp } from './index'

test('With no nbsp', () => {
	expect(addNbsp('Common description')).toBe('Common description')
})

test('With one nbsp', () => {
	expect(addNbsp('What are they doing?')).toBe('What are they doing?')
})

test('With no nbsp and custom options minCharInWord = 2', () => {
	expect(
		addNbsp('What are they doing?', { minimumCharacterCountInWord: 2 }),
	).toBe('What are they doing?')
})

test('With two nbsp and custom options minCharInWord = 5', () => {
	expect(
		addNbsp('What are they doing?', { minimumCharacterCountInWord: 5 }),
	).toBe('What are they doing?')
})

test('With punctuation: short', () => {
	expect(addNbsp('I love it!')).toBe('I love it!')
})

test('With punctuation: medium', () => {
	expect(addNbsp('I love you!')).toBe('I love you!')
})

test('With punctuation: long', () => {
	expect(addNbsp('I love sats!')).toBe('I love sats!')
})
