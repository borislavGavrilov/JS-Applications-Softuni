import {html , render} from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'

const mainEl = document.querySelector(`main`)


export default async function  showCreate(params) {

    render (createTemplates(), mainEl)
    
}

 async function requestResponse(params) {
    
}

function createTemplates(params) {
       return html` <section id="create">
       <div class="form">
         <h2>Add Show</h2>
         <form class="create-form">
           <input
           type="text"
           name="title"
           id="title"
           placeholder="TV Show title"
         />
         <input
           type="text"
           name="image-url"
           id="image-url"
           placeholder="Image URL"
         />
         <input
         type="text"
         name="genre"
         id="genre"
         placeholder="Genre"
       />
       <input
       type="text"
       name="country"
       id="country"
       placeholder="Country"
     />
         <textarea
           id="details"
           name="details"
           placeholder="Details"
           rows="2"
           cols="10"
         ></textarea>
           <button type="submit">Add Show</button>
         </form>
       </div>
     </section>`
}