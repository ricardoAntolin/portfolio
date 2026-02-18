import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Engineering Manager",
  "Mobile Developer",
  "Backend Engineer",
  "Tech Lead",
];

export default function AnimatedRoles() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setShow(true);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="inline-block transition-all duration-400"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {roles[index]}
    </span>
  );
}
