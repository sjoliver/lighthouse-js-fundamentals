for (let num = 100; num <=200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}


/* 
> call buildTriangle using a single number
> buildTriangle will call makeLength 
> buildTriangle will call makeLength the same # of times as the length 
> start with 1 and increment by 1 the same # of times as the length given 
*/