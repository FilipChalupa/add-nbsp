export function autoNbsp(text: string) {
  return text.split(/[ ]/).reduce((acc, word, index) => {
    if (acc === '') return word;

    return word.length <= 3 ? `${acc}&nbsp;${word}` : `${acc} ${word}`;
  }, '');
}
