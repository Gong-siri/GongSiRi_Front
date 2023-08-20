import location from './address_location.svg'
const Building = ({building}) => {
  return (
    <div className="building">
      <p className = 'header_line8'>{building.name}</p>
    </div>
  )
}

export default Building
