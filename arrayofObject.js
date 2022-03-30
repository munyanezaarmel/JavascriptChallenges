function arrayOfObject(arr){
    for(let i=0;i<arr.length;i++){
    let first=arr[i].split(' ')[0]
    let second=arr[i].split(' ')[1].slice(0,-1)
    let age=arr[i].split(' ')[2]
    let obj={second,age}
    return `${first}${second}`
    }
  
   
}
 console.log(arrayOfObject(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]));
