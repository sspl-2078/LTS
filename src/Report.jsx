import React from 'react'
import './style3.css'
const Report = () => {
  return (
    <div className='Report'>
    <div className='Found'>
      <h1>Report Found</h1>
      <h3>Upload photo</h3>
      <div className="photo"></div>
      <div className="forms">
        <form>
         <div>
          <input type="text" id='name' required placeholder='Name'/>
          </div>
          <div className="ticket">
          <input type="text" id='number' name='number' placeholder='Ticket number' required />
          </div>
          <div className="security">

          <input type="phone" id='phone' name='phone' placeholder='Phone Number' required />
          </div>
          <div className="Found">  
                 <select
            id="airline"
            name="airline"
         
            required
          >
            <option value="" disabled>What was your flight?</option>  
            <option value="buddha">Buddha Airlines</option>
            <option value="banana">Yeti Airlines</option>
            <option value="cherry">Shaurya Airlines</option>
            <option value="orange">Shree Airlines</option>
            <option value="mango">Dubai Airways</option>
          </select></div>
        
          <button>Report</button>
        </form>
      
      </div>
    </div>
   <div className="Lost">
          <h1>Report Lost</h1>
          <div className="form">
            <form>
              <div>
                <input type="text" id='name_lost' required placeholder='Name' />
              </div>
              <div>
              <div className="ticket">
          <input type="text" id='number_lost' name='number' placeholder='Ticket number' required />
          </div>
              </div>
              <div><input type="password" id='security' name='security' placeholder='LTP no' required /></div>
              <div className="lost">  
                 <select
            id="airline"
            name="airline"
         
            required
          >
            <option value="" disabled>What was your flight?</option>  
            <option value="buddha">Buddha Airlines</option>
            <option value="banana">Yeti Airlines</option>
            <option value="cherry">Shaurya Airlines</option>
            <option value="orange">Shree Airlines</option>
            <option value="mango">Dubai Airways</option>
          </select></div>
          <div className="phone">
            <input type="text" name="phone" id="phone" placeholder='Enter phone' />
          </div>
          <div className="email">
            <input type="email" id='email' name='email' placeholder='Enter email' />
          </div>
              <button>Report</button>
            </form>
          </div>
   </div>
    </div>
  )

}

export default Report;