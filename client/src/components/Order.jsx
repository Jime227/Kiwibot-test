import React from "react";

export default function Order() {
  return (
    <div>
      <button>ASC</button>
      <button>DESC</button>
      <select>
        <option>Pending</option>
        <option>Assigned</option>
        <option>In transit</option>
        <option>Delivered</option>
      </select>
    </div>
  );
}
