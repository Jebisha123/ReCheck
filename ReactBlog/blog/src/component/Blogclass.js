import './Blogclass.css'
import React from 'react';
class Blogclass extends React.Component
{
    constructor(){
        super();
    }
    render()
    {
        return(
            <div id="com">
 <h1 className="App">Welcome to login page</h1>
    <form id="im">
        <label for="fname">First name:</label>
        <input id="#myTextBox1" type="text"/><br/><br/>
        <label for="password">Password:</label>
        <input type="password"/><br/><br/>
        <label for="email">Email:</label>
        <input type="email"/><br/><br/>
        <input type="checkbox"/>
  <label for="Java"> I Know Java</label><br/><br/>
  <input type="checkbox"/>
  <label for="Html"> I Know HTML</label><br/><br/>
  <input type="checkbox"/>
  <label for="JReact"> I Know JReact</label><br/><br/>
  <br></br>
<label><button>Submit</button></label>
<label><button>Cancel</button></label>
</form>

            </div>

        );
    }
}
export default Blogclass;