"user client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./agentSlider.css";
function AgentSlider() {

  const agentsData = [
    {
      image: "https://i.imgur.com/MNCx91k.png",
      name: "maryam island",
      description:
        "Maryam Island is one of the most important investment projects of Egal Hills.\nEagle Hills is a private real estate investment and development company based in Abu Dhabi, United Arab Emirates. It owns projects in 11 cities across the UAE. Offering waterfront homes and apartments, joya hotels and mixed-use developments in Sharjah and Fujairah",
    },
    {
      image: "https://i.imgur.com/nocvyoR.png",
      name: "mag property development",
      description:
        "is a real estate development company. They focus on helping investors make money and making customers happy for a long time. They work on different kinds of projects, like affordable homes, tall joya buildings, and spaces for businesses. They're a big name in real estate and have projects worth over $1 billion.",
    },
    {
      image: "https://i.imgur.com/5ehWJJH.png",
      name: "meras",
      description:
        "A Dubai-based holding company, established in 2007, Meraas is one of the major developers in the city. They aim to promote an active, urban and healthy lifestyle in their developments, while maintaining contemporary and modern styled infrastructure.",
    },
    {
      image: "https://i.imgur.com/478spob.png",
      name: "sobha realty",
      description:
        "Sobha primarily develops joya residential properties, including villas, townhouses, and apartments. The company also has a strong presence in the commercial real estate sector, with a focus on office and retail spaces.",
    },
    {
      image: "https://i.imgur.com/TmcjRAJ.png",
      name: "alef group",
      description:
        "Alef Group is a real estate property developer based in Sharjah, United Arab Emirates. It was founded in 2013 by the late Sheikh Khalid Bin Sultan Al Qasimi. The group is known for creating high quality residential communities, as well as business and leisure projects that support the tourist and retail sectors within the emirate",
    },
    {
      image: "https://i.imgur.com/T5hDhjU.png",
      name: "arada",
      description:
        "Established in 2017, Arada Developments LLC has emerged as the largest real estate developer in the emirate of Sharjah, United Arab Emirates. A collaborative effort between Basma Group and KBW Investments, the company focuses on the development of residential, commercial, and mixed-use projects within the UAE, with a primary emphasis on Sharjah.",
    },
    {
      image: "https://i.imgur.com/xEHpGLO.png",
      name: "leos",
      description:
        "LEOS Developments is an international real estate developer headquartered in Weybridge, Surrey, UK, with additional offices in London and a state-of-the-art experience center in Dubai. Their focus lies in delivering excellence through design in the residential real estate space.",
    },
    {
      image: "https://i.imgur.com/qd8weQ7.png",
      name: "dubai holding",
      description:
        "Dubai Holding is Dubai ruler Sheikh Mohammed bin Rashid al-Maktoum's global investment holding company and personal investment portfolio, which owns 99.67% of the capital\nDubai Holding has over Dhs. 130 billion in assets in 13 countries and around 20,000 employees worldwide. In 2021, leaks from the Pandora Papers revealed that Dubai Holding owned three companies through a secretive offshore system.",
    },
    {
      image: "https://i.imgur.com/ZpoFCxV.png",
      name: "azizi developments",
      description:
        "The company is renowned for developing the UAE’s second tallest skyscraper, has a strong track record and sizeable project pipeline through its extensive land bank and strategic partnerships with Dubai’s key master developers, and is instrumental in developing world-class properties in MBR City, Palm Jumeirah, Sheikh Zayed Road, Dubai Healthcare City, Dubai South, Al Furjan, Studio City, Sports City and Downtown Jebel Ali.",
    },
    {
      image: "https://i.imgur.com/f3pals3.png",
      name: "binghatti",
      description:
        "a major Emirati property development company, based in Dubai. It is one of the largest property development companies in the United Arab Emirates. The company is renowned for being the UAE’s leading residential developer of a joya mid-market segments and high-end homes.",
    },
    {
      image: "https://i.imgur.com/M9wkuwh.png",
      name: "damac",
      description:
        "a premier joya property developer in Dubai, has been shaping the Middle East’s real estate market since 1982. They deliver iconic residential, commercial, and leisure properties for sale across the region and beyond",
    },
    {
      image: "https://i.imgur.com/khIsqmC.png",
      name: "emaar",
      description:
        "Founded in 1997, Emaar Properties is a UAE-based company specializing in real estate development. It is headed by Mohamed Alabbar, who is considered one of the key figures in the region’s real estate boom. Emaar is widely credited with helping transform Dubai into a global destination for tourism, commerce and real estate investment.",
    },
    {
      image: "https://i.imgur.com/DVvUlES.png",
      name: "samana developers",
      description:
        "SAMANA Developers form an integral part of the business conglomerate, the SAMANA Group of Companies, headquartered in Dubai. As an award-winning developer, we focus on properties up to the expectations of our clients and providing them with joya properties and an incredible properties experience.",
    },
    {
      image: "https://i.imgur.com/YR9yKH2.png",
      name: "meraki developers",
      description:
        "Meraki have successfully completed over 110 projects, including residential and commercial high-rise buildings, industrial projects, and an extensive range of villas for reputed clients. Their projects are known for their state-of-the-art design,sustainability, and attention to detail, and they are always pushing the boundaries of joya",
    },
    {
      image: "https://i.imgur.com/v22vzTo.png",
      name: "aqua",
      description:
        "Aqua Properties has been in the market for 17 years. Initially, the company he company has built 6 buildings and sold more than 6,000 units. AQUA Properties builds co-properties projects with a well developed infrastructure.",
    },
    {
      image: "https://i.imgur.com/0aqtwf9.png",
      name: "nakheel",
      description:
        "Year established: 2003 Nakheel is one of the world’s leading property developers, based in Dubai. The government owned real estate developers have several projects spread across the city, servicing fields within the residential, retail, hospitality and leisure sectors.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={` py-16 mt-10 agent-slider`}>
      <div className="text-center">
        <p
          className={`text-[#f0ede6] font-header mb-3 text-lg md:text-xl lg:text-2xl `}
        >
          STRONG NETWORK IN DUBAI & UAE
        </p>
        <h1 className={`text-3xl md:text-5xl text-[#f1f0ec] font-header mb-8}`}>
          OUR AGENTS
        </h1>
        <p
          className={`font-body mx-4 md:mx-16 lg:mx-44 md:text-lg lg:text-xl text-[#f4f3ef]`}
        >
          Valorem has established strong alliances with leading developers and
          brands in Dubai and the United Arab Emirates, enabling us to offer our
          clients the finest options available in the market.
        </p>
        <div className="mx-10 md:mx-14 mt-3 py-8 gap-x-2 slick-initialized" dir="ltr">
          <Slider {...settings}>
            {agentsData.map((agent, index) => (
              <div key={index} className="slick-slide">
                <div
                  className="flex flex-col justify-center items-center bg-[#111612] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="bg-[#f0ede6] w-fit mx-auto rounded-2xl">
                    <img
                      src={agent.image}
                      alt={`Agent Logo ${index + 1}`}
                      className="mx-auto w-72 h-40 object-contain rounded-xl border-2 border-[#698f8c]"
                    />
                  </div>
                  <p
                    className={`text-base md:text-lg text-[#f1f0ec] font-header font-semibold uppercase mt-3 `}
                  >
                    {agent.name}
                  </p>
                  <p
                    className={`text-sm text-[#f0ede6] font-body text-center px-4 `}
                  >
                    {agent.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AgentSlider;
