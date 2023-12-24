import {navbar, homePage} from './initialLoad';
import { menuPage, valuesPage, Contact } from './pages';
import './style.css'
console.log("lol")

navbar()
homePage()
const home = document.getElementsByClassName("home")
const menu = document.getElementsByClassName("menu")
const ourValues = document.getElementsByClassName("ourValues")
const contact = document.getElementsByClassName("contact")
const content = document.getElementById("content")

home[home.length -1].onclick = () => {
    content.innerHTML = ""
    homePage()
 }

menu[home.length -1].onclick = () => {
    content.innerHTML = ""
    menuPage()
}

ourValues[ourValues.length -1].onclick = () => {
    content.innerHTML = ""
    valuesPage()
 }

contact[contact.length -1].onclick = () => {
    content.innerHTML = ""
    Contact()
}


