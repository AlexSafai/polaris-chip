import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "#";
    this.image = "#";
    this.link = "#"; 
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 14px;
      }

      :host([fancy]) .card {
        background: linear-gradient(180deg, #1c3a63 0%, #2b557f 100%);
        color: #f0f5ff;
      }

      .card.toggled {
        background-color: #4a5c78;
        color: #f8f4e8;
      }

      .card {
        background-color: #172433;
        width: 400px;
        text-align: center;
        border-radius: 18px;
        padding-bottom: 12px;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
      }

      .cardheader {
        color: #ffd166;
        margin: 10px 0;
        font-size: 36px;
        font-family: "Arial", sans-serif;
        letter-spacing: 0.5px;
        background-color: #0f3d70;
        padding: 14px 0;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
      }

      p {
        color: #e8eef9;
        margin: 12px 20px 8px;
        font-family: "Arial", sans-serif;
        line-height: 1.5;
      }

      img {
        width: calc(100% - 40px);
        max-width: 360px;
        border: 4px solid #ffd166;
        border-radius: 16px;
        margin: 12px 0;
      }

      .btn {
        color: #0f3d70;
        background-color: #ffd166;
        font-size: 15px;
        margin: 8px 0 0;
        padding: 10px 16px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
      }

      .btn:focus,
      .btn:hover {
        background-color: #e5b71f;
        color: #0f2d53;
      }

      details summary {
        text-align: center;
        font-size: 20px;
        padding: 10px 0;
        font-family: "Arial", sans-serif;
        color: #ffd166;
        cursor: pointer;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 1px solid #34495e;
        text-align: center;
        padding: 12px;
        min-height: 80px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div id = "cardlist">
      <div class="card">
        <h1 class="cardheader"><b>${this.title}</b></h1>
          <img src=${this.image} alt=${this.title} />
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot></slot>
              <a href=${this.link} target="_blank">
                <button class="btn"><em>Link for more info</em></button>
              </a>
            </div>
          </details>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
