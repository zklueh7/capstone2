import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";
import CatchAppApi from "../api/api";

/** New message form.
 *
 * Add a new message to a message board
 * 
 */

function NewMessageForm({ area, user, time }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    messageText: "",
    area: area,
    fromUser: user,
    timePosted: time,
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
    console.log(result);
    navigate(`/areas/${area}/messages`);
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h3 className="mb-3">Post a message:</h3>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Message</label>
                  <input
                      name="messageText"
                      className="form-control"
                      value={formData.messageText}
                      onChange={handleChange}
                  />
                </div>

                {/* {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                } */}

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewMessageForm;