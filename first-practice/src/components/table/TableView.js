import { table } from "./Table.js"

export default class Table {
  constructor({ $target, initialState }) {
    const table = document.querySelector("#table")
    if (table) table.remove()

    this.$target = $target
    this.$table = document.createElement("div")
    this.$table.className = "area"
    this.$table.setAttribute("id", "table")
    this.$target.appendChild(this.$table)

    this.state = initialState

    this.render()
  }

  render() {
    this.$table.innerHTML = table(this.state)
  }
}
