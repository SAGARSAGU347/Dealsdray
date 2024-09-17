import React from 'react'
import '../CreateEmp/LoginPage.css'




export const LoginPage = () => {
  return (
    <>

      
    
        <div class="wrapper fadeInDown">
  <div id="formContent">
  <div class="fadeIn first">
      <img src='/images/logo.png.jpg'  id="icon" alt="User Icon"  style={{width:'15%'}}/>
    </div>
    

   
    

    
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>

    
    <div id="formFooter">
      <a class="underlineHover" href="/">Forgot Password?</a><br/>
      <a class="underlineHover " href="/">Signup</a>
    </div>

  </div>
</div>
</>
   
  )
}
