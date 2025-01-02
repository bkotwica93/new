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
              Projektowanie Logo <br />
            </h1>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Projektowanie logo to jeden z kluczowych elementów budowania
              silnej tożsamości Twojej firmy. Profesjonalnie zaprojektowane logo
              wyróżnia Twoją markę, przyciąga klientów i tworzy trwałe skojarzenia
              z Twoim biznesem. Dzięki mojemu doświadczeniu w projektowaniu logo,
              Twój biznes zyska wyjątkową wizualną reprezentację, która wyróżni
              się na tle konkurencji.
            </p>
            <h2 className="text-red-500 mt-4">Co oferuję w ramach usługi projektowania logo?</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Tworzenie logo od podstaw</strong> – Pracuję nad stworzeniem
                oryginalnego logo na podstawie Twoich oczekiwań, analizy rynku i
                branży. Moje podejście gwarantuje, że każde logo będzie idealnie
                dopasowane do charakteru Twojej firmy.
              </li>
              <li>
                <strong>Projektowanie logotypów i identyfikacji wizualnej</strong> –
                Oprócz samego logo, oferuję pełną identyfikację wizualną, która
                może obejmować projekt wizytówek, papieru firmowego, szablonów
                prezentacji PowerPoint i strony internetowej.
              </li>
              <li>
                <strong>Pakiet plików logo</strong> – Po zakończeniu pracy nad projektem
                otrzymasz komplet plików w formatach: AI, EPS, PDF, JPG, PNG, które
                będą gotowe do użycia w internecie, materiałach drukowanych i innych
                mediach.
              </li>
              <li>
                <strong>Kreatywność i dbałość o szczegóły</strong> – Każdy projekt logo
                jest starannie dopracowany, aby wyróżniał się unikalnym stylem,
                odpowiednią kolorystyką i typografią, tworząc silną identyfikację
                wizualną.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Dodatkowe usługi związane z projektowaniem logo:</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Rebranding logo</strong> – Czasami dotychczasowe logo może
                wymagać modernizacji. Jeśli Twoje logo przestało spełniać swoje
                zadanie, przeprowadzę rebranding, aby logo stało się bardziej
                nowoczesne, zapadające w pamięć i lepiej dopasowane do potrzeb rynku.
              </li>
              <li>
                <strong>Wektoryzacja logo</strong> – Jeśli posiadasz logo w formacie
                rastrowym (np. JPG, PNG), mogę je wektoryzować, co umożliwi
                bezstratne powiększanie i dostosowywanie logo do różnych formatów i
                zastosowań.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Zalety mojej oferty projektowania logo:</h2>
            <ul className="list-disc pl-5 text-white/60">
              <li>
                <strong>Indywidualne podejście</strong> – Każdy projekt jest dostosowany
                do specyfiki Twojego biznesu, branży i grupy docelowej.
              </li>
              <li>
                <strong>Szybka realizacja</strong> – Oferuję szybkie terminy realizacji,
                zapewniając Ci logo, które będzie gotowe na czas.
              </li>
              <li>
                <strong>Dopasowanie do różnych mediów</strong> – Logo jest przygotowane
                w formatach, które umożliwiają jego wykorzystanie zarówno w druku, jak
                i w internecie.
              </li>
              <li>
                <strong>Pełna zgodność z wytycznymi SEO</strong> – Projektuję logo, które
                będzie wspierać wizerunek Twojej marki w internecie, ułatwiając
                pozyskiwanie nowych klientów.
              </li>
            </ul>
            <h2 className="text-red-500 mt-4">Dlaczego warto zainwestować w profesjonalne
              projektowanie logo?</h2>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Profesjonalne logo nie tylko wyróżnia Twoją markę na tle konkurencji,
              ale także wpływa na postrzeganą wartość firmy. Posiadając dobrze
              zaprojektowane logo, stajesz się bardziej wiarygodny i profesjonalny
              w oczach klientów. Skontaktuj się ze mną, a stworzę logo, które
              przyciągnie uwagę i pomoże Ci zbudować silną obecność w sieci.
            </p>
            <h2 className="text-red-500 mt-4">Zamów projekt logo już teraz!</h2>
            <p className="max-w-[1200px] mb-10 text-white/60">
              Skontaktuj się ze mną, aby omówić szczegóły współpracy. Pomogę Ci
              stworzyć logo, które będzie fundamentem Twojej identyfikacji
              wizualnej.
            </p>
          </div>
          {/* photo */}
        </div>
      </div>
    </section>
  );
};

export default Home;
