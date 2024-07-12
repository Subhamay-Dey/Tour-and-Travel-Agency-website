import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signin = () => {
  return (
    <div className='h-screen w-full d-flex justify-content-center align-items-center'>
      <SignIn/>
    </div>
  )
}

export default Signin