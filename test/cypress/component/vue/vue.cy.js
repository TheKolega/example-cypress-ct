import VueComponent from "@fws/vue/list-transitions.vue"

describe("<VueComponent />", () => {
  it("renders", () => {
    cy.mountVue(VueComponent)
  })
})
