import { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="services-root">
      {children}
    </div>
  );
}
