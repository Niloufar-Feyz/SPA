import axios from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
  email: string;
}
function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const deleteUser = (user: user) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
  };
  axios
    .delete('https://jsonplaceholder.typicode.com/users' + 'user.id')
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <h2>Users Name</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Users Emails</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.email}
            className="list-group-item d-flex justify-content-between"
          >
            {user.email}
            <button className="btn btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
