import "./App.css";
import Card from "./components/UI/Card";
import ErrorAlert from "./components/UI/ErrorAlert";
import GoalInput from "./components/goals/GoalInput";
import CourseGoals from "./components/goals/CourseGoals";
import Container from "./components/UI/Container";
import Footer from "./components/UI/Footer";
import { useEffect, useState } from "react";

const backendUrl = "https://dummyjson.com/todos/";

function App() {
  const [loadedGoals, setLoadedGoals] = useState<
    { id: number; todo: string; completed: boolean; userId: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(backendUrl);
        const resData = await response.json();
        if (!response.ok) {
          setError(resData.detail || "Fetching the goals failed.");
        }
        console.log(resData.todos);
        setLoadedGoals(resData.todos);
      } catch (err: any) {
        setError(
          err.message ||
            "Fetching goals failed - the server responsed with an error."
        );
      }
    }
    fetchData();
    setIsLoading(false);
  }, []);

  async function addGoalHandler(goalText: string) {
    setIsLoading(true);
    try {
      const response = await fetch(backendUrl + "add", {
        method: "POST",
        body: JSON.stringify({
          todo: goalText,
          completed: false,
          userId: 5,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();
      if (!response.ok) {
        setError(resData.detail || "Adding the goal failed.");
        return;
      }

      setLoadedGoals((prevGoals) => {
        const updatedGoals = [
          {
            id: resData.id,
            todo: goalText,
            completed: false,
            userId: 5,
          },
          ...prevGoals,
        ];
        return updatedGoals;
      });
    } catch (err: any) {
      setError(
        err.message ||
          "Adding a goal failed - the server responsed with an error."
      );
    }
    setIsLoading(false);
  }

  async function deleteGoalHandler(goalId: number) {
    setIsLoading(true);

    try {
      const response = await fetch(backendUrl + goalId, {
        method: "DELETE",
      });

      const resData = await response.json();

      if (!response.ok) {
        setError(resData.detail || "Deleting the goal failed.");
        return;
      }

      setLoadedGoals((prevGoals) => {
        const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
        return updatedGoals;
      });
    } catch (err: any) {
      setError(
        err.message ||
          "Deleting the goal failed - the server responsed with an error."
      );
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <Card>
        {error && <ErrorAlert errorText={error} />}
        {!error && <GoalInput onAddGoal={addGoalHandler} />}
        {!isLoading && (
          <CourseGoals goals={loadedGoals} onDeleteGoal={deleteGoalHandler} />
        )}
      </Card>
      <Footer />
    </Container>
  );
}

export default App;
