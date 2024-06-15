/* Write your code here
import {Component} from 'react'
import './index.css'

class DestinationSearch extends Componet {}

import './index.css'
import {Component} from 'react'
const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <li className="destinationItemContainer">
      <img src={imgUrl} className="destinationImage" />
      <img src={imgUrl} className="destinationImage" alt={name} />
      <p className="destinationName">{name}</p>
    </li>
  )
}
export default DestinationItem
*/
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem