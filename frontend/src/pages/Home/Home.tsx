import Header from "../../components/Header/Header"
import { logoutSuccess } from "../../redux/authSlice"
import Button from "../../utils/Button"
import { useDispatch } from "react-redux"
import './home.css'

export default function Home() {
   const dispatch = useDispatch()
   function handleLogOut(){
      try {
         dispatch(logoutSuccess(""))
      } catch (err) {
         console.log('Error with logout', err)
      }
   }
   return (
      <>
         <Header />

         <div className="home-main">
            <div className="home-left-section">
               <div className="home-left-wrapper">
                  <div>
                     <img src="/circle-logo.png" alt="" className="home-logo-circle"/>
                  </div>

                  <div className="home-slogan-wrapper">
                     <div className="home-slogan-text"><span>Reuniting Pets,</span></div>
                     <div className="home-slogan-text"><span>Restoring Smiles</span></div>
                  </div>

                  <div className="home-buttons-wrapper">
                     <button>Report Lost</button>
                     <button>Report Found</button>
                  </div>
               </div>
            </div>

            <div className="home-right-section">
               <img src="/Home-Logo.png" alt="" />
            </div>
         </div>
         {/* <div>
            <Button color={"#D5B893"} text={"Logout"} handler={handleLogOut} />
            Home
         </div> */}
      </>
   )
}
