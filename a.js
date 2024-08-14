function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // 피벗을 배열의 마지막 원소로 선택
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  // 피벗을 기준으로 배열을 나누기
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  console.log("Left: ", left);
  console.log("Pivot: ", pivot);
  console.log("Right: ", right);

  // 재귀적으로 정렬하고, 피벗을 가운데에 놓음
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 예제 사용
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array: ", sortedArray);
