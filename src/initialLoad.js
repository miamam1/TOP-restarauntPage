import cover from './header-home.jpg'
import logo from './logo.png'
const content = document.getElementById('content')
function navbar() {
    const navbar = document.getElementById("navbar")
    const logoImg = new Image()
    logoImg.src = logo
    const home = document.createElement("button")
    home.textContent = "Home"
    const menu = document.createElement("button")
    menu.textContent = "Menu"
    const ourValues = document.createElement("button")
    ourValues.textContent = "Our values"
    const contact = document.createElement("button")
    contact.textContent = "Contact"
    navbar.classList.add("navbar")
    home.classList.add("home")
    menu.classList.add("menu")
    logoImg.classList.add("navbarLogo")
    ourValues.classList.add("ourValues")
    contact.classList.add("contact")
    return navbar.append(logoImg, home, menu, ourValues, contact)
    
}

function homePage() {
    content.style.cssText = `background-image: url(${cover})`
    content.style.backgroundRepeat = 'no-repeat'
    content.style.backgroundSize = 'cover'
    const blurbContainer = document.createElement('div')
    const blurb = document.createElement('h2')
    blurb.textContent = `"It's the best ingredients. The spiciest spices. All prepared with loving care! And always delivered with a friendly smile. That's the Los Pollos Hermanos promise."`
    const blurbAuthor = document.createElement('h3')
    blurbAuthor.textContent = 'Gus Fring - Owner and Propietor'
    blurbContainer.classList.add('blurbContainer')
    blurbAuthor.classList.add('blurbAuthor')
    blurbContainer.append(blurb, blurbAuthor)
    return content.append(blurbContainer)
    
}



export { navbar, 
        homePage }