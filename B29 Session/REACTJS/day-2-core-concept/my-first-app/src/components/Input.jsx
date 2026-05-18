import React from "react";

export default function Input(props) {
  // 1. Define your styles in a simple object
  const styles = {
    wrapper: {
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      fontSize: "14px",
      color: "#333",
    },
    inputField: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* 2. Apply styles using the style attribute */}
      <label style={styles.label}>{props.label}</label>
      <input
        style={styles.inputField}
        type={props.validType}
        placeholder={props.info}
      />
    </div>
  );
}
