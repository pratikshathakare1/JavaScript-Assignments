// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); 

function submitForm(event){
        event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = document.getElementById('hobbies').value;

   
    const formData = {
        firstname,
        lastname,
        dob,
        address,
        phone,
        email,
        gender,
        hobbies
    };

    console.log(formData); 
};
