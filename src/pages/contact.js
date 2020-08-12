import React, { useState }  from "react"
import axios from "axios"
import Layout from '../components/layout'
import styles from './contact.module.css'

function Contact() {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/766b7df6-c659-40a8-8d85-45fe9785bff4",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
      
      return (
        <Layout>
    
          <div>
          <h4>I'd love to talk! Send me a message.</h4>
              <div className="col-md-8 mt-5">
                  <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" required="required">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div> 
                  <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" id="message" rows="5" placeholder="What's up?" required="required"/>
                  </div>
                  <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                      Submit
                  </button>
                  {serverState.status && (
                      <p className={!serverState.status.ok ? "errorMsg" : ""}>
                      {serverState.status.msg}
                      </p>
                  )}
                  </form>
              </div>
              </div>  
      
      </Layout>
     
  );
}

            
export default Contact;
    
             {/* <form method="POST" action="https://getform.io/f/766b7df6-c659-40a8-8d85-45fe9785bff4">
                 <label htmlFor="name">
                     Name
                     <br/>
                     <input type="text" name="name" id="name" placeholder="Jane Doe" required="required"/>
                 </label>
                 <label htmlFor="email">
                     Email
                     <br/>
                     <input type="email" name="email" id="email" placeholder="jane_doe@example.com" required="required"/>
                 </label>
                 <label htmlFor="subject">
                     Subject
                     <br/>
                     <input type="text" name="subject" id="subject" placeholder="Hello" required="required"/>
                 </label>
                 <label htmlFor="message">
                     Message
                     <br/>
                     
                 </label>
                 <button type="submit">Send</button>
             </form> */}