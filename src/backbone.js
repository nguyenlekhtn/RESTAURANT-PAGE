function pageLoad() {
    const content = document.getElementById("content");
    const h2 = document.createElement("h2")
    h2.textContent = "Welcome to RBD Food";
    const p = document.createElement("p")
    p.textContent = "Our foods might be not the best. But you can have these ducks while eating";
    const pic1 = document.createElement("img")
    pic1.setAttribute("src", "../img/IMG_7540.jpeg")
    pic1.setAttribute("placeholder", "several ducks on laptop")
    pic1.style.width = "300px"
    
    
    content.appendChild(h2)
    content.appendChild(p)
    content.appendChild(pic1)
}

export default pageLoad