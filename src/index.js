import Home from "./home"
import Menu from "./menu"
import Contact from "./contact"

const tabs = document.querySelectorAll(".tabs button")
const content = document.getElementById("content")
const pageLoad = {Home, Menu, Contact}
tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        if(!tab.classList.contains("isActive")) {
            content.textContent = ""
            removeActiveTab()
            activeCurrentTab(tab)
            pageLoad[`${e.target.textContent}`]()
        }
        
    })
})

Home()

function removeActiveTab() {
    tabs.forEach(tab => {
        tab.classList.remove("isActive")
    })
}

function activeCurrentTab(tab) {
    tab.classList.add("isActive")
}

