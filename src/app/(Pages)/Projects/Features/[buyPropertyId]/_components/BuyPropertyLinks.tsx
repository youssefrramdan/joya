import React from "react";

function BuyPropertyLinks() {
  return (
    <div className="links -ml-[37px] fade-right transition-all duration-700 ease-in-out transform translate-x-10 inview:opacity-100 inview:translate-x-0 w-full  py-4 border-t border-b border-[#041d1a] mb-10">
      <ul className="flex flex-wrap items-center justify-center lg:justify-between flex-col lg:flex-row">
        <li className="w-1/3 text-center text-xs uppercase font-medium text-[#faf8f7] lg:border-r border-[#041d1a] py-2">
          <a
            href="#"
            data-toggle="modal"
            data-target="#download"
            className="hover:text-[#f0ede6] transition"
          >
            Request brochure
          </a>
        </li>
        <li className="w-1/3 text-center text-xs uppercase font-medium text-[#faf8f7] lg:border-r border-[#041d1a] py-2">
          <a
            href="#"
            data-toggle="modal"
            data-target="#socialShare"
            className="hover:text-[#f0ede6] transition"
          >
            Share to friend
          </a>
        </li>
        <li className="w-1/3 text-center text-xs uppercase font-medium text-[#faf8f7] py-2">
          <a
            href="https://www.luxuryliving.ae/en/contact/"
            className="hover:text-[#f0ede6] transition"
          >
            Make an enquiry
          </a>
        </li>
      </ul>

      {/* Hidden form for brochure download */}
      <div className="hidden">
        <input
          type="submit"
          name="ctl00$ContentPlaceHolder1$btnDownloadBrochure"
          value="Download"
          id="ctl00_ContentPlaceHolder1_btnDownloadBrochure"
          className="downloadBrochure"
        />
      </div>
    </div>
  );
}

export default BuyPropertyLinks;
