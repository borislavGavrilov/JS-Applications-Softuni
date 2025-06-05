import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

const mainEl = document.querySelector(`main`)

export default async function homeShow() {

    render(homeTamplate() , mainEl)
    
}

function homeTamplate(params) {
    return html `    <!-- Home page -->
    <section id="hero">
      <h1>
        Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
      </h1>
    </section>`
}