async function postData(url = '' , data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
       // 'Content-Type': 'application/json'
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body:data, // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }


// for register

document.querySelector("#registerSubmit").addEventListener("click",()=>
{
  event.preventDefault();
  let Name = document.querySelector("#name");
  let username = document.querySelector("#new-username")
  let email = document.querySelector("#email");
  let sex_female = document.querySelector("#sex-female");
  let sex_other = document.querySelector("#sex-other"); 
  let phone = document.querySelector("#phoneNumber");
  let password = document.querySelector("#new-password");
  let dob = document.querySelector("#dob");

  let sex="male";

  console.log(sex_female.checked);
  if(sex_female.checked)
  sex="female";
  else
  if(sex_other.checked)
  sex="other";

  let data = `fulllName=${Name.value}&userName=${username.value}&email=${email.value}&sex=${sex}&phoneNumber=${phone.value}&password=${password.value}&dob=${dob.value}`;
    
  let res = postData('http://127.0.0.1:8080/api/auth/register',data);

})