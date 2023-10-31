import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-tr from-blue-500 to-green-500 flex justify-center items-center">
      <div className="cursor-pointer flex flex-row items-center">
        <Image
          src="/logos/logo_transparent.png"
          width={230}
          height={230}
          alt="biblelogo"
        />
        <div className="flex flex-col">
          <h1 className="text-9xl font-semibold mb-0">BibleGPT</h1>
          <h3 className=" text-5xl mt-0">AI-Powered Bible Tool</h3>
        </div>
      </div>
    </div>
  );
}
