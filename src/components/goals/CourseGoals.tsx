import GoalItem from "./GoalItem";
import "./CourseGoals.css";

interface props {
  goals: { id: number; todo: string; completed: boolean; userId: number }[];
  onDeleteGoal: (goalId: number) => void;
}

const CourseGoals = ({ goals, onDeleteGoal }: props) => {
  const hasNoGoal = !goals || goals.length == 0;
  return (
    <div className="courseGoals">
      {hasNoGoal && <h2 className="text-center">No Goals Found!</h2>}
      {goals.map((goal) => {
        return (
          <GoalItem
            key={goal.id}
            goalId={goal.id}
            todo={goal.todo}
            onDeleteGoal={onDeleteGoal}
          />
        );
      })}
    </div>
  );
};

export default CourseGoals;
