import Img from './img/menu.jpg'

function loadMenu() {
    console.log('the menu is loaded')
    const activeMenu = document.getElementById('MENU')
    activeMenu.classList = 'active'
    const mainDiv = document.getElementById("content")

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'

    const title = document.createElement('h1')
    title.textContent = 'Menu'
    title.className = 'title'
    mainContainer.appendChild(title)

    const img = new Image()
    img.src = Img
    img.classList = 'img-menu'
    mainContainer.appendChild(img)

    mainDiv.appendChild(mainContainer)

    const menuContainer = document.createElement('div')
    menuContainer.classList = 'pizza-container'

    const titleMenu = document.createElement('h3')
    titleMenu.className = 'h3-menu'
    titleMenu.textContent = 'PIZZE'
    mainDiv.appendChild(titleMenu)

    const marinara = new Pizza(
        'Marinara',
        'Pomodoro - Aglio - Basilico Fresco - Origano',
        '5,50'
    );
    menuContainer.appendChild(marinara.createCard())

    const margherita = new Pizza(
        'Margherita',
        'Pomodoro - Mozzarella - Basilico Fresco - Olio EVO',
        '6,50'
    );
    menuContainer.appendChild(margherita.createCard())

    const diavola = new Pizza(
        'Diavola',
        'Pomodoro - Mozzarella - Spianata Piccante - Basilico Fresco',
        '7,50'
    );
    menuContainer.appendChild(diavola.createCard())

    const cotto = new Pizza(
        'Cotto e Funghi',
        'Pomodoro - Mozzarella - Funghi - Prosciutto Cotto al Naturale',
        '8,00'
    );
    menuContainer.appendChild(cotto.createCard())

    const pomodorini = new Pizza(
        'Pomodorini Rucola e Grana',
        'Pomodoro - Mozzarella - Pomodorini - Rucola Selvatica - Grana a scaglie',
        '8,50'
    );
    menuContainer.appendChild(pomodorini.createCard())
    
    const speck = new Pizza(
        'Speck e Brie',
        'Pomodoro - Mozzarella - Brie - Speck',
        '8,50'
    );
    menuContainer.appendChild(speck.createCard())
    
    mainDiv.appendChild(menuContainer)
    
}

class Pizza {
    constructor(name, ingredients, price){
        this.name = name;
        this.ingredients = ingredients;
        this.price = price
    }

    createCard() {
        const card = document.createElement('div')
        card.classList = 'card'

        const firstLine = document.createElement('div')
        firstLine.classList = 'first-line'

        const nameTag = document.createElement('h3')
        nameTag.textContent = this.name
        nameTag.classList = 'pizza-name'
        
        const priceTag = document.createElement('p')
        priceTag.textContent = this.price
        priceTag.classList = 'price-tag'

        firstLine.appendChild(nameTag)
        firstLine.appendChild(priceTag)

        const ingredientsTag = document.createElement('p')
        ingredientsTag.textContent = this.ingredients
        ingredientsTag.classList = 'ingredients-tag'

        card.appendChild(firstLine)
        card.appendChild(ingredientsTag)
        
        return card
    }
}

export default loadMenu