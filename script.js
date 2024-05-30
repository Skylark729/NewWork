$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }

});

//show password

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Login validation of username and password 

function validateform(){  
var name=document.myform.username.value;  
var password=document.myform.password.value;  


if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<8){  
  alert("Password must be at least 8 characters long.");  
  return false;  
  }  
}  


//Sign upvalidation of username and password 

function validatesign(){  
var name=document.myform.fname.value;    
var password=document.myform.password.value;  
var password=document.myform.password2.value;
var passwordError = document.getElementById("password_error");


if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<8){  
  alert("Password must be at least 8 characters long.");  
  return false;  
  } 

fetch('fetchData.php')
            .then(response => response.json())
            .then(data => {
                // Update HTML content with the retrieved data
                document.getElementById('confirmation-data').innerHTML = `
                    <p>First Name: ${data.first_name}</p>
                    <p>Last Name: ${data.last_name}</p>
                    <p>Email: ${data.email}</p>
                    <!-- Add more fields as needed -->
                `;
            })
            .catch(error => console.error('Error:', error))



/*if(password !== password2){
  passwordError.textContent = "password do not match";
  return false;
} else {
  passwordError.textContent = "";
  return true;
}*/
}   



