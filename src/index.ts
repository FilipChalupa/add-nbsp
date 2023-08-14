type AutoNbspOptions = {
	minimumCharacterCountInWord: number
}

export function addNbsp(text: string, options?: AutoNbspOptions) {
	const { minimumCharacterCountInWord = 3 } = options ?? {}

	return text.split(/[ ]/).reduce((accumulator, word) => {
		if (accumulator === '') {
			return word
		}

		const space = word.length <= minimumCharacterCountInWord ? ' ' : ' '

		return `${accumulator}${space}${word}`
	}, '')
}
