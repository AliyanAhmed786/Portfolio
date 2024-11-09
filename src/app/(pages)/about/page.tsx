import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <div>
        <div className="bg-black h-screen flex flex-col lg:flex-row">
          <div className="mx-4 mt-10 lg:mx-20">
            <Image 
              src="/right.jpg" 
              alt="Description of the image" 
              width={500} 
              height={400} 
              className="w-full lg:w-96" 
            />
          </div>

          <div className="w-full lg:w-1/2 my-8 lg:my-32 mx-4 lg:mx-12">
            <p className="text-2xl lg:text-4xl p-3 font-bold text-white">
              HEY! I&apos;M ALIYAN
            </p>
            <p className="p-3 text-white text-justify mr-12">
              I&apos;m a passionate web developer skilled in React, Next.js, and JavaScript. My journey started with a deep fascination for design, which led me to create clean, user-friendly websites. I love turning ideas into functional, dynamic web applications that deliver seamless user experiences.
            </p>
            <button className="p-3 bg-white text-black mx-2">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
