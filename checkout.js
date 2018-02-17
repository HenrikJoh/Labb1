let myForm = document.getElementById('myform');
myForm.addEventListener('submit', function(e){
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let street = document.getElementById('street');
    let zip = document.getElementById('zip');
    let city = document.getElementById('city');


    let nameRegExp = /^[a-zA-Z]+$/;
    let streetRegExp = /^[a-zA-Z0-9]+$/;
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numberRegExp = /^[0-9]+$/;

    if (!firstName.value.match(nameRegExp) || firstname.value.length === 0) {
        console.log('no good fname');
        document.getElementById('fname').innerHTML = "Only characters";
        event.preventDefault();
        return false;
    }

    if (!lastName.value.match(nameRegExp) || lastName.value.length === 0) {
        console.log('no good lname');
        document.getElementById('lname').innerHTML = "Only characters";
        event.preventDefault();
        return false;
    }
    if (!email.value.match(emailRegExp) || email.value.length === 0) {
        console.log('no good email');
        document.getElementById('mail').innerHTML = "No good email";
        event.preventDefault();
        return false;
    }

    if (phone.value === "") {
        //document.getElementById('phonee').innerHTML = "";
        event.preventDefault();
        return false;
    }
     else if (phone.value.match(numberRegExp) && phone.value.length !== 10) {
        document.getElementById('phonee').innerHTML = "Must be 10 digits";
        console.log('must be 10 digit');
        event.preventDefault();
        return false;
    }

    if (!street.value.match(nameRegExp) || street.value.length === 0) {
        document.getElementById('streeet').innerHTML = "Only characters";
        console.log('no good street');
        event.preventDefault();
        return false;
    }
    if (!zip.value.match(numberRegExp) || zip.value.length !== 5) {
        document.getElementById('zipp').innerHTML = "Must be 5 digit";
        console.log('no good zip');
        event.preventDefault();
        return false;
    }
    if (!city.value.match(nameRegExp) || city.value.length === 0) {
        document.getElementById('cityy').innerHTML = "Only characters";
        console.log('no good city');
        event.preventDefault();
        return false;
    }
});
