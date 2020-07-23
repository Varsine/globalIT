import React from "react"
import DepartamentBox from "./DepartamentBox"
import dmp1 from "../../image/dpmone.png"
import dmp2 from "../../image/dpmtwo.png"
import dmp3 from "../../image/dpmthree.png"
import vector from "../../image/Vector.png"
import vector1 from "../../image/Vector (1).png"

function Department() {
  return (
    <div className="col-12 departament">
      <h1 className="header">Ֆակուլտետներ</h1>
      <div className="col-12 departament-boxes row">
        <DepartamentBox
          className="col-4 dpm-box dpm-box-one"
          syb="</>"
          h2="Վեբ ծրաագրավորման"
          img={dmp1}
          P1="HTML"
          P2="JS"
        />
        <DepartamentBox
          className="col-4 dpm-box dpm-box-two"
          vector={vector}
          h2="Ծրաագրավորման"
          img={dmp2}
          P1="C#"
          P2="C++"
        />
        <DepartamentBox
          className="col-4 dpm-box dpm-box-three"
          vector={vector1}
          h2="Մուլտիմեդիայի"
          img={dmp3}
        />
      </div>
    </div>
  )
}

export default Department
