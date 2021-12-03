// TO DO
document.addEventListener("DOMContentLoaded", ()=> {
  const closeBtn = document.querySelector(".close");
  const ul = document.querySelector("ul")
  const list = document.querySelectorAll("li")
  
  list.forEach(li => li.addEventListener("click", () => {
    if (li.className !== "checked") {
    li.className = "checked"
    }
  }))

  ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
    e.target.parentNode.remove()
    }
  })
});

// closeBtn.addEventListener("click", (e) => {
//   console.log(e);
//   // e.target.parentNode.remove();
// })