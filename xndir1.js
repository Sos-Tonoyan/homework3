const array = [1,98,78,56,0,24]
const kentArray = []
const zuygArray = []


function zuyg(arr) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
          zuygArray.push(array[i]) 
      }
        
    }
    return zuygArray
}


function kent(arr) {
    for (let j = 0; j < array.length; j++) {
     if (array[j] % 2 !== 0) {
         kentArray.push(array[j])
     }   
        
    }
    return kentArray
}

console.log(zuyg(array),kent(array))
