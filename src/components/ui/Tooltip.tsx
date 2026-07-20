import { type ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  message: string;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
  children,
  message,
  position = "left",
}: PageProps) {
  const positionClasses = {
    top: "bottom-15 left-1/2 -translate-x-1/2",
    bottom: "top-15 left-1/2 -translate-x-1/2",
    left: "right-15 top-1/2 -translate-y-1/2",
    right: "left-15 top-1/2 -translate-y-1/2",
  };
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute ${positionClasses[position]} mb-2 hidden group-hover:block w-max bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none`}
      >
        {message}
      </div>
    </div>
  );
}
