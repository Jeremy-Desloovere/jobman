"use client";
import React, { useEffect, useState } from "react";

export const Message = ({ message }: { message: string }) => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  }, []);

  return (
    <>
      {display && (
        <div className="toast toast-top toast-center bg-opacity-50">
          <div className="alert alert-info bg-blue-300 p-4 rounded-lg">
            {message}
          </div>
        </div>
      )}
    </>
  );
};
