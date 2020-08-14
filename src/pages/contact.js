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
          <hr/>
              <div className={styles.contact}>
                  <form onSubmit={handleOnSubmit} className={styles.form}>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Name" required="required"/>
                    <textarea name="message" id="message" rows="5" placeholder="Message" required="required"/>
                  <button type="submit" className={styles.button}  disabled={serverState.submitting}>
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
