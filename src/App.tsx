// import { Routes, Route } from 'react-router-dom';

import { UserCard } from "./components/UserCard/UserCard";

function App() {
  return (
    <div>
      <UserCard name={"ma"} gender={"male"} avatarUrl={"gg"} city={"opa"} country={"da"} email={"female"} />
    </div>
    // <Routes>
      // <Route path="/" element={<h1>User Page</h1>} />
      // <Route path="/user/:id" element={<h1>User Detail Page</h1>} />
    // </Routes>
  );
}

export default App
