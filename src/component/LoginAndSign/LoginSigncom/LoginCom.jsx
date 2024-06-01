import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const LoginCom = () => {
  return (
    <>
     <div class="mb-3">
  
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  
</div>
<div class="">
  <div class="">
     </div>
  <div class="">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="">
    <span id="passwordHelpInline" class="form-text">
   
    </span>
  </div>
</div>
    <Link to='/' className='btn btn-danger w-100 h-100 mt-3'>Login</Link>

    
    
    
    
    </>
  )
}
