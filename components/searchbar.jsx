function SearchBar() {
  return (
    <>
      <form className="my-2 position-relative">
        <input type={"search"} className="form-control searchInput" />
        <span className="searchIcon">
            <img src="/Images/search.svg" width={20} height={14}></img>
        </span>
      </form>
    </>
  );
}

export default SearchBar;
