import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        © Copyright by {"  "}
        <a href="https://www.linkedin.com/in/therahman/">Aqueel ur rahman</a>
        {"  " + new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
