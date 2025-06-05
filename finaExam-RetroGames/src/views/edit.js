import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

import showsService from '../api/showService.js';

const mainEl = document.querySelector('main')

export default async function editGame(ctx) {
    const needetId = ctx.params.id
    const needtData = await showsService.getById(needetId)

    console.log(needtData);
    
    render(editTamplate(needtData) , mainEl)
}
function editTamplate(gameInfo) {

    return html`
     <section id="edit">
    <div class="form">
      <h2>Edit Retro Game</h2>
      <form @submit = ${(e) => editOneGame(gameInfo._id , e) } class="edit-form">
        <input type="text" name="game-name" id="game-name" placeholder="Game Name" value = ${gameInfo.name} />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" value = ${gameInfo.imageUrl} />
        <input type="text" name="platform" id="platform" placeholder="Platform"  value = ${gameInfo.platform}/>
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${gameInfo.description}</textarea>
        <textarea  id="release-date"  name="release-date" placeholder="Release Date">${gameInfo.releaseDate}</textarea>
        <button type="submit">Edit Game</button>
      </form>
    </div>
  </section>
<   
    `
    
}

async function editOneGame(gameId , event) {

    debugger
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const showData = Object.fromEntries(formData);

    if (Object.values(showData).some(val => val === '')) {
        return alert('All fields are required!');
    }

    try {
        const result = await showsService.update(gameId, showData);
        console.log(result);
        page.redirect(`/details/${gameId}`);
    } catch (err) {
        alert(err.message);
    }
    
}