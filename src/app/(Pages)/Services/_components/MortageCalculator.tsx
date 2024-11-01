"use client";
import { useState, ChangeEvent, useEffect } from "react";
import MortgageCostsModal from "./MortageCostsModal";
import MortgageCalculatorTitle from "./MortageCalculatorTitle";

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(9800000);
  const [deposit, setDeposit] = useState(1960000);
  const [mortgagePeriod, setMortgagePeriod] = useState(20);
  const [interestRate, setInterestRate] = useState(5);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPurchaseCost, setTotalPurchaseCost] = useState(0);
  const [totalRequiredUpfront, setTotalRequiredUpfront] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handlePropertyPriceChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPropertyPrice(Number(e.target.value));
  const handleDepositChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDeposit(Number(e.target.value));
  const handleMortgagePeriodChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMortgagePeriod(Number(e.target.value));
  const handleInterestRateChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInterestRate(Number(e.target.value));

  // Function to update slider background based on value
  const updateSliderBackground = (
    slider: HTMLElement,
    min: number,
    max: number,
    value: number
  ) => {
    const percentage = ((value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #3d6a64 ${percentage}%, #faf8f7 ${percentage}%)`;
  };

  // useEffect to set initial background for all sliders on first render
  useEffect(() => {
    const sliders = document.querySelectorAll(".range-slider");

    sliders.forEach((slider) => {
      const min = parseInt((slider as HTMLInputElement).min);
      const max = parseInt((slider as HTMLInputElement).max);
      const value = parseInt((slider as HTMLInputElement).value);
      updateSliderBackground(slider as HTMLElement, min, max, value);
    });
  }, []);

  // useEffect to calculate values when inputs change
  useEffect(() => {
    // Loan amount
    const loanAmount = propertyPrice - deposit;

    // Monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    // Total number of payments
    const numberOfPayments = mortgagePeriod * 12;

    // Monthly payment calculation using the formula
    const monthlyPaymentCalc =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPaymentCalc || 0);

    // Total purchase cost (for simplicity, assuming no extra costs)
    setTotalPurchaseCost(propertyPrice);

    // Total required upfront (deposit + any additional fees)
    setTotalRequiredUpfront(deposit); // Add extra fees if applicable
  }, [propertyPrice, deposit, mortgagePeriod, interestRate]);

  return (
    <>
    <MortgageCalculatorTitle />
    <div className="  text-[#faf8f7] p-6 my-10 rounded-2xl  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl shadow-2xl p-10 shadow-black">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Property Price */}
          <div className="space-y-4">
            <label className="text-xl font-semibold">Property Price</label>
            <div>
              <div className="flex items-center justify-between">
                <input
                  className="w-1/2 bg-[#041d1a] text-[#faf8f7] px-4 py-2 rounded-md"
                  type="text"
                  name="property"
                  value={propertyPrice.toLocaleString()}
                  onChange={handlePropertyPriceChange}
                />
                <p>AED</p>
              </div>
              <input
                type="range"
                min="200000"
                max="50000000"
                step="50000"
                value={propertyPrice}
                className="w-full mt-2 cursor-pointer range-slider"
                onChange={(e) => {
                  handlePropertyPriceChange(e);
                  // Update the background gradient dynamically
                  updateSliderBackground(
                    e.target,
                    200000,
                    50000000,
                    Number(e.target.value)
                  );
                }}
              />

              <div className="flex justify-between text-sm">
                <p>200,000</p>
                <p>50,000,000</p>
              </div>
            </div>
          </div>

          {/* Deposit */}
          <div className="space-y-4">
            <label className="text-xl font-semibold">Deposit</label>
            <div>
              <div className="flex items-center justify-between">
                <input
                  className="w-1/2 bg-[#041d1a] text-[#faf8f7] px-4 py-2 rounded-md"
                  type="text"
                  name="deposit"
                  value={deposit.toLocaleString()}
                  onChange={handleDepositChange}
                />
                <p>AED</p>
              </div>
              <input
                type="range"
                min={1960000}
                max={7840000}
                step="5000"
                value={deposit}
                className="w-full mt-2 cursor-pointer range-slider"
                onChange={(e) => {
                  handleDepositChange(e);
                  // Update the background gradient dynamically
                  updateSliderBackground(
                    e.target,
                    1960000,
                    7840000,
                    Number(e.target.value)
                  );
                }}
              />
              <div className="flex justify-between text-sm">
                <p>1,960,000</p>
                <p>7,840,000</p>
              </div>
            </div>
          </div>

          {/* Mortgage Period */}
          <div className="space-y-4">
            <label className="text-xl font-semibold">Mortgage Period</label>
            <div>
              <div className="flex items-center justify-between">
                <input
                  className="w-1/4 bg-[#041d1a] text-[#faf8f7] px-4 py-2 rounded-md"
                  type="text"
                  name="mortgage_period"
                  value={mortgagePeriod}
                  onChange={handleMortgagePeriodChange}
                />
                <p>Years</p>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={mortgagePeriod}
                className="w-full mt-2 cursor-pointer range-slider"
                onChange={(e) => {
                  handleMortgagePeriodChange(e);
                  // Update the background gradient dynamically
                  updateSliderBackground(
                    e.target,
                    1,
                    25,
                    Number(e.target.value)
                  );
                }}
              />
              <div className="flex justify-between text-sm">
                <p>1</p>
                <p>25</p>
              </div>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-4">
            <label className="text-xl font-semibold">Interest Rate</label>
            <div>
              <div className="flex items-center justify-between">
                <input
                  className="w-1/4 bg-[#041d1a] text-[#faf8f7] px-4 py-2 rounded-md"
                  type="text"
                  name="interest_rate"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
                <p>%</p>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.01"
                value={interestRate}
                className="w-full mt-2 cursor-pointer range-slider"
                onChange={(e) => {
                  handleInterestRateChange(e);
                  // Update the background gradient dynamically
                  updateSliderBackground(
                    e.target,
                    1,
                    10,
                    Number(e.target.value)
                  );
                }}
              />
              <div className="flex justify-between text-sm">
                <p>1%</p>
                <p>10%</p>
              </div>
            </div>
          </div>

          <style jsx>{`
            .range-slider {
              -webkit-appearance: none;
              appearance: none;
              width: 100%;
              height: 8px;
              border-radius: 5px;
              outline: none;
              cursor: pointer;
            }

            .range-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              background-color: #3d6a64;
              border-radius: 50%;
              border: 2px solid #faf8f7;
            }

            .range-slider::-moz-range-thumb {
              width: 20px;
              height: 20px;
              background-color: #3d6a64;
              border-radius: 50%;
              border: 2px solid #faf8f7;
            }
          `}</style>
        </div>

        {/* Right Section */}
        <div className="bg-[#041d1a] p-6 rounded-lg shadow-lg">
          <div className="text-2xl font-semibold">Monthly Payment:</div>
          <h3 className="text-4xl my-4">AED {monthlyPayment.toFixed(2)}</h3>
          <div className="space-y-10">
            <button
              className="w-3/4 bg-[#698f8c] text-[#faf8f7] py-2 rounded-lg shadow-lg hover:bg-[#a0b3b1]"
              onClick={toggleModal}
            >
              View Mortgage Costs and Fees
            </button>

            <div className="border-t border-gray-700"></div>
            <div className="flex justify-between flex-col gap-4 ">
              <div>
                <p className="text-lg font-bold ">Total Purchase Costs</p>
                <p className="text-lg">
                  {" "}
                  {totalPurchaseCost.toLocaleString()} AED
                </p>
              </div>
              <div>
                <p className="text-lf font-bold">Total Required Upfront</p>
                <p className="text-lg">
                  {" "}
                  {totalRequiredUpfront.toLocaleString()} AED
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700"></div>
          </div>
          <div className="space-y-4 ">
            <h3 className="text-xl font-semibold">
              Ready to take the next step?
            </h3>
            <p>
              Our team of experts can help you find the best mortgage rate for
              your purchase journey.
            </p>
            <button className="w-full bg-[#698f8c] text-[#faf8f7] py-3 rounded-lg shadow-lg hover:bg-[#a0b3b1]">
              Get pre-approved
            </button>
          </div>
        </div>
      </div>
    </div>
    <MortgageCostsModal isOpen={isModalOpen} onClose={toggleModal} />
      </>
  );
}
