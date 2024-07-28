import {Spotlight} from "@/components/Spotlight";
import WordFadeIn from "@/components/magicui/word-fade-in";
import FeatureCard from "@/components/FeatureCard";
import {Button} from "@/components/ui/button";
import Converter from "@/components/Converter";
import {Heart} from "lucide-react";
import Graph from "@/components/Graph";

export default function Home() {
  return (
      <>
          <main
              className="flex flex-col gap-24 py-36 min-h-screen w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
              <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="#4ade80"
              />
              <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                  <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      ConvertIt<br/> is your converter.
                  </h1>
                  <WordFadeIn
                      words="With ConvertIt, you can convert any currency to another within seconds. No more Googling and calculator for currency conversions."
                      className="!text-base text-center font-normal max-w-lg mx-auto mt-4 text-neutral-50"/>
              </div>
              <FeatureCard.Container>
                  <FeatureCard title={'Currencies'} count={168}/>
                  <FeatureCard title={'Last days\' data'} count={7}/>
                  <FeatureCard title={'Request traffic daily'} count={1000}/>
              </FeatureCard.Container>
              <Button className="rounded-lg text-primary-foreground w-52 h-10">
                  <a href="#converter">Get Started</a>
              </Button>
              <div className="ring-2 ring-primary/75 grid grid-cols-[4rem,1fr,4rem] gap-8 py-12 px-4 w-1/2 rounded-lg">
                  <Converter/>
                  <Graph/>
              </div>
          </main>
          <footer
              className="w-full flex justify-center items-center p-1 bg-primary">
              <p className="text-sm text-primary-foreground flex gap-0.5 items-center">
                  Built with<Heart className="h-[1.5cap]"/>by<a className="underline" href="https://github.com/utkuonursahin">Utku Onur Şahin</a>
              </p>
          </footer>
      </>
  );
}
