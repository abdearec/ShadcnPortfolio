import React from "react";

function LoggedOutLayout({ children }) {
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center p-24">
      {children}
    </div>
  );
}

export default LoggedOutLayout;
