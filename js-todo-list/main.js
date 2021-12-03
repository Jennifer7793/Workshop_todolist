// TO DO
document.addEventListener("DOMContentLoaded", ()=> {
  const closeBtn = document.querySelector(".close");
  const ul = document.querySelector("ul")

  ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
    e.target.parentNode.remove()
    }
  })

  const input = document.querySelector("#input")
  const addBtn = document.querySelector("#addBtn")
  addBtn.addEventListener("click", () => {
    inputValue = input.value.trim()
    if (inputValue !== "") {
    const todoList = document.createElement("li")
    const deleteBtn = document.createElement("span")
    todoList.innerText = input.value
    deleteBtn.innerText = "X"
    deleteBtn.className = "close" 
    ul.append(todoList)
    todoList.append(deleteBtn)
   
    const list = document.querySelectorAll("li")
    list.forEach(li => li.addEventListener("click", () => {
      if (li.className !== "checked") {
      li.className = "checked"
      }
    }))
    }
  })
});

