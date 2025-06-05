import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

import showsService from '../api/showService.js';

const mainEl = document.querySelector(`main`)

export default async function editShow(ctx) {

    const needetId = ctx.params.id
    const needtData = await showsService.getById(needetId)

    console.log(needtData);
    
    render(editTamplate(needtData) , mainEl)
   
    
}

function editTamplate(carInfo) {
    return html `
       <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form  @submit = ${(e) => edit(carInfo._id ,e)}  class="edit-form">
              <input type="text" name="model" id="model" placeholder="Model" value = ${carInfo.model} />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                value = ${carInfo.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value = ${carInfo.price}
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                value = ${carInfo.weight}
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                value = ${carInfo.speed}
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              >${carInfo.about}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
    
    `
}

async function edit(id , event) {
    debugger

        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const showData = Object.fromEntries(formData);
    
        if (Object.values(showData).some(val => val === '')) {
            return alert('All fields are required!');
        }
    
        try {
            const result = await showsService.update(id, showData);
            console.log(result);
            page.redirect(`/details/${id}`);
        } catch (err) {
            alert(err.message);
        }
    }
    
