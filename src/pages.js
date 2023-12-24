import cover from './header-menu.jpg'
import valuesCover from './header-values.jpg'
const content = document.getElementById("content")



function menuPage() {
    const menuContainer = document.createElement("div")
    const menuTitle = document.createElement("h1")
    const menuItem1 = document.createElement("p")
    const menuItem2 = document.createElement("p")
    const menuItem3 = document.createElement("p")
    const menuItem4 = document.createElement("p")
    menuTitle.textContent = "Our Menu"
    menuItem1.textContent = "Pollo Adovada[Hand Held - 3.99, Smothered Chile & Cheese on Top - 4.99, Deluxe Topped lettuce, tomato & sour cream - 5.49] "
    menuItem2.textContent = "Indian Taco [5.69] Fresh made Indian fry bread, topped with beef, chicken, or came adovada, beans, red or green chile, lettuce, tomato & cheese"
    menuItem3.textContent = "16 piece [Meal - 13.49, Chicken Only - 12.29]"
    menuItem4.textContent = "6 piece [Meal - 8.29, Chicken Only - 6.79]"
    content.style.cssText = `background-image: url(${cover})`
    content.style.backgroundRepeat = 'no-repeat'
    content.style.backgroundSize = 'cover'
    menuTitle.classList.add("menuTitle")
    menuItem1.classList.add("menuItem1")
    menuItem2.classList.add("menuItem2")
    menuItem3.classList.add("menuItem3")
    menuContainer.classList.add("menuContainer")
    menuContainer.append(menuTitle, menuItem1, menuItem2, menuItem3, menuItem4)
    content.append(menuContainer)
}   

function valuesPage() {
    const valuesContainer = document.createElement('div')
    const valuesHeader = document.createElement('h1')
    valuesHeader.textContent = "Our values"
    const valuesText = document.createElement('p')
    valuesText.textContent = `Los Pollos Hermanos knows what family tastes like and we bring that warmth and goodness into our food every single day. We always have something delicious cooking, be it our crispy fried chicken, new spicy curly fries, or delicious dipping sauces.
    We know how important it is to feed your family right, and we hold those values near and dear to our heart. Every meal we feed you will be FLAVORFUL, WARM, FRESH, and filled with LOVE and CARE. That is our promise to you.
    Our motto: "Los Pollos Hermanos! Taste the Family!"
    `
    content.style.cssText = `background-image: url(${valuesCover})`
    content.style.backgroundRepeat = 'no-repeat'
    content.style.backgroundSize = 'cover'
    valuesContainer.classList.add("valuesContainer")
    valuesContainer.append(valuesHeader, valuesText)
    content.append(valuesContainer)
}

function Contact() {
    const valuesContainer = document.createElement('div')
    const valuesHeader = document.createElement('h1')
    valuesHeader.textContent = "Contact us"
    const valuesText = document.createElement('p')
    const valuesText2 = document.createElement('p')
    valuesText2.textContent = "Email: lospolloshermanos@gmail.com"
    valuesText.textContent = "Contact: 123 456 789"
    content.style.cssText = `background-image: url(${cover})`
    content.style.backgroundRepeat = 'no-repeat'
    content.style.backgroundSize = 'cover'
    valuesContainer.classList.add("valuesContainer")
    valuesContainer.append(valuesHeader, valuesText, valuesText2)
    content.append(valuesContainer)


}



export { menuPage,
    valuesPage,
    Contact
}