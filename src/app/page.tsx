import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-[535px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 my-8 lg:my-32 mx-4 lg:mx-12">
        {/* Updated to escape single quotes */}
        <p className="text-2xl lg:text-4xl p-3 font-bold text-white">
          HEY! I&apos;M ALIYAN
        </p>
        <p className="text-2xl lg:text-4xl p-3 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          I&apos;M A DEVELOPER
        </p>
        <p className="p-3 text-white text-justify mr-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          error quo, suscipit architecto adipisci est commodi maxime dolorum
          temporibus, nulla iusto ex consequuntur illum perspiciatis eos tempore
          facilis, rerum eaque?
        </p>
        <button className="p-3 bg-white text-black mx-2">Contact Us</button>
      </div>

      <div className="mx-4 lg:mx-20">
        <Image
          src="/side.jpg"
          alt="Image showcasing developer skills or personality"
          width={500}
          height={300}
          className="w-full lg:w-96"
        />
      </div>
    </div>
  );
}
