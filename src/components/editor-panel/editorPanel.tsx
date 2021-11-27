import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleEditPannelSuccess } from "../../redux/channel/channelActions";
import { State } from "../../redux/States";

interface props {
  handleSend: (value: string) => void;
}
const EditorPanel: React.FC<props> = ({ handleSend }: props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(handleEditPannelSuccess(e.currentTarget.value));
  };
  const handleKeyPress = (e: React.KeyboardEvent<{}>) => {
    if (e.key === "Enter") {
      handleSend(inputText);
    }
  };
  const dispatch = useDispatch();
  const active_channel = useSelector((state: State) => state.active_channel);
  const inputText = useSelector((state: State) => state.inputText);
  return (
    <div className="input-group mb-3 p-2">
      <input
        disabled={active_channel ? false : true}
        value={inputText}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
        type="text"
        className="form-control"
        placeholder="Type..."
        aria-label="Type..."
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          disabled={active_channel ? false : true}
          onClick={() => handleSend(inputText)}
          className="btn btn-primary"
          type="button"
          id="button-addon2"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
