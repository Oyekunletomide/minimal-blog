import React from 'react'
import '../Login/Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <a href='/' className='loginhot'>HotCoffee</a>
      <div className='signindiv'>
        <div className='logininnerdiv'>
          <div className='signinheadertextdiv'>
            <p className='signindivheader'>Sign in</p>
            <p className='signindivtext'>Please login to continue to your account.</p>
          </div>
        
            <div className='loginemailgroup'>
              <input className='logininput' type="text" placeholder='Enter email address' />
              <input className='logininput' type="password" placeholder='Password' />
              <div className='checkedlabeldiv'>
                <input type="checkbox" id="logged" name="logged" value="logged in"></input>
                <label for="logged">Keep me logged in</label><br></br>
              </div>
              <button>Sign in</button>
            </div>
            <p className='needaccounttext'>Need an account? <span className='needaccounttextspan'><a href="/signup">Create one</a></span></p>
        </div>
      </div>
    </div>
  )
}
