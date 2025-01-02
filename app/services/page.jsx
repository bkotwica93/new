"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Projekt okładek CD",
    description:
      "Tworzę unikalne okładki płyt, które oddają charakter Twojej muzyki. Każdy projekt jest dopasowany do stylu artysty, łącząc kreatywność z profesjonalnym podejściem. Moje okładki stanowią integralną część artystycznego przekazu, budując wizualną tożsamość Twojego albumu.",
    href: "services/projektowanie-okladek-muzycznych-plyt",
  },
  {
    num: "02",
    title: "Logo",
    description:
      "Profesjonalne projektowanie logo, które wyróżnia firmę na tle konkurencji. Tworzę unikalne i dopasowane do branży logotypy, budując silną tożsamość wizualną. Każdy projekt jest starannie opracowywany, uwzględniając potrzeby biznesu oraz oczekiwania klientów.",
    href: "services/projektowanie-logo-i-logotypow",
  },
  {
    num: "03",
    title: "Branding",
    description:
      "Profesjonalny branding to klucz do wyróżnienia Twojej firmy na rynku. Oferuję kompleksowe usługi, które pomogą zbudować spójny i atrakcyjny wizerunek marki, zwiększając jej rozpoznawalność i zaufanie klientów. Skontaktuj się ze mną, aby dowiedzieć się, jak możemy wspólnie wzmocnić Twoją markę.",
    href: "services/branding-i-identyfikacja-wizualna",
  },
  {
    num: "04",
    title: "Opakowania produktów",
    description:
      "Tworzenie opakowań to kluczowy element marketingu, który wyróżnia produkt na rynku. Oferuję kompleksowe usługi, które łączą estetykę, funkcjonalność i innowacyjność, zapewniając doskonałą prezentację Twojej marki. Skontaktuj się ze mną, aby stworzyć opakowanie, które przyciągnie uwagę konsumentów.",
    href: "services/opakowania-produktu",
  },

  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
