import React, { useState } from "react";
import { Link } from "react-router-dom";
import CatchAppApi from "../api/api";

/** New message form.
 *
 * Add a new message to a message board
 * 
 */

function NewMessageForm({ area, user }) {
  const [formData, setFormData] = useState({
    messageText: "",
    area: area,
    fromUser: user,
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "NewMessageForm",
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to homepage.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await CatchAppApi.postMessage(formData);
    formData.messageText = "";
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="container col-lg-4 offset-lg-4 mt-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Send a message!</label>
                  <input
                      name="messageText"
                      className="form-control"
                      value={formData.messageText}
                      onChange={handleChange}
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-secondary btn-sm float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <Link className="btn btn-primary btn-block mt-2 ml-2" to={{pathname: `/areas/${area}`}}>Back to Area Home</Link>
        </div>
      </div>
  );
}

export default NewMessageForm;