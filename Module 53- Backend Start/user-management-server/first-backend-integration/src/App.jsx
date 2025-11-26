import "./App.css";
import Users from "./components/Users";

const usersPromise = fetch("http://localhost:3000/users").then((response) =>
  response.json()
);

function App() {
  return (
    <>
      <Users usersPromise={usersPromise}></Users>
    </>
  );
}

export default App;
