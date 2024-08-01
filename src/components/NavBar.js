import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linked = links.map((link, index) => {
   return <a href= {`#${link}`} key={index}>{link}</a>
})

  return <nav>
    {linked}
  </nav>;
}

export default NavBar;
