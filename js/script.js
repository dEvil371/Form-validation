let submitButton = document.querySelector('.sub-form');
console.log(submitButton);

submitButton.addEventListener('submit', run);

function run(e) {
    e.preventDefault();

    let nameInput = document.getElementById('name-box');

    let userIdInput = document.getElementById('userid-box');
    let passwordInput = document.getElementById('password-box');
    let confirmInput = document.getElementById('con-password-box');
    let emailInput = document.getElementById('email-box');
    let numberInput = document.getElementById('ph-number');
    let errorMsg1 = document.querySelector('#error-box1');
    let errorMsg2 = document.querySelector('#error-box2');
    let errorMsg3 = document.querySelector('#error-box3');
    let errorMsg4 = document.querySelector('#error-box4');
    let errorMsg5 = document.querySelector('#error-box5');
    let errorMsg6 = document.querySelector('#error-box6');




    //for name value
    if (nameInput.value.length == 0) {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('NAME CANNOT BE EMPTY'));
        errorMsg1.appendChild(errMsg);
    }
    else if (nameInput.value.length>25)
    {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('NOT MORE THAN 16 LETTERS'));
        errorMsg1.appendChild(errMsg);
    }





        if (userIdInput.value.length == 0) {
            let errMsg = document.createElement('div');
            errMsg.className = 'msg';
            errMsg.appendChild(document.createTextNode('USER ID CANNOT BR EMPTY'));
            errorMsg2.appendChild(errMsg);
        }




    if (passwordInput.value.length == 0) {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('PASSWORD CANNOT BE EMPTY'));
        errorMsg3.appendChild(errMsg);
    }



    if (confirmInput.value.length == 0) {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('PASSWORD CANNOT BE EMPTY'));
        errorMsg4.appendChild(errMsg);
    }

    else if(passwordInput.value!=confirmInput)
    {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('PASSWORD DID NOT MATCHED'));
        errorMsg4.appendChild(errMsg);
    }



    if (emailInput.value.length == 0) {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('EMAIL CANNOT BE EMPTY'));
        errorMsg5.appendChild(errMsg);
    }



    if (numberInput.value.length == 0) {
        let errMsg = document.createElement('div');
        errMsg.className = 'msg';
        errMsg.appendChild(document.createTextNode('PHONE NO. CANNOT BE EMPTY'));
        errorMsg6.appendChild(errMsg);
    }


}