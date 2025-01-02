import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="min-h-[80vh] flex flex-col justify-start py-8 xl:py-20">
          {/* text */}
          <div className="text-left w-full">
            <h1 className="h2 mb-7">
              Projektowanie opakowań produktów <br />
            </h1>
            <p className="max-w-[1200px] mb-10 text-white/60">
              W dzisiejszym konkurencyjnym rynku, opakowanie jest kluczowym elementem, który przyciąga uwagę konsumentów i wyróżnia produkt na tle konkurencji. Oferuję kompleksowe usługi projektowania opakowań, które łączą estetykę, funkcjonalność i innowacyjność. Moje projekty są dostosowane do specyfiki rynku, zapewniając doskonałą prezentację Twoich produktów i budując pozytywny wizerunek marki.
            </p>
            <h2 className="text-red-500 mt-4">Usługi Projektowania Opakowań</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Kompleksowe konsultacje</strong> – Zanim przystąpię do tworzenia projektu, przeprowadzam szczegółową konsultację z klientem, aby poznać specyfikę produktu oraz jego oczekiwania.
              </li>
              <li>
                <strong>Innowacyjne rozwiązania designu</strong> – Stosuję najnowsze trendy, by stworzyć opakowanie, które przyciągnie uwagę konsumentów, budując silną tożsamość marki.
              </li>
              <li>
                <strong>Funkcjonalność i ergonomia</strong> – Moje projekty nie tylko wyglądają atrakcyjnie, ale są także praktyczne w użyciu, co zwiększa komfort i użyteczność opakowania.
              </li>
              <li>
                <strong>Ekologiczne podejście</strong> – W projektach uwzględniam aspekty związane z ekologią i zrównoważonym rozwojem, tworząc opakowania przyjazne dla środowiska.
              </li>
              <li>
                <strong>Obsługa od koncepcji do produkcji</strong> – Oferuję pełną obsługę, przygotowując projekt gotowy do produkcji, uwzględniając wszystkie wymagania techniczne.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Proces Tworzenia Projektu Opakowania</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Konsultacja i analiza potrzeb</strong> – Przeprowadzam rozmowę z klientem, aby zrozumieć oczekiwania i specyfikę produktu, co pozwala mi stworzyć opakowanie idealnie pasujące do marki.
              </li>
              <li>
                <strong>Wybór materiałów i technologii</strong> – Dobieram odpowiednie materiały, które zapewnią optymalną jakość i estetykę opakowania, a także spełnią wymagania ekologiczne.
              </li>
              <li>
                <strong>Tworzenie wstępnych koncepcji</strong> – Przygotowuję kilka różnych propozycji, które odpowiadają założeniom klienta, uwzględniając estetykę, funkcjonalność i przekaz marketingowy.
              </li>
              <li>
                <strong>Rozwój projektu</strong> – Po zaakceptowaniu jednej z koncepcji, dopracowuję projekt, testując różne wersje i poprawiając detale.
              </li>
              <li>
                <strong>Finalizacja i przygotowanie plików</strong> – Przekształcam projekt w odpowiednie formaty, gotowe do produkcji, zapewniając wysoką jakość wykonania i zgodność z wymaganiami technicznymi.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Dlaczego Warto Wybrać Moje Usługi Projektowe?</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Doświadczenie i profesjonalizm</strong> – Mam szeroką wiedzę i doświadczenie w projektowaniu opakowań, które są estetyczne, funkcjonalne i zgodne z potrzebami rynku.
              </li>
              <li>
                <strong>Indywidualne podejście</strong> – Każdy projekt jest dostosowany do specyfiki klienta, co zapewnia unikalność i zgodność z tożsamością marki.
              </li>
              <li>
                <strong>Innowacyjność</strong> – Moje projekty opakowań są kreatywne i zgodne z najnowszymi trendami, dzięki czemu wyróżniają się na tle konkurencji.
              </li>
              <li>
                <strong>Ekologia</strong> – Projektuję opakowania z uwzględnieniem zrównoważonego rozwoju, dbając o to, aby były one przyjazne dla środowiska.
              </li>
              <li>
                <strong>Terminowość i komunikacja</strong> – Realizuję projekty zgodnie z ustalonym harmonogramem, dbając o stały kontakt z klientem, aby zapewnić pełną satysfakcję.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Podsumowanie</h2>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Projektowanie opakowań to nie tylko estetyka, ale kluczowy element, który decyduje o sukcesie rynkowym produktu. Dzięki mojemu doświadczeniu, kreatywności i profesjonalizmowi, oferuję usługi projektowania opakowań, które nie tylko przyciągają uwagę, ale także budują pozytywny wizerunek marki, zwiększając jej rozpoznawalność na rynku.
            </p>
          </div>
          {/* photo */}
        </div>
      </div>
    </section>
  );
};

export default Home;
