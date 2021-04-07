function pageLoad() {
    const content = document.getElementById("content")
    const h1 = document.createElement("h1")
    h1.textContent = "Contact us"
    content.appendChild(h1)
    const container = document.createElement("div")
    container.classList.add("container")
    const contactBox = document.createElement("div")
    contactBox.classList.add("contact-box")
    const info = {
                "Address": "42 TQT Street, Distinct 3, HCM City, Viet Nam", 
                "Phone number": "0942xxxxxx",
                "Email": "42@gmail.com",
                }
    

    for(const [key, value] of Object.entries(info)) {
        const p = document.createElement("p")
        p.textContent = `${key}: ${value}`
        contactBox.appendChild(p)
    }
    container.appendChild(contactBox)
    content.appendChild(container)
}

export default pageLoad