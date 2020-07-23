import React from "react"
import ParthnersBox from "./ParthnersBox"
import msColor from "../../image/microsoftColor.png"
import msNotColor from "../../image/microsoftNotColor.png"

function Parthners() {
  return (
    <div className="parthner">
      <h1 className="header">Մեր գործընկերներ</h1>
      <div className="col-12 parthner-boxes row">
        <ParthnersBox className="col-3" img={msNotColor} />
        <ParthnersBox className="col-3 parthner-box-left " img={msColor} />
        <ParthnersBox className="col-3 parthner-box-right" img={msNotColor} />
        <ParthnersBox className="col-3" img={msNotColor} />
      </div>
    </div>
  )
}

export default Parthners
