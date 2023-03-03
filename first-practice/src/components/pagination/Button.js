export const button = (listLength, currentIndex = 1) => {
  let buttonHtml = `<button class="arrow first pagination_button"><<</button>`

  for (let i = 1; i <= listLength; i++) {
    buttonHtml += `<button class="pagination_button" style=${
      currentIndex == i ? "color:red" : ""
    } >${i}</button>`
  }

  buttonHtml += `<button class="arrow last pagination_button">>></button>`

  return buttonHtml
}
