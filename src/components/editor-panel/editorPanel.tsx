import React, {useState } from "react";


interface props {
  active: boolean;
  handleSend: (value: string) => void;
}
const EditorPanel: React.FC<props> = ({ active, handleSend }: props) => {
  const [inputText, setInputPannel] = useState<string>("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputPannel(e.currentTarget.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<{}>) => {
    if (e.key === "Enter") {
      handleSend(inputText);
      setInputPannel("");
    }
  };

  return (
    <div className="input-group mb-3 p-2">
      <input 
        disabled={active ? false : true}
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
          disabled={active ? false : true}
          onClick={() => {
            handleSend(inputText);
            setInputPannel("");
          }}
          className="btn btn-primary"
          type="button"
          id="button-addon2">
          submit
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
