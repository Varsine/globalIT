import React, {Component} from "react"
import {Link} from "react-router-dom"
import FunctionPath from "./FunctionPath"

export class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <Link className="nav-link active" ref="./home" to="./home">
              Գլխավոր
            </Link>
          </li>
          <li>
            <Link className="nav-link" ref=".service" to="./service">
              Ծառայություններ
              <i className="arrow up"></i>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./university">
              Ֆակուլտետներ
            </Link>
            <i className="arrow up"></i>
          </li>
          <li>
            <Link className="nav-link" to="./work">
              Աշխատանք
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./task">
              Թեստեր
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./contact">
              Կապ
            </Link>
          </li>
          <li>
            <FunctionPath />
          </li>
          <li>
            <div className="log-in">
              <button>Մուտք</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
