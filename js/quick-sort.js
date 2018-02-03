const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }else{
      let pivot = arr.shift();
      let left = [];
      let right = [];
      let newArr = [];
      
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          left.push(arr[i]);
        }else{
          right.push(arr[i]);
        }
      }
      return newArr.concat(quickSort(left), pivot, quickSort(right));
    }
  };