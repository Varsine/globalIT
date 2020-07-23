import React from "react"

function OurWorkBox(props) {
  return (
    <div className={props.className}>
      <p>
        <img src={props.img} alt="" />
      </p>
      <div>
        <button>
          <p>Տեսնել կայքը</p>
        </button>
      </div>
    </div>
  )
}

export default OurWorkBox
