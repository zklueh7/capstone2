import React from "react";

/** Show list of message cards.
 *
 * Used by AreaMessages to list messages. 
 *
 * AreaMessages -> MesageCard
 *
 */

function MessageCard({ messages }) {
  console.debug("MessageCard");
  console.log(messages);

  return (
      <div className="MessageCard">
        {messages.map(message => (
          <div className="card">
            <div className="card-body">
              <p>{message.fromUser} ({message.timePosted})</p>
              <p>Message: {message.messageText}</p>
            </div>
          </div>
          
        ))}
      </div>
  );
}
export default MessageCard;
