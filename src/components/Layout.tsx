import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      This is Header
      {children}
    </div>
  );
}
