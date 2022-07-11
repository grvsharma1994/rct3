import { Link } from "react-router-dom";
import React from 'react'

function Home() {
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="dashboard-link">Dashboard</h3>
      </Link>
    </div>
  );
}
export default Home;
