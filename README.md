# example-cypress-ct

Cypress Component Testing examples with different frameworks.

###### For Cypress e2e examples, [look here](https://github.com/TheKolega/example-cypress-e2e).

As Cypress uses a different devServer config option per framework, this setup uses separate commands and cypress.config files for testing each framework in isolation:

| Framework   | command            |
| ----------- | ------------------ |
| ~~Angular~~ | (WIP)              |
| Lit         | `pnpm test-lit`    |
| React       | `pnpm test-react`  |
| Svelte      | `pnpm test-svelte` |
| Vue         | `pnpm test-vue`    |

Also each test suite can be ran in UI mode using `pnpm test-<framework>-open`
