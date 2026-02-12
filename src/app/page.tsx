import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <Process />
      <About/>
    </>
  );
}