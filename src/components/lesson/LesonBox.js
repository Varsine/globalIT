import React from "react"

function LesonBox(props) {
  return (
    <div className={props.className}>
      <div className="lesson-box-top-img">
        <img src={props.img} alt="" />
      </div>
      <div className="lesson-box-bottom-part">
        <h3>{props.h3}</h3>
        <div className="lesson-info">
          <div>
            <h2>ծրագրավորում</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
              lorem massa nunc enim. Vitae amet est vestibulum sagittis. Velit
              tortor quis et dolor venenatis nibh dictum tincidunt. Turpis nisi
              velit varius tortor nunc eu.
            </p>
          </div>
          <div className="group-info">
            <div>
              <img src={props.img1} alt="" />
              <p>3-5 անձ</p>
            </div>
            <div>
              <img src={props.img2} alt="" />
              <p>1-2 անձ</p>
            </div>
            <div>
              <img src={props.img3} alt="" />
              <p>4-6 ամիս</p>
            </div>
          </div>
        </div>
        <div className="lesson-btn">
          <button>
            <p>Դիմել</p>
          </button>
          <button>
            <p>Ուս. ծրագիր</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LesonBox
