import './style.css';
import loadHome from './load-home';
import loadMenu from './load-menu';
import loadContact from './load-contact';
import loadHeader from './load-header';

// initilization
loadHeader()
loadHome()

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'a') {
        let targetBtn = event.target.id
        if (targetBtn === 'HOME') {
            loadHeader()
            loadHome()
        } else if (targetBtn === 'MENU') {
            loadHeader()
            loadMenu()
        } else if (targetBtn === 'CONTACT') {
            loadHeader()
            loadContact()
        } 
    }
})