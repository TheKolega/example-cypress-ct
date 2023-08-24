import React from "react"
import ReactComponent from "@fws/react/post"

describe("<ReactComponent />", () => {
  it("renders", () => {
    cy.mountReact(<ReactComponent title={"Reactive!"} children={<div>div</div>} date={new Date().toDateString()} />)
  })
})
