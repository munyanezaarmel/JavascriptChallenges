function timeComplexity(arr){
    let string= arr.map(String)
    return string.reduce((acc,prev)=>{
  return (charCodeAt(prev)===charCodeAt(acc)?charCodeAt(acc)+1:charCodeAt(acc))
    })
}
console.log(timeComplexity([3,1,3,4,4,5,3,5,3,3,3,6,3]))