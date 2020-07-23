import React, {useState} from "react"
import OurWorkBox from "./OurWorkBox"
import work1 from "../../image/work1.png"
import work2 from "../../image/work2.png"

function OurWork() {
  const prev = "<"
  const next = ">"
  const workOne = <OurWorkBox className="col-6 work-box-left " img={work1} />
  const workTwo = <OurWorkBox className="col-6 work-box-right" img={work2} />

  const index = 0
  const worksArr = [workOne, workTwo, workOne, workTwo]
  const [currentWorkOne, setcurrentWorkOne] = useState(0)
  const [currentWorkTwo, setcurrentWorkTwo] = useState(1)

  const prevWork = () => {
    if (currentWorkOne > 0) {
      setcurrentWorkOne(currentWorkOne - 1)
    } else {
      setcurrentWorkOne(worksArr.length - 1)
    }
  }

  const nextWork = () => {
    if (currentWorkOne == worksArr.length - 1) {
      setcurrentWorkOne(0)
    } else {
      setcurrentWorkOne(currentWorkOne + 1)
    }
  }
  return (
    <div className="our-work">
      <h1 className="header">Մեր աշխատանքները</h1>
      <div className="col-12 our-work-boxes row ">
        {worksArr[currentWorkOne]}
        {worksArr[currentWorkTwo + currentWorkOne]}
      </div>
      <div className="next-and-prev">
        <span className="prev" onClick={prevWork}>
          {prev}
        </span>
        <span className="next" onClick={nextWork}>
          {next}
        </span>
      </div>
    </div>
  )
}

export default OurWork
