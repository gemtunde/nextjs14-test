import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>Category</h2>
      <Link href="/about">About</Link>
    </>
  );
}
