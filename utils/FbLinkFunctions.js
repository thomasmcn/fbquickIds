export const getPostId =(url) => {
const idpartone = url.split('/')[5]
const id = idpartone.split('?')[0]
console.log(id)
return id
}

export const linkShorter =(url) => {
  const shortLink = url.split('?')[0]
  console.log(shortLink)
  return shortLink
}

export const AdNameJoiner = (part1, part2) => {
  const fbAdName = part1 + part2
  console.log(fbAdName)
  return fbAdName 
}

export const xRemover = (adName) => {
const removedX = adName.slice(0, -1)
console.log(removedX)
return removedX
}

export const fullJoiner = (url, Adname) => {
  const id = getPostId(url)
  const xremoved = xRemover(Adname)
  const joinedURL = AdNameJoiner(xremoved,id)
  console.log(joinedURL)
  return joinedURL

}

