import React,{useState} from "react";
import './adminlogin.css'

function Adminloginpage() {
    return (
<>
<meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
  <form>
    <label htmlFor="email">Admin Name:</label>
    <input type="email" id="login_email" name="login_email" required="" />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="login_password"
      name="login_password"
      required=""
    />
    <button type="button" onclick="login()">
      SUBMIT
    </button>
  </form>
</>
    )

}
export default Adminloginpage;