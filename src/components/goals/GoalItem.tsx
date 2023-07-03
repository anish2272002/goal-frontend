interface props {
  todo: string;
  goalId: number;
  onDeleteGoal: (goalId: number) => void;
}

const GoalItem = ({ todo, goalId, onDeleteGoal }: props) => {
  return (
    <div className="alert alert-light alert-dismissible fade show">
      <strong>{todo}</strong>
      <button
        type="button"
        className="btn-close"
        onClick={() => onDeleteGoal(goalId)}
      ></button>
    </div>
  );
};
export default GoalItem;
