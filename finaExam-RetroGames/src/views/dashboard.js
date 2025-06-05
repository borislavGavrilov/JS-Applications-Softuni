import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import showsService from '../api/showService.js';

const mainEl = document.querySelector('main')

export default async function dashboardGame() {

    const games = await showsService.getAll()
    console.log(games);
    

    render(dashboardTamplate(games) ,mainEl )
    
}
function dashboardTamplate(games) {

    return html`
    <!-- Dashboard page -->
  <h2>Games Collection</h2>
  <section id="retro-games">

  ${games.length > 0 ? html `
    ${games.map(el=> dashboard(el))}
  ` : html `
   <h2 id="no-game">No retro games yet, be the first to contribute</h2>
  `}
  
  </section>
    `
    
}
 function dashboard(game) {

   return html`
     <div class="game">
      <img src="${game.imageUrl}" alt="example2" />
      <div class="game-info">
        <h3 class="game-name">${game.name}</h3>
        <p class="platform">Platform: ${game.platform}</p>
        <a class="details-btn" href="/details/${game._id}">See More</a>
      </div>
    `
    
}