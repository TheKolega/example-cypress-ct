import { LitElement, html, customElement, property, state, css } from "lit-element"

export const tagName = "my-lit-element"

@customElement(tagName)
export class MyLitElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      font-size: 1em;
    }
    :host > *:first-child {
      margin-top: 0;
    }
    :host > *:last-child {
      margin-bottom: 0;
    }
    h1 {
      font-size: 1.2em;
      margin: 1rem 0;
      color: pink;
    }
    ::slotted(*) {
      margin-top: 1em;
      font-size: 0.9em;
    }
    ::slotted(div) {
      font-weight: bold;
      font-size: 0.9em;
      color: yellow;
    }
  `
  static tagName = tagName

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = "World"

  /**
   * The number of times the button has been clicked.
   */
  @state()
  count: number = 0

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">Click Count: ${this.count}</button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
  }

  foo(): string {
    return "foo"
  }
}

declare global {
  interface HTMLElementTagNameMap {
    tagName: MyLitElement
  }
}
