import React, { useState } from "react";

export default function InsertionSortVisualization() {
  const [array, setArray] = useState([12, 11, 13, 5, 6]);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Insertion Sort Algorithm with Visualization
  const insertionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      // Highlight the key being inserted
      setCurrentIndices([i]);
      await delay(500);

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        setArray([...arr]);
        setCurrentIndices([j, j + 1]);
        await delay(500);
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setCurrentIndices([]);
      await delay(500);
    }
    setIsSorting(false);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Insertion Sort Visualization</h3>
      <p style={styles.description}>
        Insertion Sort is a simple sorting algorithm that builds the final
        sorted array one item at a time. It compares the current element with
        those already sorted and inserts it in its correct position.
      </p>
      <div style={styles.arrayContainer}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              ...styles.bar,
              height: `${value * 10}px`,
              backgroundColor: currentIndices.includes(index)
                ? "#f4a261" // Highlight current elements being processed
                : "#264653", // Default color
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={insertionSort}
        style={styles.button}
        disabled={isSorting}
      >
        {isSorting ? "Sorting..." : "Start Insertion Sort"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "700px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  arrayContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "300px",
    marginBottom: "20px",
    gap: "5px",
  },
  bar: {
    width: "40px",
    textAlign: "center",
    color: "#fff",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#2a9d8f",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
