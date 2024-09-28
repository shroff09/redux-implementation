'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}
    >
        <Link href="/task">Open todo</Link>
        <Link href="/modal">Open Modal</Link>
    </div>
  );
}
