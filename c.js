function generateCaptcha() {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var randomString = "";
    for (var i = 0; i < 6; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("captcha").innerHTML = randomString;
  }
 
function check(event) {
  event.preventDefault();

  const captcha = document.getElementById('captcha');
  const capinput = document.getElementById('capinput');

  if (captcha.textContent === capinput.value) {
    alert("Success!"); 
    test(); 
  } else {
    alert("Incorrect CAPTCHA, try again!"); 
    test();
  }
}

test();