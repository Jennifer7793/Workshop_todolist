// TO DO
document.addEventListener("DOMContentLoaded", ()=> {
  const closeBtn = document.querySelector(".close");
  const list = document.querySelectorAll("li")
  
  list.forEach(li => li.addEventListener("click", (e) => {
    if (li.className !== "checked") {
    li.className = "checked"
    }
  }))
});
