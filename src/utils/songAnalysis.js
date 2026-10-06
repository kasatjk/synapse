const VOWELS = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];
const VOWEL_SET = new Set(VOWELS);
const CONSONANT_SET = new Set('бвгґджзйклмнпрстфхцчшщ');

export function analyzeSongTexts(texts) {
  const vowelCounts = Object.fromEntries(VOWELS.map((vowel) => [vowel, 0]));
  let consonantCount = 0;

  for (const character of texts.join('').toLocaleLowerCase('uk-UA')) {
    if (VOWEL_SET.has(character)) {
      vowelCounts[character] += 1;
    } else if (CONSONANT_SET.has(character)) {
      consonantCount += 1;
    }
  }

  const vowelCount = Object.values(vowelCounts).reduce((total, count) => total + count, 0);
  const totalLetters = vowelCount + consonantCount;
  const vowels = VOWELS.map((letter) => ({
    letter,
    count: vowelCounts[letter],
    percentage: vowelCount === 0 ? 0 : (vowelCounts[letter] / vowelCount) * 100,
  })).sort((first, second) => second.count - first.count);
  const mostUsedVowels = vowelCount === 0
    ? []
    : vowels.filter((vowel) => vowel.count === vowels[0].count);

  return {
    totalLetters,
    vowelCount,
    consonantCount,
    vowelPercentage: totalLetters === 0 ? 0 : (vowelCount / totalLetters) * 100,
    consonantPercentage: totalLetters === 0 ? 0 : (consonantCount / totalLetters) * 100,
    vowels,
    mostUsedVowels,
  };
}
