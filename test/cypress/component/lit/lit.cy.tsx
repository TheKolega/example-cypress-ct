import { MyLitElement, tagName } from "@fws/lit/counter"
import { html, unsafeStatic } from "lit/static-html.js"

describe("LitComponent ", () => {
  beforeEach(() => {
    cy.mountLit(html`<${unsafeStatic(tagName)}></${unsafeStatic(tagName)}>`)
  })

  it("renders", () => {
    cy.get(tagName, { log: false }).then((component) => {
      expect(component[0]).to.be.instanceOf(MyLitElement)
    })

    cy.get(tagName).shadow().contains("button", "Click Count").should("be.visible")
  })

  it("is interactive", () => {
    cy.get(tagName)
      .shadow()
      .contains("button", "Click Count")
      .then((elem) => {
        const previousText = elem.text()
        cy.wrap(elem).click().should("not.have.text", previousText)
      })
  })

  it("can pass properties", () => {
    cy.mountLit(html`<${unsafeStatic(tagName)} name=User></${unsafeStatic(tagName)}>`)

    cy.get(tagName).shadow().contains("Hello").should("contain", "Hello, User")
  })
})
