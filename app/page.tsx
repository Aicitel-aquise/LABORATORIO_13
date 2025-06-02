"use client";
import { useState } from "react";
import QRCode from "react-qr-code";
export default function Home() {
  const [text, setText] = useState("");
  const downloadQRCode = () => {
    const svg = document.getElementById("qr-gen")?.querySelector("svg");
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        const pngImg = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngImg;
        downloadLink.download = "codigo-qr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      alert("Error al cargar la imagen para descargar");
    };
    img.src = url;
  };

  return (
    <main style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Generador de Código QR</h1>
      <input
        type="text"
        placeholder="Escribe texto o URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: 8,
          width: "300px",
          fontSize: 16,
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      />
      <div
        id="qr-gen"
        style={{
          marginTop: 20,
          background: "white",
          padding: 10,
          display: "inline-block",
        }}
      >
        {text ? (
          <QRCode value={text} size={256} />
        ) : (
          <p>Escribe algo para generar el código QR</p>
        )}
      </div>

      {text && (
        <button
          onClick={downloadQRCode}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            fontSize: 16,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Descargar QR
        </button>
      )}
    </main>
  );
}