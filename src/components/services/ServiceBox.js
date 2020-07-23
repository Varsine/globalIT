import React from "react"

function ServiceBox(props) {
  return (
    <div className="col-6 service-box ">
      <div className="service-box-content">
        <h2>{props.h2}</h2>
        <button>
          <p>Պատվիրել</p>
        </button>
      </div>
      <div>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default ServiceBox
