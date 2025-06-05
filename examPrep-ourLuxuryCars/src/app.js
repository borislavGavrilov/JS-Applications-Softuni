import createCar from "./views/create.js";
import dashboardShow from "./views/dashboard.js";
import detailsShow from "./views/details.js";
import editShow from "./views/edit.js";
import homeShow from "./views/home.js";
import loginShow from "./views/login.js";
import registerShow from './views/register.js';
import searchShow from "./views/search.js";
import showNavigation from "./midway/navigation.js";

import page  from '../node_modules/page/page.mjs';

page(showNavigation)
page('/',homeShow)
page('/login' , loginShow)
page('/register', registerShow)

page(`/dashboard` , dashboardShow)
page('/create' , createCar)
page('/details/:id' , detailsShow)
page('/editShow/:id' , editShow)
page('/search' , searchShow)

page.start()
