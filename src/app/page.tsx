"use client"

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

export default function App(): JSX.Element {
  const [input, setInput] = useState<string>("");

  return (
    <div className="min-h-screen w-full bg-gray-950 text-gray-100 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-700 p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-8">QR Code Generator</h1>

        <form className="mb-10">
          <input
            type="text"
            placeholder="Enter any text or URL"
            className="border border-gray-600 bg-gray-800 placeholder-gray-500 text-white px-5 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          />
        </form>

        {input.length > 0 ? (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <QRCode
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              bgColor="#ffffff"
              fgColor="#1e3a8a" // Navy QR color
              value={input}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : (
          <p className="text-lg font-medium text-red-500">Please enter text or URL...</p>
        )}
      </div>
    </div>
  );
}
