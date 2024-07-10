import React from "react";
import "./Message.css";

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
              <img src={message.pictureUrl} className="thumbnail"></img>
              <p className="msg-info">{message.fromUser} ({message.timePosted.slice(11,16)}, {message.timePosted.slice(0,10)})</p>
              <p className="msg-text">{message.messageText}</p>
            </div>
          </div>
          
        ))}
      </div>
  );
}
export default MessageCard;
