import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen max-w-[1280px] mx-auto">{children}</div>
  );
}
