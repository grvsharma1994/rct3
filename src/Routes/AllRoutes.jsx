import { Routes, Route } from "react-router-dom";
import Home from "./Home";
function AllRoutes() {
  return (
   <div>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/" element = {<Login/>}/>
        <Route path ="/" element = {<Dashboard/>}/>
      {/* Routes */} 
      {/* Home */}
      {/* Login */}
      {/* Private Route: Dashboard */}
   </div> 
  );
}

export default AllRoutes


