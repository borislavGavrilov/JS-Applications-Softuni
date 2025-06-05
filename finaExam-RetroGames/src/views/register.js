import { html , render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import usersService from '../api/usersServise.js';
const mainEl = document.querySelector('main')

export default async function registerGame() {

    render(registerTamplate() ,mainEl )
    
}
function registerTamplate() {

    return html`
    <!-- Register Page (Only for Guest users) -->
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit = ${register}class="register-form">
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>

    
    `
    
}

async function register(event) {

    event.preventDefault()

    const newData = new FormData(event.currentTarget)
    const convert = Object.fromEntries(newData)

    if (convert.email === `` || convert.password === `` || convert[`re-password`] === ``){
        alert(`Non empty fields`)
        return
    }
     
    if (convert.password !== convert[`re-password`]){
        alert(`Pass must be the same`)
        return
    }

    try {
        const getData = await usersService.register(convert)
        page.redirect(`/`)
           
       } catch (error) {
           alert(error)
           
       }
    
}