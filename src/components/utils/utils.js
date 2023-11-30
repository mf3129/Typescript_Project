export const condenseString = (text, maxWords) => {
    if (text.length > maxWords) {
      let startWords = text.slice(0, maxWords);
      return startWords + '...'
    } else {
      return text
    }
}
