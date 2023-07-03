import { useState } from "react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import "./GoalInput.css";

interface props {
  onAddGoal: (goalText: string) => void;
}

const GoalInput = ({ onAddGoal }: props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const updateGoalTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredGoalText(event.target.value);
  };
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (enteredGoalText.trim().length === 0) {
      alert("Invalid text");
      return;
    }
    onAddGoal(enteredGoalText.trim());
    setEnteredGoalText("");
  };
  return (
    <div className="goalInput">
      <form onSubmit={onSubmitHandler}>
        <h2>New Goal</h2>
        <p className="mt-3">
          <input
            className="form-control"
            type="text"
            value={enteredGoalText}
            onChange={updateGoalTextHandler}
          ></input>
          <button className="btn btn-outline-light" type="submit">
            Add Goal
          </button>
        </p>
      </form>
    </div>
  );
};

export default GoalInput;
