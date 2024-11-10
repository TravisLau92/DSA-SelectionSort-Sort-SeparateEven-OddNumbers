**Title: Sort and Separate Even and Odd Numbers**

**Objective:**
Write a JavaScript function using the Selection Sort algorithm to sort an array of integers in ascending order, but with a twist: all even numbers should be sorted at the beginning of the array, followed by all odd numbers.

**Given the following input:**

```javascript
const mixedArray = [5, 2, 9, 4, 7, 6];

console.log("Even-Odd Sorted Array:", sortEvenOdd(mixedArray));
```

For example, after implementing the `sortEvenOdd` function, you should be able to produce the following output:
```javascript
[2, 4, 6, 5, 7, 9]
```

<details>
<summary>Hints</summary>

1. Define a function `sortEvenOdd(arr)` that takes an array `arr`.
2. Modify the Selection Sort logic to prioritize even numbers over odd numbers during sorting.
3. For each position in the array, first find the smallest even number from the unsorted part and place it in the current position.
4. After sorting all even numbers, follow a similar approach for the remaining odd numbers.
5. The final array should have all even numbers at the beginning in ascending order, followed by all odd numbers in ascending order.
6. Test your function with `mixedArray` to verify it correctly sorts even and odd numbers.

Remember, the key is to alter the standard Selection Sort comparison to consider the parity (even or odd) of the numbers.

</details>

**Challenge:**

- Optimize your algorithm to handle large arrays efficiently while maintaining the even-odd separation.
- Include test cases with edge conditions, like arrays with only even or only odd numbers, or arrays with repeated numbers.