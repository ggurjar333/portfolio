import React from 'react';

function Footer() {
  return (
    <footer style={{backgroundColor: "#F8F8F8", textAlign: "center", padding: "20px 0"}}>
      <p style={{margin: "0 auto", padding: "0 10px", maxWidth: "800px"}}>
        &copy; {new Date().getFullYear()} Gaurav Gurjar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;