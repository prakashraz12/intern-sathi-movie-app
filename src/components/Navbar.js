import React,{useRef ,useEffect} from "react";
import "./Navbar.css"
import { useGlobalContex } from "../contexApi/Contex";

const Navbar = () => {
  const headerRef = useRef(null);
  
    const stickyHeaderFunction = () => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky__header");
        } else {
          headerRef.current.classList.remove("sticky__header");
        }
      });
    };
    useEffect(() => {
      stickyHeaderFunction();
  
      return () => window.removeEventListener("scroll", stickyHeaderFunction);
    });
  
  const { query, setQuery, isError } = useGlobalContex();
  return (
    <div>
      <nav className="sticky__header" ref={headerRef}>
        <div className="logo">
          <h1>
            Movie.<span>Hub</span>
          </h1>
        </div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="search">
            <input type="text" placeholder="search" value={query} onChange={(e)=> setQuery(e.target.value)} />
          </div>
        </form>
        <div className="error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
