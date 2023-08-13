import Img from './img/map1.png'

function loadContact() {
    const activeMenu = document.getElementById('CONTACT')
    activeMenu.classList = 'active'
    const mainDiv = document.getElementById("content")

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'

    const title = document.createElement('h1')
    title.textContent = 'Contact'
    title.className = 'title'
    mainContainer.appendChild(title)

    const img = new Image()
    img.src = Img
    img.classList = 'img-contact'
    mainContainer.appendChild(img)

    const text = document.createElement('p')
    text.className = 'open'
    text.textContent = 'Via Roma, 1\r\nRome, Italy\r\nTel. 123 456 78 90\r\n \r\n \r\nOpen: 18:30 - 23:30\r\nMonday CLOSED'
    mainContainer.appendChild(text)

    mainDiv.appendChild(mainContainer)
}

export default loadContact