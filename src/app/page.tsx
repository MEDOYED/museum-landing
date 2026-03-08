import { Header } from "@/widgets/Header";
import { Hero } from "@/widgets/Hero";
import { Exhibitions } from "@/widgets/Exhibitions";
import { Events } from "@/widgets/Events";
import { News } from "@/widgets/News";
import { Subscribe } from "@/widgets/Subscribe";
import { PlanVisit } from "@/widgets/PlanVisit";
import { Footer } from "@/widgets/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Exhibitions />
        <Events />
        <PlanVisit />
        <News />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
