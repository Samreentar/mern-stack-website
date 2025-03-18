import React from "react";

const Values = () => {
  return (
    <div className="h-full min-h-screen w-full bg-gray-800 pt-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Core Values That Drive <span className="text-purple-500">Our Brand</span>
        </h2>
      </div>

      {/* Bold and Prominent Text Above Cards */}
      <div className="text-center mb-16">
        <p
          style={{
            fontSize: "2rem", // Larger font size
            fontWeight: "800", // Extra bold
            color: "black", // Black color for the text
            textTransform: "uppercase", // Uppercase for prominence
            letterSpacing: "0.1em", // Increased letter spacing for clarity
            lineHeight: "1.3", // Spacing between lines for readability
          }}
        >
          Our values drive decisions, culture, and commitment to all.
        </p>
      </div>

      {/* Values Cards Section */}
      <div className="grid gap-12 md:grid-cols-3 max-w-7xl mx-auto">
        {/* Value 1 */}
        <div className="rounded-xl bg-[#611F69] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <span className="text-[#611F69] text-3xl">📈</span> {/* Growth Icon */}
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">
            Client Value
          </h3>
          <p className="text-white mt-3">
            We strive to exceed expectations and deliver measurable results
            that positively impact our clients' businesses.
          </p>
        </div>

        {/* Value 2 */}
        <div className="rounded-xl bg-[#611F69] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <span className="text-[#611F69] text-3xl">🤝</span> {/* People Icon */}
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">
            People Driven
          </h3>
          <p className="text-white mt-3">
            We prioritize the needs and well-being of employees, customers, and
            communities, fostering growth and mutual respect.
          </p>
        </div>

        {/* Value 3 */}
        <div className="rounded-xl bg-[#611F69] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <span className="text-[#611F69] text-3xl">🔒</span> {/* Lock Icon for Integrity */}
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">
            Integrity
          </h3>
          <p className="text-white mt-3">
            Honesty, transparency, and ethical behavior are at the core of our
            relationships with stakeholders.
          </p>
        </div>

        {/* Value 4 */}
        <div className="rounded-xl bg-[#611F69] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <span className="text-[#611F69] text-3xl">✔️</span> {/* Check Icon for Accountability */}
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">
            Accountability
          </h3>
          <p className="text-white mt-3">
            Taking responsibility for actions and outcomes is fundamental to
            achieving excellence in all we do.
          </p>
        </div>

        {/* Value 5 */}
        <div className="rounded-xl bg-[#611F69] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <span className="text-[#611F69] text-3xl">💡</span> {/* Light Bulb Icon for Innovation */}
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">
            Collaboration
          </h3>
          <p className="text-white mt-3">
            Collaboration drives innovation and unites diverse talents toward
            achieving shared goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;

