
const containerEl = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () =>
  containerEl.classList.add("active"),
);
loginBtn.addEventListener("click", () =>
  containerEl.classList.remove("active"),
);