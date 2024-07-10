import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import CatchAppApi from "../api/api";
import MessageCard from "./MessageCard";
import NewMessageForm from "./NewMessageForm";
import UserContext from "../auth/UserContext";

/** Show limited information about an area.
 *
 * Is rendered by AreaCardList to show a "card" for each area.
 *
 * AreaCardList -> AreaCard
 */

function AreaMessages() {
  console.debug("AreaMessages");
  const { area } = useParams();
  const { currentUser } = useContext(UserContext);
  console.log(area);

  const [areaInfo, setAreaInfo] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(function getAreaAndMessageInfoOnMount() {
    console.debug("getAreaAndMessageInfoOnMount");
    search(area);
  }, [messages]);

  /** Loads area info and messages. */
  async function search(area) {
    let areaInfo = await CatchAppApi.getArea(area);
    setAreaInfo(areaInfo);
    let messages = await CatchAppApi.getMessages(area);
    console.log(messages);
    setMessages(messages);

  }
  if (!areaInfo) return <LoadingSpinner />;
  if (!messages) return <LoadingSpinner />;

  return (
    <div className="area-list col-md-8 offset-md-2 pt-4 ml-2">
      <h1>Message Board</h1>
      {messages.length
      ? <MessageCard messages={messages} />
      : <p className="lead">Sorry, no messages yet!</p>
      }
      <NewMessageForm area={area} user={currentUser.username} />
    </div>
    
  );
}


export default AreaMessages;
