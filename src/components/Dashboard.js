import React from "react";

export default function Dashboard({ handleLogOut }) {
  return (
    <div>
      Welcome!!!
      <div>
        <button
          className="text-lg font-semibold px-4 py-3 bg-red-700 rounded-lg text-white hover:bg-red-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
