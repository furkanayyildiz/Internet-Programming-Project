function checkInputs() {
  const topic = document.getElementById("topic").value;
  const mail = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (topic.length > 25) {
    alert("Topic should be max 25 characters");
  } else if (!mail.includes("@gmail.com")) {
    alert("This e-mail improperly.It must contain @gmail.com");
  }
  if (message.length === 0) {
    alert("Message field is empty");
  } else {
    alert("Message is sent");
  }
}

function checkMessage() {
  const message = document.getElementById("message").value;
  if (message.length < 5 || message.length > 40) {
    document.getElementById("button").disabled = true;
  } else {
    document.getElementById("button").disabled = false;
  }
}
