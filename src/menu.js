import comtam from './img/comtam.jpg'
import pizza from './img/pizza.jpg'
function pageLoad() {
    const content = document.getElementById("content");
    const columnCtn = document.createElement("div")
    columnCtn.classList.add("column-container")
    const h1 = document.createElement("h1")
    h1.textContent = "Menu"
    columnCtn.appendChild(h1)
    const p = document.createElement("p")
    p.textContent = "We deliver healthy dishes for your to have the best code ever"
    columnCtn.appendChild(p)
    const menu = document.createElement("div")
    menu.classList.add("menu")
    const item1 = makeItem({comtam}, "Com tam dish")
    const item2 = makeItem({pizza}, "Pizza")
    menu.appendChild(item1)
    menu.appendChild(item2)
    columnCtn.appendChild(menu)
    content.appendChild(columnCtn)
}

function makeItem(src, alt) {
    const item = document.createElement("div")
    item.classList.add("item")
    const img = document.createElement("img")
    img.setAttribute("src", src)
    img.setAttribute("alt", alt)
    item.appendChild(img)

    return item
}

export default pageLoad