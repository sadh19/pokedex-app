import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full">{children}</div>
    </>
  );
};
