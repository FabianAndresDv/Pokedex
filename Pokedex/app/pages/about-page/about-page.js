import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default';
import '@cells-demo/demo-app-container/demo-app-container.js';

class AboutPage extends CellsPage {

  static get is() {
    return 'about-page';
  }

  static get properties() {
    return {
      fullName: { type: String },
      age: { type: Number },
      city: { type: String },
      company: { type: String}
    };
  }

  constructor() {
    super();
    this.fullName = 'Author Name';
    this.age = 28;
    this.city = 'Bogotá';
    this.company = 'Meraki/Samtel';
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">

      <h2>${this.title}</h2>
        <div slot="app-main-content">
            <h4>About this page</h4>
            <p>
              City: ${this.city}<br>
              Information page for a general description.<br>
              By ${this.company}
            <br><br>
          <bbva-button-default
            @click=${this.gotoGoal}
            class="evolutions-button"
            text="Back"
          ></bbva-button-default>
        </div>
      </demo-app-template>
    `;
  }

  gotoGoal() {
    this.backStep();
  }

}
window.customElements.define(AboutPage.is, AboutPage);