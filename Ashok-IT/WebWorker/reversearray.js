this.onmessage = function(e){
    //
  let str = Array.from(e.data);//creating array
  let arr = str.reverse(); //reversing the  array 
  
  let str2 = arr.join();//convert the character array to string 
  console.log(str2);
}