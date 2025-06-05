import {html , render} from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import showsService from '../api/showSevice.js'
import { checkIsOwner } from '../utils.js'

const mainEl = document.querySelector(`main`)


export default async function showDetails(ctx) {

    const needetID = ctx.params.id
   
    const nedetData = await showsService.getById(needetID);
    
     
    const isOwner = checkIsOwner(nedetData)
    
    render(showingDetailsMovie(nedetData) , mainEl)
    
}


function showingDetailsMovie(nedetData,isOwner) {

    console.log(nedetData._id);
    

    return html` <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src="${nedetData.imageUrl}" alt="example1" />
        <div id="details-text">
          <p id="details-title">${nedetData.title}</p>
          <div id="info-wrapper">
            <div id="description">
              <p id="details-description">
                ${nedetData.details}
              </p>
            </div>
          </div>
      
  
          ${isOwner ? html `<div id="action-buttons">
            <a href="/edit/${nedetData._id}" id="edit-btn">Edit</a>
            <a @click = ${()=> deleteShow(nedetData._id) } id="delete-btn">Delete</a>
          </div>` : html``}
        
        </div>
      </div>
    </section>`
    
}

async function deleteShow(showId) {
    const confirmDelete = confirm('Are you sure you want to delete this show?');

    if (confirmDelete) {
        try {
            await showsService.deleteById(showId);
            page.redirect('/dashboard');
        } catch (err) {
            alert(err.message);
        }
    }
}