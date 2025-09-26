import "./Navbar.css"
import lisaupperud from "../assets/lisaupperud.jpeg"

function Navbar() {
  return (
    <div className="navbar">
      <img
        src={lisaupperud}
        alt="Person with long blonde hair tied in a ponytail, wearing a black top, standing in a dimly lit indoor setting with other people in the background, creating a social and relaxed atmosphere"
      />
      <h1>My Portfolio - Lisa Upperud</h1>
      <div className="links"></div>
    </div>
  )
}
export default Navbar
