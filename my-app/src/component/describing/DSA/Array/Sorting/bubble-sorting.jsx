import React, { useState } from "react";

export default function BubbleSortVisualization() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [isSwapped, setIsSwapped] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Bubble Sort Algorithm with Visualization
  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setCurrentIndices([j, j + 1]);
        setIsSwapped(false);
        await delay(500); // Highlight comparison

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setIsSwapped(true);
          await delay(500); // Highlight swapping
        }
        setArray([...arr]);
      }
    }
    setCurrentIndices([]);
    setIsSorting(false);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Bubble Sort Visualization</h3>
      <p style={styles.description}>
        Bubble Sort is a sorting algorithm that compares adjacent elements and
        swaps them if they are in the wrong order. It repeatedly passes through
        the list until it is sorted.
      </p>
      <div style={styles.arrayContainer}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              ...styles.bar,
              height: `${value * 5}px`,
              backgroundColor:
                currentIndices.includes(index)
                  ? isSwapped
                    ? "#e63946" // Red for swapping
                    : "#2a9d8f" // Green for comparison
                  : "#457b9d", // Default color
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={bubbleSort}
        style={styles.button}
        disabled={isSorting}
      >
        {isSorting ? "Sorting..." : "Start Bubble Sort"}
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
    backgroundColor: "#264653",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
