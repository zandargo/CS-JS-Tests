/*
CodeSignal 05-03-2022

You are given two integer arrays "a" and "b" of the same length.
Let's define the difference between a and b as the sum of absolute differences of corresponding elements:
difference = |a[0]-b[0]| + |a[1]-b[1]| + ... + |a[n]-b[n]|

You can replace one element of a with any other element of a.
Your task is to return the minimun possible difference between a and b that can be achieved by performing at most one such replacement on a.
You can also choose to leave the array intact.

Example:
For a=[1,3,5] and b=[5,3,1] the output should be solution(a,b)=4

If original a,  diff = |1-5| + |3-3| + |5-1| = 8
If a[0] = a[1], diff = |3-5| + |3-3| + |5-1| = 6 
If a[0] = a[2], diff = |5-5| + |3-3| + |5-1| = 4 
If a[1] = a[0], diff = |1-5| + |1-3| + |5-1| = 10 
If a[1] = a[2], diff = |1-5| + |5-3| + |5-1| = 10
If a[2] = a[0], diff = |1-5| + |3-3| + |1-1| = 4
If a[2] = a[1], diff = |1-5| + |3-3| + |3-1| = 6

*/
