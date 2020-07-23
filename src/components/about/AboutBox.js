import React from "react"

function AboutBox(props) {
  return (
    <div className={props.className}>
      <img src={props.img} />
      <h1>{props.header}</h1>
      <p>{props.paragraf}</p>
    </div>
  )
}

export default AboutBox
