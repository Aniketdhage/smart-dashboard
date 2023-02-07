import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Button, SparkLine } from "./../components";
import { earningData, SparklineAreaData } from "./../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg-flex-nowrap justify-center ">
        <div className="  bg-white banner h-44 rounded-xl  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center dark:text-gray-200 dark:bg-secondary-dark-bg">
          <div className=" w-[77%] flex justify-between items-center">
            <div>
              <p className="text-gray-400 font-bold">Earnings</p>
              <p className="text-2xl">$451256325</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size="md"
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-5 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-2xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm color-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm mt-1 text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex gap-10 flex-wrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between ">
            <p className="text-xl font-semibold">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-4 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-4 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-6 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold ">$54625</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 text-white ml-3 text-xs">
                    21%
                  </span>
                </p>
                <p className="mt-1 text-gray-400"> Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold ">$48625</span>
                </p>
                <p className="mt-1 text-gray-400">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-5">
                <Button
                  color={"white"}
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
