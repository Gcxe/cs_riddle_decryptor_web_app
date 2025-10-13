import React, { useState } from "react";
import "./App.css";

// HintSection component
function HintSection() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        onClick={() => setShowHint(true)}
        style={{ padding: "0.5rem 1rem", marginBottom: "0.5rem" }}
      >
        Show Hint
      </button>

      {showHint && (
        <div
          style={{
            backgroundColor: "#222",
            color: "#fff",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <p>
            1) Key used for XOR decryption: <strong>Valentine</strong>
          </p>
          <p>
            2) Length of cipher (bytes): <strong>448</strong>
          </p>
          <p>
            3) Extracted binary length (bits): <strong>448</strong>
          </p>
        </div>
      )}
    </div>
  );
}

function App() {
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const [riddleSubmitted, setRiddleSubmitted] = useState(false);
  const [decodedInput, setDecodedInput] = useState("");
  const [decodedCorrect, setDecodedCorrect] = useState(false);

  const correctRiddleAnswer = "computer science";
  const correctDecodedMessage =
    "Good job, you are the computer science GOAT mr.Valentine";

  const cipherMessage =
    "66505c555e45585f5567505c545f45585e5467515d545f45595f5466515d555e44595f5566515c555e45585e5466505c555f45595f5467505c545f44595e5466515c545e45585e5566515d555e44595f5567505d545e44585e5467515d545f45595f5467515d555f44595f5566515c555e45585e5566515d555f45585e5567515c545f44595f5567515c545e44595e5566505d545e45595e5567505c545e44595e5467515c545e45595e5466515c555e44585f5566515d545e45585e5467505d555f45595f5466505c545f45595e5566515d545f44585e5466505d545e45595e5567505c555f44585e5467505c555f44595e5466515c555e44585f5466515d545e45585e5566505d555f45595f5566505c545f44595f5567515d545e45585f5566505d555e44585f5567505c555f44585e5567515c555e44595f5566515d545f44585e5567505d545e45595e5566515d555f44585e5466515c555f44595e5566515d545e45585e5466505d545e44585e5566505c545f45595e5466505c545f44595f5466515c555f44585f5567505c555e45585e5567515d555f45595f5467515c545f45595f5566515d545e45595e5466505d555f45585e5567505c555f4458";

  const pythonInstructions = `
Python Decryption Instructions:

1. Copy the cipher above into a Python file.
2. Use your XOR key or decryption method.
3. Convert binary to text using UTF-8 decoding.
4. The final message should match the success phrase.
`;

  const handleRiddleSubmit = () => {
    if (riddleAnswer.trim().toLowerCase() === correctRiddleAnswer.toLowerCase()) {
      setRiddleSubmitted(true);
    } else {
      alert("Incorrect riddle answer. Try again!");
    }
  };

  const handleDecodedSubmit = () => {
    if (decodedInput.trim() === correctDecodedMessage) {
      setDecodedCorrect(true);
    } else {
      alert("Decoded message incorrect. Try again!");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Computer Science Riddle</h1>

      {!riddleSubmitted && (
        <div style={{ marginBottom: "2rem" }}>
          <h2>Riddle:</h2>
          <p>
            I process data, run algorithms, and help humans solve problems. What field
            am I?
          </p>
          <input
            type="text"
            value={riddleAnswer}
            onChange={(e) => setRiddleAnswer(e.target.value)}
            placeholder="Enter your riddle answer"
            style={{ padding: "0.5rem", width: "300px" }}
          />
          <button
            onClick={handleRiddleSubmit}
            style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
          >
            Submit
          </button>
        </div>
      )}

      {riddleSubmitted && !decodedCorrect && (
        <div>
          <h2>Cipher and Python Instructions</h2>
          <textarea
            readOnly
            value={cipherMessage + "\n\n" + pythonInstructions}
            style={{ width: "100%", height: "300px", padding: "1rem" }}
          />

          {/* Hint button section */}
          <HintSection />

          <h3>Enter the decoded message:</h3>
          <input
            type="text"
            value={decodedInput}
            onChange={(e) => setDecodedInput(e.target.value)}
            placeholder="Enter decoded message"
            style={{ padding: "0.5rem", width: "400px" }}
          />
          <button
            onClick={handleDecodedSubmit}
            style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
          >
            Submit
          </button>
        </div>
      )}

      {decodedCorrect && (
        <div>
          <h2>🎉 Congratulations!</h2>
          <p>{correctDecodedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
