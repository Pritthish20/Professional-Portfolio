import React from 'react'
import pic from '../../assets/my-pic.png'

const Profile = () => {
  return (
      <div className=' xs:pt-[370px] xs:pl-[180px] min-w-[500px] xl:px-20 xl:pt-20 pb-10 mr-[80px] animate-pulse-slow'>
        
        <img src={pic} alt="its me" />
      
      </div>
  )
}

export default Profile