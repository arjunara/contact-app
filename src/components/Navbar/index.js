import "./index.css";

const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid header-container">
               <a
                  className="navbar-brand text-light"
                  style={{ marginLeft: "135px" }}
                  href="/"
               >
                  Contact App
               </a>
            </div>
            <div
               className="collapse navbar-collapse display-flex justify-content-space-between"
               id="navbarSupportedContent"
            >
               <form className="d-flex">
                  <input
                     className="form-control me-2"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                  />
                  <button
                     className="btn btn-outline-warning text-white"
                     type="submit"
                  >
                     Search
                  </button>
               </form>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
