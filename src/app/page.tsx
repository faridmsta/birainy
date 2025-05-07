import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="container h-screen flex items-center justify-center">
          <p>Navigate to <Link className="text-primary font-black" href={"/services"}>Xidmətlərimiz</Link></p>
        </div>
    </>
  );
}
