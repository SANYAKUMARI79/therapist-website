import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section
        className="min-h-[100vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: 'url("/images/hero(1).jpg")' }}
      >
        <div className="text-center bg-white/80 p-8 rounded-xl shadow-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Dr. Serena Blake, PsyD
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
            Compassionate therapy for anxiety, relationships & trauma
          </h2>
          <a
  href="#contact"
  className="inline-block px-6 py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition"
>
  Book a Free Consult


            

          </a>
        </div>
      </section>

      <About />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
