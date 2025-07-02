export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn evidence-based tools to manage overwhelming thoughts, reduce stress, and regain balance in your daily life.",
      image: "/images/anxiety(1)(1).jpg",
    },
    {
      title: "Relationship Counseling",
      description:
        "Improve communication, deepen connection, and resolve conflict with personalized couples or individual support.",
      image: "/images/relationship(1)(1).jpg",
    },
    {
      title: "Trauma Recovery",
      description:
        "Work through painful experiences safely and build resilience with compassionate trauma-informed therapy.",
      image: "/images/trauma(1)(1).jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
