"use client";

interface DotPatternProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function DotPattern({
  position,
  size = "md",
  className = "",
}: DotPatternProps) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const sizes = {
    sm: "w-24 h-24",
    md: "w-32 h-32 md:w-40 md:h-40",
    lg: "w-40 h-40 md:w-56 md:h-56",
  };

  const cornerStyles = {
    "top-left": "rounded-br-full",
    "top-right": "rounded-bl-full",
    "bottom-left": "rounded-tr-full",
    "bottom-right": "rounded-tl-full",
  };

  return (
    <div
      className={`absolute ${positions[position]} ${sizes[size]} ${cornerStyles[position]} overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `radial-gradient(#D4A43C 3px, transparent 3px)`,
          backgroundSize: "14px 14px",
        }}
      />
    </div>
  );
}

// Decorative gold curve element
export function GoldCurve({
  position,
  className = "",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const transforms = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-[-1]",
  };

  return (
    <div
      className={`absolute ${positions[position]} w-32 h-32 md:w-48 md:h-48 pointer-events-none ${className}`}
      style={{ transform: transforms[position] }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path
          d="M0 0 Q0 200 200 200 L200 150 Q50 150 50 0 Z"
          fill="#D4A43C"
        />
      </svg>
    </div>
  );
}

