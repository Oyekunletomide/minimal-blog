import React from 'react'
import '../Register/Register.css'

export const Register = () => {
  return (
    <div className='login'>
    <a href='/' className='loginhot'>HotCoffee</a>
      <div className='signindiv'>
        <div className='logininnerdiv'>
          <div className='signinheadertextdiv'>
            <p className='signindivheader'>Sign up</p>
            <p className='signindivtext'>Sign up to enjoy the feature of HotCoffee</p>
          </div>
        
            <div className='loginemailgroup'>
              <input className='logininput' type="text" placeholder='Enter email address' />
              <input className='logininput' type="password" placeholder='Password' />
              <button>Sign up</button>
            </div>
            <p className='needaccounttext'>Already have an account?? <span className='needaccounttextspan'><a href="/login">Sign in</a></span></p>
        </div>
      </div>
    </div>
  )
}
