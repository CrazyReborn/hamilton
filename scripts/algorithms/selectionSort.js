// 1. define the first element as min and mainIndex as array[0];
// 2.
//    a) define subindex as mainIndex + 1 to iterate over the subArray;
//    b) define subMin as array[subIndex];
// 3. find the min(submin) in the subarray;
// 4. if submin is less than mainmin -> swap;
// 5. increase mainIndex bby one
// 6. repeat;

export default function selectionSort(array) {
  console.log('before: ');
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdex = i;

    for (let i2 = i + 1; i2 < array.length; i2++) {
      if (array[i2] < min) {
        min = array[i2];
        minIdex = i2;
      }
    }
      let ref = min;
      array[minIdex] = array[i];
      array[i] = ref;
  }

  console.log('after:');
  console.log(array);
}