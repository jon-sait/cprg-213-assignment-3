// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");
let contactPage = document.getElementById("contact-page");

function onSubmitClicked() {
  let p = document.createElement("p");
  p.innerHTML = "Thank you for your message";
  p.style.fontSize = "24px";

  contactPage.replaceChildren(p);
}

submitButton.addEventListener("click", onSubmitClicked);
