//* ======================================================
//*                     TODO APP
//* ======================================================

//? Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new to do");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      compledted: false,
      text: todoInput.value,
    };
    //! yeni bir li elementi olusturup bunu dom'a bas
    createListElement(newTodo);
    todoInput.value = "";
  }
});

const createListElement = (newTodo) => {
  const li = document.createElement("li");
  // li.id = newTodo.id
  li.setAttribute("id", newTodo.id);

  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(newTodo.text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  //? delete ikonu oluştur ve li elementine bagla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //? meydana gelen li elementini ul'ye child olarak ata
  todoUl.appendChild(li);
};

//? enter tusu ile ekleme mumkun olsun
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

//? Baslangicta input aktif hale gelsin
window.onload = function () {
  todoInput.focus();
};
