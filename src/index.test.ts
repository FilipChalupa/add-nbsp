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
	).toBe('What are they doing?')
})
