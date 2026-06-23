// Instructions in the CSS

function checkAge =(){
  let age = document.getElement("ageBox").value;
  let message

  if (age >= 18) {
    message = "You can vote!";
  } else if (age >= 16) {
    message = "You can pre-enrol.";
  } else {
    mesage = "Sorry, you can't register yet.";
  }


  document.getElementById("result").innerText = message;
}

document.getElementById("submit").onclick = checkAge

