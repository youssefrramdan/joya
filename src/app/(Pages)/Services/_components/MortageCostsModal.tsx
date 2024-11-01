"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const MortgageCostsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <div className="modal-dialog modal-popup-form mortgage-calc-modal rounded-lg shadow-lg w-[550px] bg-[#404740] text-[#faf8f7] px-4">
            <div className="modal-content">
              <div className="modal-body p-6">
                <div className="popup-form-wrapper">
                  <div className="close-modal  mb-4 flex justify-end items-center">
                    <i
                      className="fas fa-times  cursor-pointer"
                      onClick={onClose}
                    />
                  </div>
                  <div className="cost-and-fees space-y-4">
                    <h4 className="text-2xl font-extrabold">
                      Mortgage Costs and Fees
                    </h4>
                    <div className="cost-and-fees-wrapper space-y-3">
                      {costs.map(({ title, description, result }) => (
                        <div
                          key={title}
                          className="cost-fee-item flex justify-between"
                        >
                          <p className="cost_fees-text flex items-center gap-2">
                            {title}

                            <TooltipProvider delayDuration={300}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <i className="fa-solid fa-info-circle"></i>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-800 text-white max-w-[300px] px-2 py-1">
                                  <p>{description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                         
                          </p>
                          <p className="cost_fees-result font-semibold">
                            {result} AED
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="total-cost-sections space-y-2 mt-4">
                      <div className="total-cost-item flex justify-between">
                        <p className="cost_fees-text total-cost font-bold">
                          TOTAL PURCHASE COSTS
                        </p>
                        <p className="cost_fees-result total-cost font-semibold">
                          2,103,870 AED
                        </p>
                      </div>
                      <div className="total-cost-item flex justify-between">
                        <p className="cost_fees-text total-cost  font-bold flex gap-2">
                          TOTAL REQUIRED UPFRONT
                          <TooltipProvider delayDuration={300}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <i className="fa-solid fa-info-circle"></i>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-800 text-white max-w-[300px] px-2 py-1">
                                <span>Deposit + total purchase costs</span>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                          {/* <p className="icon-text-folder-mortgage text-[#f0ede6]">
                            <i className="icon icon-information" />
                            <span className="tookit-text text-sm">
                              Deposit + total purchase costs
                            </span>
                          </p> */}
                        </p>
                        <p className="cost_fees-result total-cost font-semibold">
                          7,983,870 AED
                        </p>
                      </div>
                    </div>
                    <p className="disclaimer-text text-xs text-[#f0ede6]">
                      *This calculator is for illustration purposes only and
                      should be used as a guide; the rates shown are subject to
                      change. A full breakdown of charges will be given at the
                      time of your mortgage offer.
                    </p>
                    <p className="more-disclaimer text-xs text-[#f0ede6]">
                      **These charges and fees are based on industry averages
                      and should be confirmed with your Real Estate agents for
                      exact figures; haus & haus Real Estate Broker accepts no
                      liability for indicative illustrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* <div
        role="dialog"
        aria-modal="true"
        className="fixed bottom-0 left-0 right-0 h-screen py-48 flex items-center justify-center z-[60]  bg-[#404740] bg-opacity-65 "
        style={{ paddingLeft: "0px" }}
      >
        
      </div> */}
    </>
  );
};

// Sample data
const costs = [
  {
    title: "Land Department Fee",
    description: "4% of purchase price + 580",
    result: "1,176,580",
  },
  {
    title: "Trustee Office Fee incl. 5% VAT",
    description:
      "If the purchase price is below 500k, the registration fee is 2k + 5% VAT. For 500k and above, the fee is 4k + 5% VAT.",
    result: "4,200",
  },
  {
    title: "Mortgage Registration",
    description: "0.25% of loan + AED 290",
    result: "59,090",
  },
  {
    title: "Real Estate Agency Fee incl. 5% VAT",
    description: "2% of purchase price + 5% VAT",
    result: "617,400",
  },
  {
    title: "Bank Arrangement Fee",
    description: "Up to 1% of loan amount to be agreed directly with lender",
    result: "235,200",
  },
  {
    title: "Valuation",
    description: "Depending on bank, please discuss with your lender",
    result: "3,000",
  },
  {
    title: "Conveyancing Fee incl. 5% VAT",
    description: "Sales progression",
    result: "8,400",
  },
];

export default MortgageCostsModal;
