// your code here


function uncompress(str){
    let string = str.split('')
    let newString =[]
    let letters = []
   
   
   
    // for(let char of string){
    //   if(Number(char)) newString.push(Number(char))
    // }
    // return newString
      for(let i=0; i<string.length; i+=2){ 
      
      console.log(i)
      }
   
    
  
  }
  
  console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
  // console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
  // console.log(uncompress('b1o2t1')); // 'boot'