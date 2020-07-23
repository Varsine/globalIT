import React from "react"
import Navbar from "../loyeOut/Navbar"
import logo from "../../image/logo.png"

function Header() {
  return (
    <div className="col-12 header-row">
      <div className="col-3 header-left-column">
        <img src={logo} alt="" />
        <span>global</span>
        <span>it</span>
        <div className="call">
          <button>
            <i className="fas fa-phone-alt"></i>
          </button>
          <span>Պատվիրել զանգ</span>
        </div>
        <p className="oposity-global-it">GLOBAL IT</p>
        <p>
          Ստացիր թվային աշխարհի <br /> բոլոր հնարավորությունները <br /> GLOBAL
          IT-ի հետ <br /> միասին.
        </p>
        <div className="btn-header">
          <button>Մեր մասին</button>
          <button>Ստանալ կրթություն</button>
        </div>
      </div>
      <div className="col-9 header-right-column">
        <Navbar />
        <div className="header-img"></div>
      </div>
    </div>
  )
}

export default Header
