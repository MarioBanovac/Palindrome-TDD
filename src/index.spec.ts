import PalindromeChecker from "./index";

describe("palindrome checker", () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  test("Should be able to tell that 'mom' is a palindrome ", () => {
    expect(palindromeChecker.isAPalindrome("mom")).toBeTruthy();
  });

  test("Should be able to tell that 'bill' is not a palindrome", () => {
    expect(palindromeChecker.isAPalindrome("bill")).toBeFalsy();
  });

  test("Should be able to ignore lowercase and uppercase letters", () => {
    expect(palindromeChecker.isAPalindrome("RacECAR")).toBeTruthy();
  });

  it("should be able to tell that 'Was It A Rat I Saw' is a palindrome", () => {
    expect(palindromeChecker.isAPalindrome("Was It A Rat I Saw")).toBeTruthy();
  });

  it("should be able to tell that 'Never Odd or Even' is palindrome", () => {
    expect(palindromeChecker.isAPalindrome("Never Odd or Even")).toBeTruthy();
  });
});
