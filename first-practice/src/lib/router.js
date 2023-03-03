// router.js
const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE"

export const init = (onRouteChange, thisTarget) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    console.log("tlfgod")
    onRouteChange.call(thisTarget)
  })
}

export const routeChange = (url, params) => {
  history.pushState(null, null, url)
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params))
}
