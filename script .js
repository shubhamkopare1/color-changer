const container = document.createElement("div")
const body = document.querySelector("body")
body.style.display="flex"
body.style.justifyContent="center"
body.style.alignItems="center"
body.style.marginTop="6rem"
container.style.display="flex"
container.style.justifiContent="center"
container.style.alignItem="center"

const main = document.createElement("div")
body.appendChild(main)
main.style.height="20rem"
main.style.width="30rem"
main.style.background="yellow"
main.style.display="flex"
main.style.justifyContent="center"
main.style.alignItems="center"


main.appendChild(container)
container.classList.add("container")
const containers= document.querySelector(".container")
containers.style.height=""
containers.style.width="25rcontainer"
containers.style.marginLeft=""

const button1 = document.createElement("button")
containers.appendChild(button1)
button1.innerHTML="purple"
button1.style.margin=".5rem"
button1.style.height="2rem"
button1.style.margin
button1.style.display="flex"
button1.style.justifyContent="center"
button1.style.alignItems="center"
button1.style.cursor="pointer"
button1.style.background="purple"
button1.style.color="white"
button1.addEventListener("click", (e)=>{
 body.style.background="purple"
})


const button2 = document.createElement("button")
containers.appendChild(button2)
button2.innerHTML="green"
button2.style.margin=".5rem"
button2.style.height="2rem"
button2.style.cursor="pointer"
button2.style.background="green"
button2.style.color="white"
button2.addEventListener("click", (e)=>{
    body.style.background="green"
   })

const button3 = document.createElement("button")
containers.appendChild(button3)
button3.innerHTML="orange"
button3.style.margin=".5rem"
button3.style.height="2rem"
button3.style.cursor="pointer"
button3.style.background="orange"
button3.style.color="white"
button3.addEventListener("click", (e)=>{
    body.style.background="orange"
   })

const button4 = document.createElement("button")
containers.appendChild(button4)
button4.innerHTML="skyblue"
button4.style.margin=".5rem"
button4.style.height="2rem"
button4.style.cursor="pointer"
button4.style.background="skyblue"
button4.style.color="white"
button4.addEventListener("click", (e)=>{
    body.style.background="skyblue"
   })