const OurValues = () => {
  const values = [
    {
      title: "INTEGRITY",
      content:
        "We act with honesty and transparency in all our dealings, ensuring trust and loyalty from clients and partners. Our business aligns with our values, doing what we say and knowing it’s fundamental for our credibility.",
    },
    {
      title: "EXCELLENCE",
      content:
        "We strive for the highest standards in every transaction, with attention to detail and a commitment to quality service, ensuring our clients receive the best possible experience.",
    },
    {
      title: "EMPOWERMENT",
      content:
        "We believe in empowering both our clients and team members to achieve financial freedom and personal growth by providing the tools, knowledge, and support they need to succeed.",
    },
    {
      title: "CLIENT-CENTRIC",
      content:
        "Our focus is on understanding and fulfilling our clients' unique needs, creating tailored solutions for their real estate aspirations and ensuring their satisfaction.",
    },
    {
      title: "INNOVATION",
      content:
        "We stay ahead of market trends and embrace technology to offer a competitive edge in both client service and team operations, ensuring we remain agile in a fast-paced industry.",
    },
    {
      title: "LONG-TERM RELATIONSHIPS",
      content:
        "We believe in building lasting relationships with clients, partners, and team members, ensuring mutual growth and loyalty throughout our collaborations.",
    },
    {
      title: "TEAMWORK",
      content:
        "We thrive in a collaborative environment, driven by a shared vision of delivering exceptional service and exceeding expectations, knowing that the whole becomes greater than the sum of its parts.",
    },
    {
      title: "RESPONSIBILITY",
      content:
        "We take responsibility for our economic decisions and how we treat our partners, clients, and employees, ensuring we contribute positively to the community.",
    },
    {
      title: "TRANSPARENCY",
      content:
        "Transparency fosters trust and supports goal-oriented actions. It makes our decisions understandable and clear, enhancing our relationships with clients and partners.",
    },
    {
      title: "AGILITY",
      content:
        "We recognize the speed of change within the real estate market and believe this agility is essential for success, enabling us to adapt quickly to client needs and market dynamics.",
    },
  ];

  return (
    <div className="bg-[#041d1a] py-16">
      <div className="text-center mb-14">
        <p className="text-[#a0b3b1] font-bold mb-3 text-lg md:text-xl lg:text-2xl">
          SETTING NEW INDUSTRY STANDARDS
        </p>
        <h1 className="text-4xl md:text-6xl text-[#f1f0ec] font-bold mb-8">
          OUR VALUES
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-3 md:mx-8 lg:mx-auto">
        {/* Values Cards */}
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-[#111612] p-6 rounded-lg shadow-lg hover:bg-[#354948] transition-all duration-500 ease-in-out"
          >
            <h2 className="text-lg text-[#f1f0ec] font-bold mb-4">
              {value.title}
            </h2>
            <p className="text-[#a2a39b]">{value.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
