/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// import { mount as mountAngular } from "cypress/angular"
import { mount as mountLit } from "cypress-ct-lit"
import { mount as mountReact } from "cypress/react18"
import { mount as mountSvelte } from "cypress/svelte"
import { mount as mountVue } from "cypress/vue"

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      // mountAngular: typeof mountAngular
      mountLit: typeof mountLit
      mountReact: typeof mountReact
      mountSvelte: typeof mountSvelte
      mountVue: typeof mountVue
    }
  }
}

// Cypress.Commands.add("mountAngular", mountAngular)
Cypress.Commands.add("mountLit", mountLit)
Cypress.Commands.add("mountReact", mountReact)
Cypress.Commands.add("mountSvelte", mountSvelte)
Cypress.Commands.add("mountVue", mountVue)

// Example use:
// cy.mount(MyComponent)
