import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signin = () => {
  return (
    <div className='h-[100vh] w-[100vh] flex-row justify-center items-center'>
      <SignIn/>
    </div>
  )
}

export default Signin