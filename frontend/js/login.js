// for login

document.querySelector("#loginsubmit").addEventListener("click",()=>
{
    event.preventDefault()
    var username = document.querySelector("#username");
    var pass = document.querySelector("#password");
    console.log(username.value);
    console.log(pass.value);
   
    async function postData(url = '') {
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
        body: `username=${username.value}&password=${pass.value}`, // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }
    

    let res = postData('http://127.0.0.1:8080/api/auth');
     
});


// for register

document.querySelector("#register").addEventListener("click",()=>
{
  
})