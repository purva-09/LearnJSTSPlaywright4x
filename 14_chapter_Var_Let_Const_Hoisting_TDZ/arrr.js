let arr = [1,2,56,22,11];
let smallest = arr[0];

for (const num of arr) {
      if (num< smallest) {
          smallest =num;
    }
   }
    console.log(smallest);