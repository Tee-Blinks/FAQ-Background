
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image 
          src="/download.png"
          alt="Mountains with snow"
          layout="fill"
          objectFit='cover'
        />
      </div>
      <h1 style={{
        paddingTop: "5vh",
        fontFamily: "monospace",
        fontSize: "2.5rem",
        textAlign: "center"
      }}>Frequently Asked Questions</h1>
    </>
  );
}
