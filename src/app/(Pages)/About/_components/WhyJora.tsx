import Image from "next/image";

const WhyJoya = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
              Why Joya
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f4f3ef] whitespace-pre-wrap leading-relaxed">
            • <span className="text-[#f1f0ec] font-bold">Expertise:</span>{" "}
            Unmatched real estate knowledge and experience.
            <br />•{" "}
            <span className="text-[#f1f0ec] font-bold">Reliability:</span> A
            team known for its dependability and commitment.
            <br />•{" "}
            <span className="text-[#f1f0ec] font-bold">Technology:</span>{" "}
            Harnessing state-of-the-art technology for a seamless experience.
            <br />• <span className="text-[#f1f0ec] font-bold">
              Education:
            </span>{" "}
            The only agency with a KHDA licensed real estate training institute.
            <br />•{" "}
            <span className="text-[#f1f0ec] font-bold">
              Comprehensive Services:
            </span>{" "}
            A one-stop-shop with a large commercial team, property management,
            and maintenance departments.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <Image
          width={1920}
          height={1280}
          src="/images/about/why.jpg"
          alt="Why Joya"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default WhyJoya;
