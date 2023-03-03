import { request } from "./request.js"

export const getData = async (listLength, currentIndex) => {
  const data = await request("src/data.json")
  const result = []

  for (let i = 0; i < data.length; i += listLength) {
    result.push(data.slice(i, i + listLength))
  }

  return { infos: result[currentIndex - 1], lastIndex: result.length }
}
