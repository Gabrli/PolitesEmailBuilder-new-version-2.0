import { greetings } from "./obj/emailElements.js";
import { followUp } from "./obj/emailElements.js";
import { farwell } from "./obj/emailElements.js";
import { conclusions } from "./obj/emailElements.js";

const Greetings = document.querySelector("#greeting");
const FollowUp = document.querySelector("#followUp");
const Farwell = document.querySelector("#farwell");
const Conclusions = document.querySelector("#conclusions");
const resetBtn = document.querySelector(".reset-btn");

const emailBuilder = [
  {
    wrraper: Greetings,
    options: greetings,
  },
  {
    wrraper: FollowUp,
    options: followUp,
  },
  {
    wrraper: Farwell,
    options: farwell,
  },
  {
    wrraper: Conclusions,
    options: conclusions,
  },
];

const btnBuilder = (text) => {
  const button = document.createElement("button");
  button.innerHTML = text;
  button.addEventListener("click", () => TextReplacer(event));
  button.classList.add("btn-grettings");
  return button;
};

const removeParent = (nodeList) => {
  nodeList.forEach((element) => {
    element.remove();
  });
};

const createTextNode = (nodeText) => {
  const choiceOptionWrapper = document.createElement("div");
  choiceOptionWrapper.innerHTML = nodeText;

  return choiceOptionWrapper;
};

const resetOptionsElements = (e) => {
  emailBuilder.forEach((mailObject) => {
    if (mailObject.wrraper === e.target.parentNode) {
      mailObject.wrraper.classList.remove("new-item");
      mailObject.wrraper.innerHTML = "";

      mailObject.options.forEach((option) => {
        mailObject.wrraper.appendChild(btnBuilder(option));
      });
    }
  });
};

const resetObject = () => {
  emailBuilder.forEach((mailObject) => {
    mailObject.wrraper.classList.remove("new-item");
    mailObject.wrraper.innerHTML = "";
    mailObject.options.forEach((option) => {
      mailObject.wrraper.appendChild(btnBuilder(option));
    });
  });
};

const createResetButton = () => {
  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>';

  resetBtn.addEventListener("click", resetOptionsElements);
  return resetBtn;
};

const TextReplacer = (e) => {
  const choiceElement = e.target.parentNode;
  removeParent(choiceElement.querySelectorAll(".btn-grettings"));
  choiceElement.appendChild(createTextNode(e.target.innerText));
  choiceElement.appendChild(createResetButton());
  choiceElement.classList.add("new-item");
};

const ObjectBuilder = () => {
  emailBuilder.forEach((mailObject) => {
    const optionsWrapper = mailObject.wrraper;
    optionsWrapper.innerHTML = "";
    mailObject.options.forEach((option) => {
      optionsWrapper.appendChild(btnBuilder(option));
    });
  });
};

ObjectBuilder();

resetBtn.addEventListener("click", resetObject);
