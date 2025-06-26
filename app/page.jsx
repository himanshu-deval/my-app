import Image from "next/image";

export default function Home() {
  return;

  <div>
    {/* Hero Section */}
    <section>
      <h1>Streamline Your WorkFlow</h1>
      <span>
        <Image
          src={"/logo2.png"}
          width={400}
          height={80}
          className="h-14 sm:h-24 w-auto object-contain"
          alt="Zscrum Logo"
        />
      </span>
    </section>
  </div>;
}
