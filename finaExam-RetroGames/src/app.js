import createGame from "./views/create.js";
import dashboardGame from "./views/dashboard.js";
import detailsGame from "./views/details.js";
import editGame from "./views/edit.js";
import homeGame from "./views/home.js";
import loginGame from "./views/login.js";
import registerGame from "./views/register.js";
import showNavigation from "./midway/navigations.js";

import page from '../node_modules/page/page.mjs'

page(showNavigation)
page('/' , homeGame)
page('/login' , loginGame)
page ('/register' , registerGame)

page('/dashboard' , dashboardGame)
page('/create' , createGame)
page('/details/:id' , detailsGame)
page('/edit/:id' , editGame)

page.start()

