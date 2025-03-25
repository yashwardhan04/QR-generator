"use client"

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";


export default function App(): JSX.Element {
  const [input, setInput] = useState<string>('');


  return (
    <div className="h-screen w-full bg-zinc-400 text-black">
      <div className="border-4 border-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl text-center">
        <h1 className="text-4xl font-bold bg-slate-100 py-1 px-3 rounded-lg">QR Code Generator</h1>

        <form className="mb-20 mt-5">
          <input
            type="text"
            placeholder="Enter any text or URL"
            className="border-2 border-black px-5 py-3 rounded-lg"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value)
            }}
          />
        </form>

        {input.length > 0
          ?
          <div className="bg-white rounded-lg p-5">
            <QRCode
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
              value={input}
            />
          </div>
          :
          <p className="text-xl font-semibold underline text-red-600">Please enter text or URL...</p>
        }
      </div>
    </div>
  )
}