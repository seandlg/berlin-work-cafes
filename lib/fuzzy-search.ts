import type { Cafe } from "@/types/cafe"

export function fuzzySearch(cafes: Cafe[], query: string): Cafe[] {
  if (!query.trim()) return cafes

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0)

  return cafes.filter((cafe) => {
    const searchableText = `${cafe.name} ${cafe.query} ${cafe.description} ${cafe.kiez}`.toLowerCase()

    // Check if all search terms are found in the searchable text
    return searchTerms.every(
      (term) =>
        searchableText.includes(term) ||
        // Simple fuzzy matching - allow 1 character difference for terms > 3 chars
        (term.length > 3 &&
          searchableText
            .split(" ")
            .some((word) => Math.abs(word.length - term.length) <= 1 && levenshteinDistance(word, term) <= 1)),
    )
  })
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null))

  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[j][i] = Math.min(matrix[j][i - 1] + 1, matrix[j - 1][i] + 1, matrix[j - 1][i - 1] + indicator)
    }
  }

  return matrix[str2.length][str1.length]
}
