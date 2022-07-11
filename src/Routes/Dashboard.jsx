import Pagination from "../Components/Pagination";
function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">TOKEN</h4>
      <button data-testid="logout-btn">Logout</button>
      <ul data-testid="item-container">
        {[].map(() => {
          <li data-testid="item">Title</li>;
        })}
      </ul>
      <div data-testid="pagination-container">
        <Pagination />
      </div>
    </div>
  );
}
export default Dashboard;
