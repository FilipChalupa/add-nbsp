type AutoNbspOptions = {
	minCharInWord: number;
};

export function addNbsp(text: string, options?: AutoNbspOptions) {
	const { minCharInWord = 3 } = options || {};

	return text.split(/[ ]/).reduce((acc, word) => {
		if (acc === '') return word;

		return word.length <= minCharInWord ? `${acc}&nbsp;${word}` : `${acc} ${word}`;
	}, '');
}
