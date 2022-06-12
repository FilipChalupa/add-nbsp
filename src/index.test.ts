import { autoNbsp } from './index';

test('With no nbsp', () => {
	expect(autoNbsp('Common description')).toBe('Common description');
});

test('With one nbsp', () => {
	expect(autoNbsp('What are they doing?')).toBe('What&nbsp;are they doing?');
});

test('With no nbsp and custom options minCharInWord = 2', () => {
	expect(autoNbsp('What are they doing?', { minCharInWord: 2 })).toBe('What are they doing?');
});

test('With two nbsp and custom options minCharInWord = 5', () => {
	expect(autoNbsp('What are they doing?', { minCharInWord: 5 })).toBe('What&nbsp;are&nbsp;they doing?');
});
