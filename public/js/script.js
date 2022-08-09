// Declare variables and assign objects from the DOM
//register an event listener on the form object.
//create an async function that create a POST request to the server and handles a response.

const username = document.getElementById("username")
const password = document.getElementById("password")
const loginBtn = document.getElementById("login-btn")
const loginForm = document.getElementById("login-form")
const content = document.getElementById("content")
const loader = document.getElementById("loader")

async function onSubmit(e) {
    // prevent normal form behaviour
    e.preventDefault()
    const payload = {
        username: username.value,
        password: password.value
    }
    // store response
    const response = await fetch('http://localhost:3000', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
    });

    // get reponse
    const data = await response.json();
    console.log(data);
}

loginForm.addEventListener("submit", onSubmit)