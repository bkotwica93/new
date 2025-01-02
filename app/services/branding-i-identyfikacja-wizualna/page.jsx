import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="min-h-[80vh] flex flex-col justify-start py-8 xl:py-20">
          <div className="text-left w-full">
            <h1 className="h2 mb-7">
              Branding i Identyfikacja Wizualna <br />
            </h1>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Branding i identyfikacja wizualna to kluczowe elementy budowania
              rozpoznawalności marki. Profesjonalnie zaprojektowany system
              identyfikacji wizualnej obejmuje logo, kolorystykę, typografię
              oraz inne materiały promocyjne, które razem tworzą spójny i
              atrakcyjny wizerunek firmy. Dzięki temu Twoja marka wyróżnia się
              na tle konkurencji i buduje zaufanie wśród klientów.
            </p>
            <h2 className="text-red-500 mt-4">
              Co oferuję w ramach identyfikacji wizualnej?
            </h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Projektowanie logo z księgą znaku</strong> – Tworzę
                unikalne logo wraz z wytycznymi dotyczącymi jego użycia, co
                zapewnia spójność we wszystkich materiałach firmowych.
              </li>
              <li>
                <strong>Key visual</strong> – Opracowuję motyw przewodni, który
                będzie obecny we wszystkich materiałach promocyjnych,
                wzmacniając rozpoznawalność marki.
              </li>
              <li>
                <strong>Materiały reklamowe</strong> – Projektuję wizytówki,
                papier firmowy, teczki, ulotki, broszury i inne materiały, które
                są niezbędne w komunikacji z klientami.
              </li>
              <li>
                <strong>Elementy do internetu</strong> – Przygotowuję banery
                online, szablony prezentacji PowerPoint oraz elementy graficzne
                na stronę internetową, dostosowane do specyfiki Twojej
                działalności.
              </li>
              <li>
                <strong>Projekty gadżetów i opakowań</strong> – Tworzę projekty
                gadżetów, opakowań, metek i innych materiałów, które podkreślają
                unikalny charakter Twojej marki.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">
              Dlaczego warto zainwestować w profesjonalny branding?
            </h2>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Inwestując w profesjonalny branding, zyskujesz spójny i atrakcyjny
              wizerunek, który przyciąga klientów i buduje ich zaufanie.
              Skontaktuj się ze mną, aby omówić szczegóły współpracy i stworzyć
              identyfikację wizualną, która wzmocni pozycję Twojej marki na
              rynku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
