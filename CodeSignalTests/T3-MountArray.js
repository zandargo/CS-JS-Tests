/*
You are given an array of strings "arr". Your task is to construct a string from the words in "arr" starting with the 0th character from each word (in order they appear in arr), followed by the 1st character, the the 2nd character, etc. If one of the words doesn't have an i'th character, skip the word.

Return the resulting string.

Example:
For arr = ["Daisy", "Rose", "Hyacinth", "Poppy"], the output should be solution(arr) = "DRHPaoyoisapsecpyiynth"

0th char: "DRHP"
1th char: "DRHPaoyo"
2th char: "DRHPaoyoisap"
3th char: "DRHPaoyoisapsecp"
4th char: "DRHPaoyoisapsecpyiy"
arr[2] left: "DRHPaoyoisapsecpyiynth"

*/
