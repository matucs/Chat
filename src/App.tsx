import MessageListPane from "./components/message-list-pane/messageListPane";
import Container from "./components/container/container";
import Header from "./components/utility-components/header/header";
import EditorPanel from "./components/editor-panel/editorPanel";
import Row from "./components/utility-components/row/row";
import NavigationPanel from "./components/navigation-panel/navigationPanel";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import { fetchChannels } from "./redux/channel/channelActionCreator";
import { ChatEvent, SERVER_URL } from "./constants";

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [currentChannel, setcurrentChannel] = useState<string>("");
  const [messages, setMessages] = useState([]);
  //fetch channel list at initialization of the Navigation Panel
  useEffect(() => {
    const socket = socketIOClient(SERVER_URL, {
      transports: ["websocket"],
    });
    socket.emit(ChatEvent.CHANNELS);
    socket.on(ChatEvent.CHANNELS, (data) => {
      dispatch(fetchChannels(data));
    });
    socket.on(ChatEvent.SPAM, (warning) => {
      alert(warning);
    });
    socket.on(ChatEvent.MORE_ATTEMPT, (warning) => {
      alert(warning);
    });
    socket.on(ChatEvent.MESSAGES, (channel) => { 
        setMessages(channel.messages);
    });
    socket.on(ChatEvent.CHANNEL_CHANGE, (messages) => { 
      setMessages(messages);
  });
    setSocket(socket);
  }, [dispatch]);
  return (
    <Container>
      <Row>
        <Row>
          <Header title="Message board"></Header>
        </Row>
        <Row>
          <Row>
            <NavigationPanel
              active={currentChannel}
              handleClick={(name: string) => {
                setcurrentChannel(name);
                socket?.emit(ChatEvent.CHANNEL_CHANGE, name);
              }}></NavigationPanel>
            <div className="col-8 bg-light p-2 border border-primary">
              <MessageListPane messages={messages}></MessageListPane>
              <EditorPanel
                active={currentChannel !== "" ? true : false}
                handleSend={(value) => {
                  if (value.trim() !== "") {
                    socket?.emit(ChatEvent.MESSAGE, {
                      text: value,
                      channel: currentChannel,
                    });
                  }
                }}></EditorPanel>
            </div>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};
export default App;
