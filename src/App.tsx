import MessageListPane from "./components/message-list-pane/messageListPane";
import Container from "./components/container/container";
import Header from "./components/utility-components/header/header";
import EditorPanel from "./components/editor-panel/editorPanel";
import Row from "./components/utility-components/row/row";
import NavigationPanel from "./components/navigation-panel/navigationPanel";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./redux/States";
import { useEffect } from "react";
import {
  fetchChannels,
  fetchMessages,
  postNewMessage,
  updateActiveChannel,
} from "./redux/channel/channelActionCreator";
import { handleEditPannelSuccess } from "./redux/channel/channelActions";

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();
  //fetch channel list at initialization of the Navigation Panel
  useEffect(() => {
    dispatch(fetchChannels());
  }, []);
  const state = useSelector((state: State) => state);
  return (
    <Container>
      <Row>
        <Row>
          <Header title="Message board"></Header>
        </Row>
        <Row>
          <Row>
            <NavigationPanel
              handleClick={(name: string) => {
                dispatch(updateActiveChannel(name));
                dispatch(fetchMessages(name));
              }}
            ></NavigationPanel>
            <div className="col-9 bg-light p-2 border border-primary">
              <MessageListPane></MessageListPane>
              <EditorPanel
                handleSend={(value) => {
                  if (value.trim() !== "") {
                    dispatch(
                      postNewMessage(
                        { date: "", text: value, username: "" },
                        state.active_channel
                      )
                    );
                  }
                  dispatch(handleEditPannelSuccess(""));
                }}
              ></EditorPanel>
            </div>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};
export default App;
