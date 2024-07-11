import {Spotlight} from "@/components/Spotlight";
import WordFadeIn from "@/components/magicui/word-fade-in";
import FeatureCard from "@/components/FeatureCard";
import {Button} from "@/components/ui/button";
import Converter from "@/components/Converter";

export default function Home() {
  return (
      <main
          className="flex flex-col gap-24 py-36 min-h-screen w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#4ade80"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Currencier<br/> is your converter.
              </h1>
              <WordFadeIn words="With Currencier, you can convert any currency to another within seconds. No more Googling and calculator for currency conversions." className="!text-base text-center font-normal max-w-lg mx-auto mt-4 text-neutral-50"/>
          </div>
          <FeatureCard.Container>
              <FeatureCard title={'Currencies'} count={168}/>
              <FeatureCard title={'Last months\' data'} count={12}/>
              <FeatureCard title={'Avg response ms'} count={650}/>
          </FeatureCard.Container>
          <Button className="rounded-lg text-primary-foreground w-52 h-10">
              <a href="#converter">Get Started</a>
          </Button>
          <Converter/>
      </main>
  );
}
