import { sizesNumber } from '../styles/Sizes'

export default function getCurrentRange(width) {
  let currentRange = "mobile"

  for( let size in sizesNumber) {
    if(width > sizesNumber[size])
      currentRange = size
  }

  return currentRange
}