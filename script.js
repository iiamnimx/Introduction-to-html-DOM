function divide()
{
    var a, b
    a=2314567890
    b=5
    document.getElementById("result2").innerHTML=a/b

}
 function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
const msgBox = document.getElementById('message').value;
    if(email === ''){
        message ='Please enter your EMAIL.';
        msgBox.stylecolor="red"

    }

    else {
        message= 'Login successful';
        msgBox.style.color='Green'
    }
    msgBox.innerText=message;
 }