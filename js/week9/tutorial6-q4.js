function countStr(haystack, needle) {
    // we need to split 'haystack' into an array, 
     // because `indexOf` only return the first occurance of the searched string
      let arr = haystack.split(" ");
    //   a variable for counting
      let counter = 0;
    //   iterate through the 'haystack' array 
      for (let i = 0; i < arr.length; i ++) {
        let item = arr[i];
    //     search for `needle` in each word
        if (item.indexOf(needle) !== -1) {
          counter += 1;
        }
      }
    //   return the result
      return counter;
    }
    
    const s0 = "I scream, you scream, we all scream for icecream!";
    
    const n0 = "cream";
    
    console.log(countStr(s0, n0));
    
    const s1 = "She sells sea shells on the sea shore. The shells that she sells are"+
    "sea shells I'm sure. So if she sells sea shells on the sea shore, I'm" +
    "sure that the shells are sea shore shells";
    
    const n1 = "sea";
    
    console.log(countStr(s1, n1));
    
