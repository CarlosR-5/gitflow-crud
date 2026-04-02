let users = [];
let loggedIn = false;

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user.length < 3 || pass.length < 4) {
  alert("Datos inválidos");
  return;
}

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
        <button onclick="editUser(${i})">Editar</button>
        <button onclick="deleteUser(${i})">Eliminar</button>
      </li>`;
  });
}

function editUser(index) {
  const newName = prompt("Nuevo nombre:");
  const newEmail = prompt("Nuevo email:");

  users[index] = { name: newName, email: newEmail };
  render();
}

function deleteUser(index) {
  users.splice(index, 1);
  render();
}