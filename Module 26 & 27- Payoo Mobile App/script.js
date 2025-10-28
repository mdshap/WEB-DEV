

const handleClick = () => {
  const num = "01843388550";
  const pin = "1234";
  const inputNum = document.getElementById("mobile").value;
  const inputPin = document.getElementById("pin").value;

  const wrongNumOrPass = document.getElementById("wrong-num-or-pass");
  wrongNumOrPass.innerHTML = "";
  if (num == inputNum && pin == inputPin) {
    window.location.href = "./home.html";
  } else {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p>Wrong Mobile Number or Pin</p>
        `;

    wrongNumOrPass.append(newDiv);
  }
};

const login = document.getElementById("login-btn");
login.addEventListener("click", handleClick);


