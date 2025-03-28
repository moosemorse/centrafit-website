import { Button } from "@/components/ui/button";
import Image from "next/image"
// import { ImageCarousel } from "@/components/ui/ImageCarousel";

export default function Home() {
  // const carouselImages = [
  //   "/images/fitness-1.png", 
  //   "/images/fitness-2.png",
  //   "/images/fitness-3.png",
  // ]; 

  return (
    <div className="min-h-screen w-full flex flex-col bg-black"> 
      {/* Full-height image container that leaves space for navbar */}
      {/* <div className="w-full relative flex-grow mt-20" style={{ height: "calc(100vh - 150px)" }}>
        <ImageCarousel 
          images={carouselImages}
          displayDuration={6000}
          transitionDuration={1500}
          className="rounded-3xl" 
        />
      </div> */}

<div className="relative w-[90%] py-7 mx-auto mt-24 mb-32 rounded-3xl overflow-hidden opacity-30" 
           style={{ height: "calc(100vh - 280px)" }}>
        <Image
          src="/images/fitness-2.png"
          alt="Fitness background"
          quality={100}
          fill
          priority
          className="object-cover rounded-3xl"
        />
        
        {/* Gradient overlay to make text more readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 rounded-3xl"></div>
      </div>
      
      {/* Text overlay positioned at the bottom center of the image */}
      <div className="absolute bottom-10 left-0 right-0 text-center space-y-5 max-w-2xl mx-auto z-10 px-4">
        {/* <p className="py-1 px-2 bg-zinc-900/70 backdrop-blur-sm font-light 
        rounded-full text-white inline-block">Join 7,000+ Users</p> */}
        <div className="space-y-3">
          <h1 className="font-eras text-7xl tracking-wide bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 text-transparent font-semibold">CentraFit</h1>
        </div> 

        <p className="font-eras text-white text-lg p-3 rounded-xl">
        The next generation of training starts here, with your very own personalised fitness advisor powered by AI.
        </p>

        <div className="space-x-3">
          <Button variant="default" className="rounded-lg">Placeholder</Button>
          <Button variant="secondary" className="rounded-lg">Placeholder</Button>
        </div>
      </div>
    </div>
  );
}
