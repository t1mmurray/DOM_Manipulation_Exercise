// 1
document.getElementById("container")
// 2
document.querySelector("#container")
// 3
document.querySelectorAll(".second")
// 4
document.querySelector("ol .third")
// 5
let section = document.querySelector("#container")
section.innerText = "Hello!"
// 6
let div = document.querySelector(".footer")
div.classList.add("main")
// 7
div.classList.remove("main")
// 8
let li = document.createElement("li")
// 9
li.innerText = "four"
// 10
let ul = document.querySelector("ul")
ul.append(li)
// 11
let lis = document.querySelectorAll("ol li")
for (let li in lis){
    li.style.backgroundColor = "green"
}
// 12
let footer = document.querySelector(".footer")
footer.remove()