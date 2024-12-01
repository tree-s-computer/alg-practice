let numbers = [2, 5, 8, 1, 9];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentNumber = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentNumber) {
      console.log("----while start----");
      console.log("c" + currentNumber);
      console.log("j" + arr[j]);
      arr[j + 1] = arr[j];
      j--;
      console.log("----while end----");
    }

    console.log("i", i);
    console.log("j", j);
    console.log("currentNumber", currentNumber);
    arr[j + 1] = currentNumber;
  }
}
console.log(insertionSort(numbers));
