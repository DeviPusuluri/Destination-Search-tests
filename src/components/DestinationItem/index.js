// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destinationItem">
      <img src={imgUrl} className="img2" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
