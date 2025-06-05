import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import showsService from '../api/showService.js';

const mainEl = document.querySelector(`main`)

export default async function dashboardShow() {

    const shows = await showsService.getAll()

    console.log(shows);
    

    render(dashboardTamplate(shows) , mainEl)
    
}

function dashboardTamplate(cars) {
    return html `
  <!-- Dashboard page -->
  <h3 class="heading">Our Cars</h3>
        <section id="dashboard">

        ${cars.length > 0 ? html`${cars.map(el => oneCar(el))}` : html`
              <h3 class="nothing">Nothing to see yet</h3>`}
</section>
        `
}

function oneCar(car) {

    return html `
     <div class="car">
            <img src="${car.imageUrl}" alt="example1" />
            <h3 class="model">${car.model}</h3>
            <div class="specs">
              <p class="price">Price: ${car.price}</p>
              <p class="weight">Weight: ${car.weight} kg</p>
              <p class="top-speed">Top Speed: ${car.speed} kph</p>
            </div>
            <a class="details-btn" href="/details/${car._id}">More Info</a>
    
    `
    
}