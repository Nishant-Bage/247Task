import React from "react";

const IdleLogoutModal = ({ countdown, stayLoggedIn, logoutNow }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-md w-full text-center shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">You are about to be logged out!</h2>
        <p className="mb-4">You will be logged out in <span className="font-semibold">{countdown}</span> seconds due to inactivity.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={stayLoggedIn}
            className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
          >
            Stay Logged In
          </button>
          <button
            onClick={logoutNow}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdleLogoutModal;