interface IPalindromeChecker {
  isAPalindrome: (word: string) => boolean;
}

export default class PalindromeChecker implements IPalindromeChecker {
  isAPalindrome(word: string): boolean {
    const cleanedStr = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the cleaned string is equal to its reverse
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
  }
}
