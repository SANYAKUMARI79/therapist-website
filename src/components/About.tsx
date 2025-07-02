export default function About() {
  return (
    <section className="bg-white py-16 px-6 min-h-screen" id="about">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
  src="/images/serena(1)(1).jpg"
  alt="Dr. Serena Blake"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover mx-auto shadow-lg"
/>

        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Dr. Serena Blake</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake
            is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
