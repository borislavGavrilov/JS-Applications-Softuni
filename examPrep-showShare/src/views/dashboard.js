import {html , render} from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import showsService from '../api/showSevice.js'
import { baseShowsUrl } from '../constants.js'

const mainEl = document.querySelector(`main`)


export default async function  showDashboard() {
    const shows = await showsService.getAll(`${baseShowsUrl}`)
    render (dashboardTemplate(shows), mainEl)
    
}

function dashboardTemplate(shows) {

    return html` <h2>Users Recommendations</h2>

        ${shows.length > 0 ? html`
            <section id="shows">
                ${shows.map(s => singleShow(s))}         
            </section>
        ` : html`<h2 id="no-show">No shows Added.</h2>`}


`
    
}

function singleShow(show) {

     return html` <div class="show">
    <img src="${show.imageUrl}" alt="example1" />
    <div class="show-info">
      <h3 class="title">${show.title}</h3>
      <p class="genre">${show.genre}</p>
      <p class="country-of-origin">Country of Origin: ${show.country}
      </p>
      <a class="details-btn" href="/details/${show._id}">Details</a>
    </div>`
    
}