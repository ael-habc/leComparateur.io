import React from "react";
 import "./Internet.css";
export default function Internet() {
  return (
    <div style={{ width: "100%", height: "100vh" }} className="internet">
      {/* Embedding Landbot chatbot using iframe */}
      <iframe
        title="Landbot Chatbot"
        src="https://landbot.online/v3/H-1737553-BFNBJ7YUV1EJNUWE/index.html"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
