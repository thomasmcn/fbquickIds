import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getPostId =(url) => {

  try {
    
    const idpartone = url.split('/')[5]
    const id = idpartone.split('?')[0]
    console.log(id)
    return id
  } catch (error) {
    console.log(error)
    toast("missing fields on spread sheet")
  }
 
}

export const linkShorter =(url) => {
  
  try {
    const shortLink = url.split('?')[0]
  console.log(shortLink)
  return shortLink
    
  } catch (error) {
    toast(error)
  }
  
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

