function loadHome() {
    const activeMenu = document.getElementById('HOME')
    activeMenu.classList = 'active'
    const mainDiv = document.getElementById("content")

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'

    const title = document.createElement('h1')
    title.textContent = 'Pizzeria'
    title.className = 'title'
    mainContainer.appendChild(title)

    const img = new Image()
    img.src = "../src/img/pizza.jpg"
    img.classList = 'img-home'
    mainContainer.appendChild(img)

    const text = document.createElement('p')
    text.className = 'text'
    text.textContent = 'A place tied to traditions, simple and unmistakable flavors, and the authentic colors of this land. Our pizzas are the result of a long leavening process. We use only carefully selected ingredients, sourced from small traditional producers and "Slow Food" presidia, mainly from Southern Italy. This way, we enhance the regions and revive ancient crafts and flavors.'
    mainContainer.appendChild(text)

    mainDiv.appendChild(mainContainer)
}

export default loadHome