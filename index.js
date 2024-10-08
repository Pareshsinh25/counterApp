const countValue = document.querySelector('#value');


function increment(){
     
    //get the value and convert string to int usning parseInt() funtion use
    let value = parseInt(countValue.innerText);
    //update the value
    value = value + 1;
    //Set the value onto UI
    countValue.innerText  = value;
    
}

function decrement() {

     //get the value
     let value = parseInt(countValue.innerText);
     //update the value
     value = value - 1;
     //Set the value onto UI
     countValue.innerText  = value;

}

