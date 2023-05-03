import React,{FC,useState} from "react";
import "./home.css";
import { addingNewTask,todo } from "./reduxState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

interface jobType{
      job:string;
      id:number;
}

const Home:FC = () => {
    const dispatch = useDispatch();
    const [stack, setStack] = useState<string>("");
    	
    
    const data = useSelector((state: RootState) => state.myReducer.task);
     	const addingJob = () => {
        const data: jobType = {
          job: stack,
          id: Math.floor(Math.random() * 100),
        };
        setStack("");

        dispatch(addingNewTask(data));
      };
 
    return (
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <div className="inputdiv">
              <input
                value={stack}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setStack(e.target.value);
                }}
                type="text"
                placeholder="fill in your task"
              />
            </div>
            <button onClick={addingJob}>Submit</button>
          </div>
          <div>
            <p>read data</p>
            <div className="holder"></div>
          </div>
        </div>
      </div>
    );
};
export default Home;
