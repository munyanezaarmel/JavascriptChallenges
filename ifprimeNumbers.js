function primeNumbers(arr){
    for(let i=2;i<arr.length;i++){
        if(arr[i]%i==0){
            return false
        }
    }
}
console.log(primeNumbers[1,2,3,4,5,6,7,8,9,10])