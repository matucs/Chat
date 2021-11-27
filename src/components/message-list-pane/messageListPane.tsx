import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/States";

const MessageListPane: React.FC<{}> = ({}) => {
  const state = useSelector((state: State) => state);
  return (
    <div style={{ height: "500px" }} className="form-control">
      <ul>
        {(state.data)?.map((msg, key) => (
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
