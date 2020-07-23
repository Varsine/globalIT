import React from "react"

function DepartamentBox(props) {
  return (
    <div className={props.className}>
      <div className="dpm-box-top-part">
        <div className="lesson-part">
          <div className="lesson-syb">
            <p>
              {props.syb}
              <img src={props.vector} alt="" />
            </p>
          </div>
          <h2>
            {props.h2}
            <p>Ֆակուլտետ</p>
          </h2>

          <span>
            <p>- 45% զեղչ</p>
          </span>
        </div>

        <p>{props.P1}</p>
        <p>{props.P2}</p>
        <div className="dpm-box-img-parent">
          <div className="dpm-box-img">
            <img src={props.img} />
          </div>
        </div>
      </div>
      <div>
        <div className="list-count">
          <div>
            <p>Դասերի քանակ</p>
            <p>20</p>
          </div>
          <hr />
          <div>
            <p>Ուսանողների քանակ</p>
            <p>50</p>
          </div>
          <hr />
          <div>
            <p>Մասնագիտություններ</p>
            <p>12</p>
          </div>
          <div className="input-chakbox">
            <input type="checkbox" />
            <p>Online</p>
            <input type="checkbox" />
            <p>Offline</p>
          </div>
        </div>
        <div className="read-more">
          <button>Իմանալ ավելին</button>
        </div>
      </div>
    </div>
  )
}

export default DepartamentBox
