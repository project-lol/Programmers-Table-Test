import { button } from "./Button.js"
import { routeChange } from "../../lib/router.js"

export default class PaginationView {
  constructor({ $target, initialState }) {
    const pagination = document.querySelector("#pagination")
    if (pagination) pagination.remove()

    this.$target = $target
    this.$pagination = document.createElement("div")
    this.$pagination.className = "area"
    this.$pagination.setAttribute("id", "pagination")
    this.$target.appendChild(this.$pagination)

    this.state = initialState

    this.render()
  }

  render() {
    this.$pagination.innerHTML = button(
      this.state.pageLength,
      this.state.currentIndex
    )
    const buttons = document.querySelectorAll(".pagination_button")

    buttons.forEach(button => {
      button.addEventListener("click", e => {
        const target = e.target
        const index = target.textContent

        const path = listLength => index =>
          `?listLength=${listLength}&index=${index}`

        if (target.className.includes("arrow first"))
          routeChange(path(this.state.listLength)(1))
        else if (target.className.includes("arrow last"))
          routeChange(path(this.state.listLength)(this.state.lastIndex))
        else routeChange(path(this.state.listLength)(index))
      })
    })
  }
}
