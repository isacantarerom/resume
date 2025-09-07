import React from "react";

export default function PalettePreview() {
  const colors = [
    { name: "Solid Background", hex: "#1F3B73" },
    { name: "Components Background", hex: "#6C8CD5" },
    { name: "Buttons3", hex: "#E5F1FF" } ,
    { name: "Buttons3", hex: "#E9B44C" } ,
    
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center" style={{ color: "#1F3B73" }}> 
        Isa Cantarero
      </h1>
      <div className="row">
        {colors.map((color) => (
          <div key={color.hex} className="col-4 col-md-4 mb-4">
            <div
              style={{
                backgroundColor: color.hex,
                height: "150px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#E5F1FF",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
              }}
            >
              {color.name}
            </div>
            <p className="text-center mt-2">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


////C8C8C8 background