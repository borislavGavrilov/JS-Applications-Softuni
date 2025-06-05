import { html , render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'
import usersService from './api/usersServise.js'
import { getToken } from './utils.js';

import showCreate from './views/create.js';
import showDashboard from './views/dashboard.js';
import showDetails from './views/details.js';
import showEdit from './views/edit.js';
import showHome from './views/home.js';
import showLogin from './views/login.js';
import showRegisters from './views/register.js';
import showSearch from './views/search.js';
import showNavigation  from './middwears/navigation.js';


page(showNavigation)
page ('/' , showHome)
page(`/register` , showRegisters)
page ('/login' , showLogin)

page(`/dashboard` , showDashboard)
page(`/create`, showCreate)
page(`/details/:id`, showDetails)
page(`/edit/:id` , showEdit)
page(`/search` , showSearch)

page.start()


// const logoutEl = document.getElementById(`logout-btn`)

// logoutEl.addEventListener(`click` , logoutShow)

// async function logoutShow(event) {

//     event.preventDefault()

//     try {

//         const deleteData = usersService.logout()
//         page.redirect(`/`)
        
//     } catch (error) {
//         alert(error)
//     }

// }


// export function navigation(params) {
// debugger
//     const ifHaveToken = getToken()
//     const loginUsers = document.querySelector(`.user`)
//     const logoutUsers = document.querySelector(`.guest`)

//     console.log(loginUsers);
//     console.log(logoutUsers);
    
    

//     if (ifHaveToken){

//         loginUsers.style.display = `block`
//         logoutUsers.style.display = `none`

//     }else {
//          loginUsers.style.display = `none`
//         logoutUsers.style.display = `block`

//     }  
    
// }

// navigation()



