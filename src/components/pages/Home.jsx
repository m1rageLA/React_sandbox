import React from "react";
import "../../styles/css/styles.css";

const Home = () => {
  const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        color: "white",
    },    
  };

  return <div style={styles.container}>Hello home</div>;
};

export default Home;
