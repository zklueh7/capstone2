import React from "react";
import { Link } from "react-router-dom";

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
          <div className="card-body">
            <p>From: {message.fromUser}</p>
            <p>Message: {message.messageText}</p>
            <p>Time posted: {message.timePosted}</p>
          </div>
        ))}
      </div>
  );
}
export default MessageCard;
