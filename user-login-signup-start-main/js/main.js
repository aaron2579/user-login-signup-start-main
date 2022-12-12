// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let username = document.getElementById('username');
let password = document.getElementById('pass');
let confirm = document.getElementById('confirm');

// Global Variables
let user = loadLogin()

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let username = document.getElementById('username').value
  let password = document.getElementById('pass').value;
  let confirm = document.getElementById('confirm').value;
  let index = searchUsers(username);
  if (username === "") {
    alert("Please input Username");
  } else {
    if (index === -1) {
      if (confirm !== password) {
        alert("Password must match");
      } else {
        alert("New User Added");
        user.push(newUser(username, password));
        saveUser();
      }
    } else {
      alert("Username is already in use");
    }
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let username = document.getElementById('username').value
  let password = document.getElementById('pass').value;
  let signInUser = document.getElementById('user-sign-in').value
  let signInPass = document.getElementById('pass-sign-in').value;
  if (signInUser === username && signInPass === password) {
      alert("Sign in successful")
  } else {
      alert("Sign in not succcessful")
  }
}

// Helpers
function newUser(Username, Password) {
  return {
     username: Username,
     password: Password,
  }
}

function searchUsers(username) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].username === username) {
      return i
    }
  }
  return -1
}

// Save tasks to local storage
function saveUser() {
  localStorage.setItem('user', JSON.stringify(user));
}

function loadLogin() {
  let loginStr = localStorage.getItem("user")
  return JSON.parse(loginStr) ?? []
}