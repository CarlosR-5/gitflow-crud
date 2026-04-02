let users = [];
let loggedIn = false;

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "admin" && pass === "1234") {
    loggedIn = true;
    document.getElementById("auth").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Credenciales incorrectas");
  }
}

function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  users.push({ name, email });
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  users.forEach((u, i) => {
    list.innerHTML += `
      <li>
        ${u.name} - ${u.email}
      </li>`;
  });
}