import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { getToken } from '../utills.js';
import usersService from '../api/usersServise.js';
import showsService from '../api/showService.js';

const mainEl = document.querySelector(`main`)

export default async function createCar() {

    const token = getToken()

    if (token) {
        render(crateTamplate() ,mainEl )
    } else {
alert(`You must log-in`)
    }

 
}

function crateTamplate(params) {
    return html `

<section id="create">
          <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form @submit = ${createOneCar} class="create-form">
              <input type="text" name="model" id="model" placeholder="Model"/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
    
    `
}

async function createOneCar(event) {
 
    debugger
    event.preventDefault()

    const data = new FormData(event.currentTarget);
    const convertData = Object.fromEntries(data)

    if (Object.values(convertData).some(el => el === ``)){
        alert(`All fields must be full`)
        return
    }

    try {
        const result = await showsService.create(convertData);
        console.log(result);
        page.redirect('/dashboard');
    } catch (err) {
        alert(err.message);
    }



    
}