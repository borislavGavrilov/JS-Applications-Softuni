import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

import { getToken } from '../utills.js';
import showsService from '../api/showService.js';

const mainEl = document.querySelector('main')

export default async function createGame() {

    const token = getToken()

    if (token) {
        render(createTamplate() ,mainEl )
    }else {
        alert(`You must log-in`)
    }

    
}
function createTamplate() {

    return html`!-- Create Page (Only for logged-in users) -->
    <section id="create">
      <div class="form">
        <h2>Add Retro Game</h2>
        <form  @submit = ${createOneGame}class="create-form">
          <input type="text" name="game-name" id="game-name" placeholder="Game Name" />
          <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
          <input type="text" name="platform" id="platform" placeholder="Platform" />
          <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
          <textarea  id="release-date"  name="release-date" placeholder="Release Date"></textarea>
          <button type="submit">Add Game</button>
        </form>
      </div>
    </section>`
    
}

async function createOneGame(event) {
 
    debugger
    event.preventDefault()

    const data = new FormData(event.currentTarget);
    const convertData = Object.fromEntries(data)

    if (Object.values(convertData).some(el => el === ``)){
        alert(`All fields must be full`)
        return
    }

    try {
        const result = await showsService.create(convertData);
        console.log(result);
        page.redirect('/dashboard');
    } catch (err) {
        alert(err.message);
    }



    
}