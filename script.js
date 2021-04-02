function solution(A) {
  let result = 0;
  let start = 0;
  let end = 0;
  let lowestnum = 0;
  let rising = 0;
  let lenA = A.length;

  while (end < lenA && start < lenA - result) {
    if (A[end] <= A[lowestnum]) {
      lowestnum = end;
    }
    if (end - start + 1 < A[lowestnum] && A[lowestnum] > result) {
      if (A[end] < A[end + 1] && end === rising) {
        rising += 1;
      }
      end += 1;
      if (end == lenA - 1) {
        result = Math.max(result, end - start + 1);
      }
    } else {
      result = Math.max(result, end - start, A[lowestnum]);
      start = lowestnum = lowestnum + 1;
      rising = end = Math.max(start, rising, lowestnum + 1);
      if (start === end) {
        end = rising = end + 1;
      }
    }
  }
  return result;
}

