import React, { useState } from "react";

export default function MergeSortVisualization() {
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [isSorting, setIsSorting] = useState(false);
  const [currentIndices, setCurrentIndices] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Merge Sort Algorithm with Visualization
  const mergeSort = async (arr, start = 0, end = arr.length) => {
    if (end - start <= 1) return [arr[start]];

    const mid = Math.floor((start + end) / 2);

    // Recursively sort left and right halves
    const left = await mergeSort(arr, start, mid);
    const right = await mergeSort(arr, mid, end);

    // Merge sorted halves
    return await merge(left, right, start);
  };

  const merge = async (left, right, start) => {
    let merged = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      setCurrentIndices([start + i, start + left.length + j]);
      await delay(500);

      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
      setArray((prev) => {
        const temp = [...prev];
        temp[start + merged.length - 1] = merged[merged.length - 1];
        return temp;
      });
    }

    while (i < left.length) {
      merged.push(left[i]);
      i++;
      setArray((prev) => {
        const temp = [...prev];
        temp[start + merged.length - 1] = merged[merged.length - 1];
        return temp;
      });
      await delay(500);
    }

    while (j < right.length) {
      merged.push(right[j]);
      j++;
      setArray((prev) => {
        const temp = [...prev];
        temp[start + merged.length - 1] = merged[merged.length - 1];
        return temp;
      });
      await delay(500);
    }

    return merged;
  };

  const startSorting = async () => {
    setIsSorting(true);
    await mergeSort([...array]);
    setCurrentIndices([]);
    setIsSorting(false);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Merge Sort Visualization</h3>
      <p style={styles.description}>
        Merge Sort is a divide-and-conquer algorithm that splits the array into
        halves, recursively sorts them, and then merges the sorted halves.
      </p>
      <div style={styles.arrayContainer}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              ...styles.bar,
              height: `${value * 5}px`,
              backgroundColor: currentIndices.includes(index)
                ? "#f4a261" // Highlight current elements being compared
                : "#2a9d8f", // Default color
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={startSorting}
        style={styles.button}
        disabled={isSorting}
      >
        {isSorting ? "Sorting..." : "Start Merge Sort"}
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
