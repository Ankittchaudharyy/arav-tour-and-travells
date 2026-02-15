import { useState } from "react";

const CAR_OPTIONS = ["Dzire", "Ertiga Maruti", "Innova Crysta", "Hatchback"];
const TRIP_OPTIONS = [
  { value: "outstation", label: "Outstation Travel" },
  { value: "one-way", label: "One Way" },
  { value: "round-trip", label: "Round Trip" },
];

export default function BookingSection() {
  const [car, setCar] = useState("");
  const [option, setOption] = useState("outstation");
  const scrollToCars = () => {
    const target = document.querySelector("#cars-pricing");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return null;
}
