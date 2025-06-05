import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import usersService from '../api/usersServise.js';
const mainEl = document.querySelector('main')

export default async function loginGame() {

    render(loginTamplate() ,mainEl )
    
}
function loginTamplate() {

    return html`<section id="login">
    <div class="form">
      <h2>Login</h2>
      <form  @submit= ${login} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>`
    
}

async function login(event) {

    event.preventDefault()

    const newData = new FormData(event.currentTarget)
    const convert = Object.fromEntries(newData)

   if (convert.email === `` || convert.password === ``){
    alert(`Non empty field`)
    return
   }
    
   try {
    const getData = await usersService.login(convert)
    page.redirect(`/`)
    
   } catch (error) {
    alert(error)
   }
}