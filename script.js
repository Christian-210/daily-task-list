const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");
const username = prompt("Enter your username");
const h1 = document.querySelector("h1");
const welcomeMsg = document.querySelector(".welcome-msg");

welcomeMsg.textContent = `Welcome back ${username}, get it done today, no excuses!`;

function addDelete(element) {
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.textContent = "Delete";

  element.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    delBtn.parentElement.classList.add("animate__bounceOutDown");
    setTimeout(() => {
      delBtn.parentElement.remove();
    }, 500);
  });
}

function addNewLi() {
  if (input.value.length > 0) {
    const li = document.createElement("li");
    li.classList.add("animate__animated", "animate__fadeInUp");
    setTimeout(() => {
      li.classList.remove("animate__fadeInUp");
    }, 1000);

    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";

    addDelete(li);
    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });
  } else {
    console.log("Enter a value!");
  }
}

button.addEventListener("click", addNewLi);
input.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    addNewLi();
  }
});

lis.forEach((li) => {
  addDelete(li);
  li.classList.add("animate__animated");

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});
