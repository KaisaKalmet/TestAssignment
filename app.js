import HomeComponent from "./home.js";
import Page2Component from "./page2.js";
import Page3Component from "./page3.js";
import Page4Component from "./page4.js";
import Page5Component from "./page5.js";
import Page6Component from "./page6.js";
import SummaryComponent from "./summary.js";



const ErrorComponent = {
    render: () => {
        return `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `;
    }
}

// Routes
const routes = [
    { path: '/', component: HomeComponent, },
    { path: '/page2', component: Page2Component, },
    { path: '/page3', component: Page3Component, },
    { path: '/page4', component: Page4Component, },
    { path: '/page5', component: Page5Component, },
    { path: '/page6', component: Page6Component, },
    { path: '/page7', component: SummaryComponent, },
];

const router = () => {
    // Find the component based on the current path
    const path = parseLocation();
    // If there's no matching route, get the "Error" component
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    // Render the component in the "app" placeholder
    document.getElementById('app').innerHTML = component.render();
    component.attachEvents();
    component.summaryAnsw();
};

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

window.addEventListener('hashchange', router);
window.addEventListener('load', router);