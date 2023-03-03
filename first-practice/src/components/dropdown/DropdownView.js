import { dropdown } from "./Dropdown.js"
import { routeChange } from "../../lib/router.js"

export default class DropdownView {
  constructor({ $target, initialState }) {
    const dropdown = document.querySelector("#dropdown")
    if (dropdown) dropdown.remove()

    this.$target = $target
    this.$dropdown = document.createElement("div")
    this.$dropdown.className = "area"
    this.$dropdown.setAttribute("id", "dropdown")
    this.$target.appendChild(this.$dropdown)

    this.state = initialState

    this.render()
  }

  render() {
    this.$dropdown.innerHTML = dropdown()

    const select = document.querySelector("select")

    select.addEventListener("change", e => {
      const path = listLength => index =>
        `?listLength=${listLength}&index=${index}`
      routeChange(path(e.target.value)(this.state.currentIndex))
    })
  }
}
