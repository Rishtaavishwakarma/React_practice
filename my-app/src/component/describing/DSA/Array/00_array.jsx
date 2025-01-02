import React, { useState } from "react";

export default function ArrayDemo() {
  const [array, setArray] = useState([10, 20, 30, 40]);
  const [newValue, setNewValue] = useState("");
  const [insertIndex, setInsertIndex] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Add a new element to the end of the array
  const handleAdd = () => {
    if (newValue === "") return;
    setArray([...array, Number(newValue)]);
    setNewValue("");
  };

  // Insert an element at a specific position
  const handleInsert = () => {
    if (newValue === "" || insertIndex === "") return;
    const index = Number(insertIndex);
    if (index < 0 || index > array.length) {
      alert("Index out of bounds");
      return;
    }
    const newArray = [...array];
    newArray.splice(index, 0, Number(newValue));
    setArray(newArray);
    setNewValue("");
    setInsertIndex("");
  };

  // Delete the last element from the array
  const handleDelete = () => {
    if (array.length === 0) {
      alert("Array is empty");
      return;
    }
    setArray(array.slice(0, -1));
  };

  // Handle Traversal
  const handleTraverse = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Understanding Arrays</h3>
      <p style={styles.paragraph}>
        An <b>array</b> is a data structure that stores elements in contiguous
        memory locations. It allows efficient access to elements using an index.
        Arrays are widely used in programming for organizing and managing data.
      </p>

      <div style={styles.arrayDisplay}>
        <h4 style={styles.subheading}>Array Elements</h4>
        <p style={styles.arrayElements}>
          {array.length > 0 ? array.join(", ") : "The array is empty."}
        </p>
      </div>

      <div style={styles.traversalDisplay}>
        <h4 style={styles.subheading}>Current Traversal</h4>
        <p style={styles.traversalElement}>
          {currentIndex === -1
            ? "Click 'Traverse' to start."
            : `Current Element: ${array[currentIndex]}`}
        </p>
        <button onClick={handleTraverse} style={styles.traverseButton}>
          Traverse
        </button>
      </div>

      <div style={styles.controls}>
        <input
          type="number"
          placeholder="Enter a number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Index (for insertion)"
          value={insertIndex}
          onChange={(e) => setInsertIndex(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>
          Add
        </button>
        <button onClick={handleInsert} style={styles.button}>
          Insert
        </button>
        <button onClick={handleDelete} style={styles.button}>
          Delete Last
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "700px",
    margin: "30px auto",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  arrayDisplay: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  arrayElements: {
    color: "#333",
    fontSize: "18px",
  },
  traversalDisplay: {
    backgroundColor: "#f0f8ff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  traversalElement: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
  },
  traverseButton: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    transition: "background-color 0.3s",
  },
};
