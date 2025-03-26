import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center space-y-5 max-w-2xl z-10">
        <p className="py-1 px-2 bg-zinc-900/40 backdrop-blur-sm font-light 
        rounded-full text-white inline-block">Join 7,000+ Users</p>
        <div className="space-y-3">
          <h1 className="text-7xl tracking-wide bg-clip-text bg-gradient-to-r from-purple-400
           to-blue-900 text-transparent h-20 font-semibold">CentraFit</h1>
        </div> 

        <p className="text-gray-400 text-lg text-pretty">
        The next generation of training starts here, with your very own personalised fitness advisor powered by AI.
        </p>

        <div className="space-x-3">
          <Button variant="default" className="rounded-lg">Browse components</Button>
          <Button variant="secondary" className="rounded-lg">Unlock all access</Button>
        </div>
      </div>
    </div>
  );
}
