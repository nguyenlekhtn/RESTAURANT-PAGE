import MyPic from './img/IMG_7540.jpeg'

function pageLoad() {
    const content = document.getElementById("content");
    const h1 = document.createElement("h1")
    h1.textContent = "Le's Restaurant";
    const p = document.createElement("p")
    p.textContent = "We are a small restaurant that you can eat and code at the same time. Our food will definitely make your brain fresh again. And guess what, you can have these ducks while eating";
    const pic1 = document.createElement("img")
    pic1.setAttribute("src", {MyPic})
    const imgCtn = document.createElement('div')
    imgCtn.classList.add("imgCtn")
    imgCtn.appendChild(pic1)
    const textCtn = document.createElement('div')
    textCtn.classList.add("textCtn")
    textCtn.appendChild(p)
    const ctn = document.createElement('div')
    ctn.classList.add("ctn")
    ctn.appendChild(imgCtn)
    ctn.appendChild(textCtn)
    const container = document.createElement('div')
    container.classList.add("container")
    container.appendChild(ctn)
    content.appendChild(h1)
    content.appendChild(container)
    
}

export default pageLoad