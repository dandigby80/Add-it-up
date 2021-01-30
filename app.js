let num1Input = document.getElementById('number-1');

let num2Input = document.getElementById('number-2');

let btnAdd = document.querySelector('.btn-add');
let btnReset = document.querySelector('.btn-reset');

let result = document.getElementById('result');

let message = document.querySelector('.result-text');

btnAdd.addEventListener('click', function(){
  if(num1Input.value === '' || num2Input.value === ''){
    message.textContent = 'Please enter two numbers';
    message.style.backgroundColor = 'red';
    message.style.visibility = 'visible';
    num1Input.value = '';
    num2Input.value = '';
  }else{

    let final = parseFloat(num1Input.value) + parseFloat(num2Input.value);
    result.value = final;
    message.textContent = 'Yay! We added stuff up!'
    message.style.visibility = 'visible';
    message.style.backgroundColor = 'steelblue';
    num1Input.value = '';
    num2Input.value = '';
  }

})

btnReset.addEventListener('click', function(){
  num1Input.value = '';
  num2Input.value = '';
  result.value = '';
  message.style.visibility = 'hidden';
})