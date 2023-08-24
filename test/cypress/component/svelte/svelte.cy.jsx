import SvelteComponent from "@fws/svelte/window.svelte"

describe("<SvelteComponent />", () => {
  beforeEach(() => {
    cy.mountSvelte(SvelteComponent)
  })
  it("renders", () => {
    cy.contains("Focus this").should("be.visible")
  })

  it("is interactive", () => {
    cy.window()
      .focus()
      .realPress("C")
      .then(() => {
        cy.contains("kbd", "C").should("be.visible")
        cy.contains("67").should("be.visible")
      })
  })
})
