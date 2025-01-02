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
              Projektowanie okładek płyt muzycznych <br />
            </h1>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Jako doświadczony grafik komputerowy specjalizujący się w projektowaniu okładek muzycznych, oferuję kompleksowe usługi, które pozwalają artystom, zespołom muzycznym i wytwórniom płytowym na stworzenie wizualnej tożsamości ich muzycznych dzieł. Projektowanie okładki to nie tylko kwestia estetyki – to również sposób na wyrażenie emocji, przekazu i atmosfery, które zawarte są w danej muzyce. Dzięki mojemu doświadczeniu, pasji oraz znajomości najnowszych trendów w designie, tworzę okładki, które przyciągają uwagę i zostają w pamięci słuchaczy.
            </p>
            <h2 className="text-red-500 mt-4">Usługi Projektowania Okładek Muzycznych</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Projektowanie okładek płytowych</strong> – tworzę unikalne i dopasowane do stylu muzycznego projekty, które są wizualnym uzupełnieniem dźwięków i tekstów. Moje projekty wyróżniają się oryginalnością oraz uwzględnieniem wszystkich potrzeb i wymagań artysty.
              </li>
              <li>
                <strong>Projektowanie okładek singli i EP</strong> – specjalizuję się także w tworzeniu okładek dla singli, EP oraz innych mniejszych wydawnictw muzycznych, które wymagają indywidualnego podejścia.
              </li>
              <li>
                <strong>Projektowanie okładek dla albumów cyfrowych i fizycznych</strong> – projektuję okładki dostosowane zarówno do wydania fizycznego, jak i cyfrowego, dbając o odpowiednią jakość i dostosowanie do platform streamingowych.
              </li>
              <li>
                <strong>Tworzenie materiałów promujących wydania muzyczne</strong> – oprócz samej okładki, oferuję również projekty dodatkowych materiałów promujących album, takich jak plakaty, bannery do mediów społecznościowych czy wizualizacje na potrzeby kampanii marketingowych.
              </li>
              <li>
                <strong>Personalizacja i współpraca z artystami</strong> – ściśle współpracuję z artystami, wytwórniami muzycznymi i producentami, aby dostosować projekt okładki do unikalnego charakteru twórczości. Każdy projekt traktuję indywidualnie, uwzględniając wizje artysty oraz wymagania rynku.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Proces Tworzenia Projektu Okładki Muzycznej</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Konsultacja i brief</strong> – Na początek przeprowadzam szczegółową rozmowę z klientem, aby poznać jego oczekiwania, potrzeby oraz wizję okładki. Zbieram informacje na temat stylu muzycznego, kontekstu albumu oraz inspiracji, które mogą pomóc w tworzeniu spójnej wizualnej koncepcji.
              </li>
              <li>
                <strong>Badania i analiza</strong> – Na tym etapie dokładnie analizuję rynek i konkurencję, aby zaprojektować okładkę, która wyróżnia się na tle innych wydawnictw. Zajmuję się także badaniem trendów w designie okładek muzycznych, by mój projekt był nowoczesny i atrakcyjny.
              </li>
              <li>
                <strong>Tworzenie wstępnych szkiców i koncepcji</strong> – Na podstawie zebranego briefu oraz analizy przygotowuję wstępne koncepcje. Zawierają one różne propozycje layoutu, typografii, kolorystyki i elementów graficznych. To etap, na którym klient ma możliwość wyrażenia swojego zdania i wprowadzenia zmian.
              </li>
              <li>
                <strong>Rozwój projektu</strong> – Po zaakceptowaniu jednej z koncepcji, przechodzę do etapu dopracowywania projektu. W tym momencie tworzę bardziej szczegółowe wersje okładki, testuję różne warianty, poprawiam detale i elementy graficzne, a także sprawdzam, jak projekt wygląda w różnych skalach.
              </li>
              <li>
                <strong>Finalizacja i przygotowanie plików do druku i dystrybucji cyfrowej</strong> – Po ostatecznej akceptacji projektu przekształcam go w odpowiednie formaty, zarówno do druku, jak i do dystrybucji cyfrowej. Przygotowuję pliki w wysokiej rozdzielczości, z zachowaniem pełnej kompatybilności z wymaganiami technicznymi platform muzycznych oraz drukarni.
              </li>
              <li>
                <strong>Dostosowanie do wymagań specyficznych platform</strong> – Projektując okładki, uwzględniam wymagania różnych platform streamingowych, takich jak Spotify, Apple Music, Tidal czy YouTube. Dbam o to, by okładka była optymalizowana do wyświetlania na różnych urządzeniach, zachowując czytelność i atrakcyjność.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Dlaczego Warto Wybrać Moje Usługi Projektowe?</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Doświadczenie</strong> – Jako grafik komputerowy z wieloletnim doświadczeniem, mam szeroką wiedzę na temat tworzenia okładek, które nie tylko wyglądają profesjonalnie, ale także przyciągają uwagę i budują markę artysty.
              </li>
              <li>
                <strong>Indywidualne podejście</strong> – Każdy projekt traktuję indywidualnie, a moja praca opiera się na bliskiej współpracy z klientem, co pozwala mi dokładnie zrozumieć jego wizję i potrzeby.
              </li>
              <li>
                <strong>Kreatywność i nowoczesność</strong> – Moje projekty są innowacyjne i zgodne z najnowszymi trendami w designie, dzięki czemu są atrakcyjne i wyróżniają się na tle konkurencji.
              </li>
              <li>
                <strong>Profesjonalne przygotowanie do druku i dystrybucji</strong> – Gwarantuję, że finalne pliki będą zgodne z wymaganiami technicznymi i gotowe do druku lub publikacji na platformach cyfrowych.
              </li>
              <li>
                <strong>Terminowość i komunikacja</strong> – Każdy projekt realizuję w ustalonym czasie, dbając o regularną komunikację z klientem na każdym etapie pracy, aby zapewnić pełną satysfakcję.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Podsumowanie</h2>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Projektowanie okładek muzycznych to sztuka łączenia kreatywności, designu i muzyki. Jako profesjonalny grafik komputerowy z doświadczeniem w branży, oferuję usługi, które pozwalają artystom i wytwórniom muzycznym na stworzenie wizualnej tożsamości ich wydawnictw. Dzięki mojemu podejściu, pasji oraz znajomości technik projektowych, tworzę okładki, które nie tylko przyciągają wzrok, ale również opowiadają historię, która doskonale współgra z dźwiękami i emocjami zawartymi w muzyce.
            </p>
            
          </div>
          {/* photo */}
        </div>
      </div>
    </section>
  );
};

export default Home;
