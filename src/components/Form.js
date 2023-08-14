import { useState } from "react";

const Form = (props) => {
  const initialInput = {
    'current-savings':10000,
    'yearly-contribution':1200,
    'expected-return':7,
    'duration':10
  }

  const [userInput,setuserInput]=useState(initialInput);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
    //console.log(userInput);
  };
  const resetHandler = () => {
    setuserInput(initialInput);
  };
  const inputChangehandler = (input,value) => {
    setuserInput((prev)=>{
      return{
        ...prev,[input]:value
      }
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" 
              onChange={ (e)=>
              inputChangehandler('current-savings',e.target.value)
            }
            value={userInput['current-savings']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" 
            onChange={ (e)=>
              inputChangehandler('yearly-contribution',e.target.value)
            }
            value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" 
            onChange={ (e)=>
              inputChangehandler('expected-return',e.target.value)
            }
            value={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" 
            onChange={ (e)=>
              inputChangehandler('duration',e.target.value)
            }
            value={userInput['duration']}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">Reset</button>
          <button type="submit" className="button">Calculate</button>
        </p>
      </form>
    </div>
  );
}

export default Form;