function loadHeader() {
    console.log('the header is loaded')
    const mainDiv = document.getElementById("content")

    mainDiv.innerHTML = ''
    
    const strip = document.createElement('div')
    strip.className = 'strip'
    mainDiv.appendChild(strip)

    const header = document.createElement('header')
    const menuContainer = document.createElement('ul')
    menuContainer.className = 'menu-container'
    menuContainer.appendChild(createMenuItem('HOME'))
    menuContainer.appendChild(createMenuItem('MENU'))
    menuContainer.appendChild(createMenuItem('CONTACT'))
    header.appendChild(menuContainer)

    mainDiv.appendChild(header)

    document.body.appendChild(mainDiv)
}

function createMenuItem(name) {
    const menuItem = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = `${name}`
    a.id = name
    menuItem.appendChild(a)
    return menuItem
}

export default loadHeader
