import { useState } from "react"
import "./Navbar.css"
import { useEffect } from "react"


const Navbar = () => {
   const [nav, setNav] = useState(false)

   const navBar = () => {
      if (window.scrollY > 100) {
         setNav(true)
      } else {
         setNav(false)
      }
   }

   useEffect(() => {
      window.addEventListener("scroll", navBar)
      return () => window.removeEventListener("scroll", navBar)
   }, [])

   return (
      <>
         <div className={`nav ${nav && "nav_bar"}`}>
            <img className="nav_logo" src="/img/netflix.png" alt="netflix logo" width={90} height={90} />
            <img className="nav_user" src="/img/user.png" alt="user icon" width={50} />
         </div>
      </>
   )
}

export default Navbar
