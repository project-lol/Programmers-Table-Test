export const request = async url => {
  try {
    const response = await fetch(url)

    if (response.ok) {
      const json = await response.json()
      return json
    }
    throw new Error("API 통신 실패")
  } catch (e) {
    console.log(e)
    alert(e.message)
  }
}
