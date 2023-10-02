import React from 'react'
import { SectionWrapper } from '../hoc'

 const End = () => {
  return (
    <div className="main-footer  w-auto pb-2 flex justify-center items-center ">
      <div className="container">
        <div className="row flex justify-center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PRITTHISH  | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}
export default End;
