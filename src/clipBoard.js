const textArea = document.querySelector("#emailBodyContntent");
const btnCopy = document.querySelector(".copy-btn");

const copyText = () => {
  navigator.clipboard.writeText(textArea.value);
  alert("Your message was copy !");
};

btnCopy.addEventListener("click", copyText);
