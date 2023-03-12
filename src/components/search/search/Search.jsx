import "./Search.css";
function Search({ setTerm, term }) {
  const handleClick = (e) => {
     setTerm(e.target.value);
  };
  return (
    <div className="container-1">
      <span className="icon">
        <i className="fa fa-search"></i>
      </span>
      <input
        type="search"
        id="search"
        placeholder="Search..."
        value={term}
        onChange={(e) => handleClick(e)}
      />
    </div>
  );
}
export default Search;
