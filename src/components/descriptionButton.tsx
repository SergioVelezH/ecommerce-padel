"use client";

import { DescriptionButtonProps } from "@/types/types";
import { useState } from "react";

export default function DescriptionButton({ description }: DescriptionButtonProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <p className="text-lg font-bold">Description</p>
        <button
          className=" text-black px-4 py-2 rounded hover:bg-gray-300 transition"
          onClick={() => setShow(!show)}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      {show && (
        <span className="mt-4 text-gray-700">
          {description}
        </span>
      )}
    </div>
  );
}
