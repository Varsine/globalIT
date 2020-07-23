import React from "react"
import LesonBox from "./LesonBox"
import leftBoxImg from "../../image/lessonOne.png"
import righttBoxImg from "../../image/lessonTwo.png"
import group1 from "../../image/group 1.png"
import user1 from "../../image/user 1.png"
import date1 from "../../image/date 1.png"
import group2 from "../../image/group 2.png"
import user2 from "../../image/user 2.png"
import date2 from "../../image/date 2.png"

function Lesson() {
  const arrowsyb = ">"
  return (
    <div className="col-12 lesson">
      <h1 className="header">Դասընթացներ </h1>
      <div className="lesson-row row">
        <LesonBox
          className="col-6 lesson-box lesson-box-left"
          img={leftBoxImg}
          h3="Front-end"
          img1={group1}
          img2={user1}
          img3={date1}
        />
        <LesonBox
          className="col-6 lesson-box lesson-box-right"
          img={righttBoxImg}
          h3="Համակարգչային և մոբայլ"
          img1={group2}
          img2={user2}
          img3={date2}
        />
      </div>
      <div className="arrow-syb">
        <p>{arrowsyb}</p>
      </div>
    </div>
  )
}

export default Lesson
