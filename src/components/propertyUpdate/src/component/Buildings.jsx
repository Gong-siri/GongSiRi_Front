import Building from "./Building"
// s
const Buildings = ({ buildings }) => {
    return (
    <>
       {buildings.map((building) => (<Building key={building.id} building = {building}/>
        ))}
    </>
    )
}

export default Buildings
