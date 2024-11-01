const KeyStats = () => {
  const stats = [
    { value: "2 years", label: "Experienced in our market" },
    { value: "4961", label: "Sole or leased properties" },
    { value: "2023", label: "Year Established" },
  ];

  return (
    <div className="mx-4 md:mx-8 lg:mx-24 my-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center my-4 md:my-0 md:mx-4"
          >
            <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-[#f0ede6] pb-2 md:pb-4">
              {stat.value}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-serif text-[#f1f0ec]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStats;
