import React from "react";
import CompB from "./compB";

export default function compA() {
  const selectedState = "Telugu";
  return (
    <div>
      <select name="state">
        <option value="TN">Tamil Nadu</option>
        <option value="KL">Kerala</option>
        <option value="TL">Telugu</option>
      </select>

      {/* City: Dropdown */}
      <CompB state={selectedState} />
    </div>
  );
}
