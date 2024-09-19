import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBar = links.map((element , index)=> {
    return <a key={index} href={`#${element}`}>{element}</a>;
  } )

  return (
    <nav>
      {navBar}
    </nav>
    )
}

export default NavBar;



