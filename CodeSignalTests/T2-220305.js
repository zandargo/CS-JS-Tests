/*
CodeSignal 05-03-2022

You are given a string 's'.
Your task is to count the number of ways of spliting 's' into three non-empty parts 'a', 'b' and 'c' (s = a + b + c) in such a way that 'a+b', 'b+c' and 'c+a' are all different strings.

Example:
For s = "xzxzx" the output should be solution(s) = 5

If a="x", b="z"   and c="xzx" then a+b != b+c != c+a
If a="x", b="zx"  and c="zx"  then a+b != b+c != c+a
If a="x", b="zxz" and c="x"   then a+b != b+c != c+a
If a="xz", b="x" and c="zx"   then a+b == b+c 
If a="xz", b="xz" and c="x"   then a+b != b+c != c+a
If a="xzx", b="z" and c="x"   then a+b != b+c != c+a

*/
