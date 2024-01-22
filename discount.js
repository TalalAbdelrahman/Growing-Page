// let btn=document.getElementById('btn')

// let out=document.getElementById('output')

// const cupon="Before price : 300$, After discount : 200$"

// btn.addEventListener('click',
// function(){
//     let result=cupon
//     out.innerHTML=result
// }

// )

let btn = document.getElementById('btn');
let out = document.getElementById('output');

const coupon = "Before Discount : 300$, After Discount : 200$";

    btn.addEventListener('click', 
    function() {
      let result = coupon;
      out.innerHTML = result;
    });