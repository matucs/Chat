import { useSelector } from "react-redux";
import Panel from "../panel/panel";
import { State } from "../../redux/States";

interface props {
  active: string,
  handleClick: (name:string) => void;
}
const NavigationPanel: React.FC<props> = ({ active, handleClick }: props) => {
  const state = useSelector((state: State) => state);
  return (
    <div className="col-3 bg-light p-2 border border-primary">
      <ul className="list-group ">
        {state.navigationList?.map((panel, key) => {
          return (
            <Panel
              key={panel}
              handleIsActive={() => handleClick(panel)}
              text={panel}
              active={panel === active ? "active" : ""}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationPanel;
