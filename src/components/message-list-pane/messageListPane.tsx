import React from "react";
interface props {
  messages: Array<message>
}
interface message {
  text: string,
  date: string
}
const MessageListPane: React.FC<props> = ({messages}: props) => {
  return (
    <div  style={{ height: "500px", top:0,overflow:"scroll"}} className="form-control">
      <ul>
        { messages?.map((msg, key) => (
          <li key={key}>
            <h5>{msg.text}</h5>
            <small>{msg.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MessageListPane;
