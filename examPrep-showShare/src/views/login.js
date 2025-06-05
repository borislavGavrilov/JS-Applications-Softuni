import {html , render} from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import usersService from '../api/usersServise.js'

const mainEl = document.querySelector(`main`)


export default async function  showLogin() {

    render (loginTemplate(), mainEl)
    
}


function loginTemplate() {

    return html` <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit = ${loginUser} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>`
    
}

async function loginUser(event) {

    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const convertFromEntries = Object.fromEntries(data)

    if (convertFromEntries.password === `` || convertFromEntries.email === ``){
    alert(`All fields are requaired`)
    return
    }
    
    console.log(convertFromEntries.email);
    

    try {
        
        const result = await usersService.login(convertFromEntries)
        page.redirect(`/`)
        
    } catch (error) {
        alert(error)
    }
    
    
}