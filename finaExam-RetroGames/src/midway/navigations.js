import {html ,render} from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import { getToken } from '../utills.js'
import usersService from '../api/usersServise.js'

const headerEl = document.querySelector(`header`)

export default async function showNavigation(ctx , next) {

    const token = getToken()

    render(navigationTamplate(token) , headerEl)

    next()
    
}

function navigationTamplate(token) {

    return html ` 
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.webp" alt="logo" /></a>
      <nav>
        <a href="/dashboard">Games</a>
     
        ${token ? html `  <div class="user">
          <a href="/create">Add Game</a>
          <a @click=${logout}>Logout</a>
        </div>` : html ` <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>`}
     `
    
}

async function logout(params) {

    try {
       await usersService.logout()
        page.redirect('/')
        
    } catch (error) {
        alert(error)
    }


    
}