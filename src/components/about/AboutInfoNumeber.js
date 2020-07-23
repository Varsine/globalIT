import React from "react"

function AboutInfoNumeber(props) {
  return (
    <div className="col-3 about-info">
      <div className={props.className}>
        <p>{props.number}</p>
      </div>
      <p>{props.info}</p>
    </div>
  )
}

export default AboutInfoNumeber
