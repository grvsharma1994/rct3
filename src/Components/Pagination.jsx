function Pagination({ 
  // total pages 
  total, 
  // current page of the component
  current, 
  // event handler when button is clicked, 
  // changePage accepts the new page in number
  changePage }) {
  // fix code here
  let pages = <button
      data-testid="page-btn"
      >
    </button>
    )
  return (
  <div className = {styles.button}>
    {page}
   <button data-cy ="pagination-first-button" onClick={ ()=>{
        setPage(1)
      }}>First</button>
      <button data-cy ="pagination-previous-button"
      disabled={page-1}
      onClick={ ()=>{
        if(page>1){
          setPage(page-1)
        }
      }}>previous</button>
<select data-cy="pagination-limit-select" onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-2">2</option>
        <option data-cy="pagination-limit-4">4</option>
        <option data-cy="pagination-limit-6">6</option>
      </select>
      <button data-cy="pagination-next-button"
        // disabled = {totalcount <= page*limit}
        onClick={() => setPage(page + 1)}
      >Next</button>
      <button data-cy="pagination-last-button" 
      // disabled={totalcount<=page*limit}
      onClick={()=>{
        setPage(page*limit)
      }}>Last</button>
    </div>
  );
};
export default Pagination;
