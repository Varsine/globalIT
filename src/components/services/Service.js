import React from "react"
import ServiceBox from "./ServiceBox"
import service1 from "../../image/service1.png"
import service2 from "../../image/service2.png"
import service3 from "../../image/service3.png"
import service4 from "../../image/service4.png"
import service5 from "../../image/service5.png"
import service6 from "../../image/service6.png"

function Service() {
  const arrowsyb = ">"

  return (
    <div className="service">
      <h1 className="header">Ծառայություններ</h1>
      <div className="col-12 service-row">
        <div className="col-12 row">
          <ServiceBox
            h2="Վեբ Կայքերի 
պատրաստում"
            img={service1}
          />
          <ServiceBox
            h2="Բջջային 
հավելվածներ"
            img={service2}
          />
        </div>
        <div className="col-12 row">
          <ServiceBox
            h2="Համակարչային
հավելվածներ"
            img={service3}
          />
          <ServiceBox
            h2="Բջջային և համ․
խաղեր"
            img={service4}
          />
        </div>
        <div className="col-12 row">
          <ServiceBox
            h2="Վեբ և գրաֆիկ
դիզայն"
            img={service5}
          />
          <ServiceBox
            h2="ՍԵՕ և ՍՄՍ
առաջխաղացում"
            img={service6}
          />
        </div>
      </div>
      <div className="arrow-syb">
        <p>{arrowsyb}</p>
      </div>
    </div>
  )
}

export default Service
