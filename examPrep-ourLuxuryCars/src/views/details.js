import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import showsService from '../api/showService.js';
import { getUserId } from '../utills.js';

const mainEl = document.querySelector(`main`)

export default async function detailsShow(ctx) {

    const idNeed = ctx.params.id;
    const needDadata =  await showsService.getById(idNeed)
    const token = needDadata._ownerId === getUserId()

    render(detailsTamplate(needDadata , token) , mainEl)
    
}

function detailsTamplate(dataCar , token) {
    return html `
    
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${dataCar.imageUrl}" alt="example1" />
            <p id="details-title">${dataCar.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${dataCar.price}</p>
                <p class="weight">Weight: ${dataCar.weight} kg</p>
                <p class="top-speed">Top Speed: ${dataCar.speed} kph</p>
                <p id="car-description">
                    ${dataCar.about}
                 </p>
              </div>

              ${token ? html`  <div id="action-buttons">
                <a href="/editShow/${dataCar._id}" id="edit-btn">Edit</a>
                <a @click = ${()=> delCar(dataCar._id) } id="delete-btn">Delete</a>
              </div>` : html `` }
    
            </div>
          </div>
        </section>
  `
}
async function delCar(id) {
console.log(id);

    const dialog = confirm(`Are you sure you wand to delete this car ? `)
    

    if (dialog){
        try {
           await showsService.deleteById(id)
           page.redirect(`/dashboard`)

            
        } catch (error) {
            alert(error)
        }
    }


    
}