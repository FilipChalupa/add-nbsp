type AutoNbspOptions = {
	minimumCharacterCountInWord: number
}

export function addNbsp(text: string, options?: AutoNbspOptions) {
	const { minimumCharacterCountInWord = 3 } = options ?? {}

	return text.split(/[ ]/).reduce((accumulator, word) => {
		if (accumulator === '') {
			return word
		}

		const space =
			word.replaceAll(/[\.,\?\!\:]/g, '').length <= minimumCharacterCountInWord
				? ' '
				: ' '

		return `${accumulator}${space}${word}`
	}, '')
}
