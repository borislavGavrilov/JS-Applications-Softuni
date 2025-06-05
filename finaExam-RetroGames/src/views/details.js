import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import showsService from '../api/showService.js';
import { getUserId } from '../utills.js';


const mainEl = document.querySelector('main')

export default async function detailsGame(ctx) {
    const idNedet = ctx.params.id
    const needetData =  await showsService.getById(idNedet)
    const token = needetData._ownerId === getUserId()

    

  
    

    render(detailsTamplate(needetData , token) ,mainEl )
    
}
function detailsTamplate(gameData , token) {

    return html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${gameData.imageUrl}" alt="example1" />
      <div>
        <div id="info-wrapper">
            <p id="game-details-name">${gameData.name}</p>
          <div id="details-description">
            <p id="details-release-date">${gameData.releaseDate}</p>
            <p id="description">
              ${gameData.description}
            </p>
          </div>
          <h3>Game Likes:<span id="like">0</span></h3>

          ${token ? html `
          <div id="action-buttons">
            <a href="/edit/${gameData._id}" id="edit-btn">Edit</a>
            <a  @click = ${() => deletetGame(gameData._id)} id="delete-btn">Delete</a>`
            : getUserId() ? html`<a href="/like/${gameData._id}" id="like-btn">Like</a>` : html `` }
          </div>
        </div>
      </div>
    </div>
  </section>
    `
    
}

async function deletetGame(id) {

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