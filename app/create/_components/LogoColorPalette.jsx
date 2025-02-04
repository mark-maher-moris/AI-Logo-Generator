'use client'
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import ColorPalettes from "@/app/_data/ColorPalettes";

export default function LogoColorPalette({ onHandleInputChange, formData }) {
  // Ensure selectedPalette is always an object
  const initialPalette = formData?.palette
    ? ColorPalettes.find(palette => palette.paletteName === formData.palette.paletteName) || ColorPalettes[0]
    : ColorPalettes[0];

  const [selectedPalette, setSelectedPalette] = useState(initialPalette);

  return (
    <div className="my-10">
      <HeadingDescription title={"Choose Your Color Palette"} description={""} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ColorPalettes.map((palette, index) => (
          <div
            className={`rounded-lg p-4 cursor-pointer ${selectedPalette.paletteName === palette.paletteName ? 'border-2 border-indigo-500' : ''}`}
            key={index}
            onClick={() => {
              setSelectedPalette(palette);
              onHandleInputChange(palette);
            }}
          >
            <h3 className="text-lg font-semibold">{palette.paletteName}</h3>
            <div className="flex gap-2 mt-2">
              {palette.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="w-10 h-10 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}