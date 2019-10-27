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


// for login


document.querySelector("#loginsubmit").addEventListener("click",()=>
{
    event.preventDefault();
    let username = document.querySelector("#username");
    let pass = document.querySelector("#password");
    console.log(username.value);
    console.log(pass.value);
   
    
    let data = `username=${username.value}&password=${pass.value}`;
    console.log(data);
    let res = postData('http://127.0.0.1:8080/api/auth/login', data);
     
});


