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
      <a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img"/></a>
        <nav>
          <div>
            <a href="/dashboard">Our Cars</a>
            <a href="/search">Search</a>
          </div>


          ${token ? html` <div class="user">
            <a href="/create">Add Your Car</a>
            <a @click = ${logout}>Logout</a>
          </div>` : html` <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
        
        </nav>
      </header>

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