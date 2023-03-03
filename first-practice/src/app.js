import { request } from "./lib/request.js"
import { getData } from "./lib/getData.js"
import TableView from "./components/table/TableView.js"
import PaginationView from "./components/pagination/PaginationView.js"
import DropdownView from "./components/dropdown/DropdownView.js"

import { init } from "./lib/router.js"

export default class App {
  constructor($body) {
    this.$body = $body
    this.state = {
      listLength: 5,
      currentIndex: 1,
      data: null,
    }

    this.render()
    init(this.route, this)
  }

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.render()
  }

  route() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })

    const listLength = Number(params.listLength)
    const currentIndex = Number(params.index)
    if (listLength && currentIndex) this.setState({ listLength, currentIndex })
  }

  async render() {
    this.state.data = await getData(
      this.state.listLength,
      this.state.currentIndex
    )

    new DropdownView({
      $target: this.$body,
      initialState: {
        listLength: this.state.listLength,
        currentIndex: this.state.currentIndex,
      },
      onChange: this.render,
    })
    new TableView({ $target: this.$body, initialState: this.state.data.infos })
    new PaginationView({
      $target: this.$body,
      initialState: {
        pageLength: this.state.data.lastIndex,
        listLength: this.state.listLength,
        currentIndex: this.state.currentIndex,
        lastIndex: this.state.data.lastIndex,
      },
    })
  }
}
