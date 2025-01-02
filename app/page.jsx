import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Projektant graficzny</span>
            <h1 className="h1 mb-7
            ">
              Cześć jestem <br /> <span className="text-accent">Bartek Kotwica</span>
            </h1>
            <p className="max-w-[500px] mb-10 text-white/75">
            Specjalizuję się w grafice 3D, projektowaniu okładek na płyty, logotypów oraz identyfikacji wizualnej. Tworzę unikalne projekty dopasowane do muzyki i potrzeb klienta, wyróżniające się zarówno w świecie cyfrowym, jak i fizycznym.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
