import React from "react";
import Navbar from "@/components/Navbar";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Home,
  FileText,
  BarChart3,
} from "lucide-react";
import SalesOverviewChart from "@/components/SalesOverviewChart";
import VerticalBarChart from "@/components/VerticalBarChart";
import { Users, MousePointerClick, CreditCard, Puzzle } from "lucide-react";

const stats = [
  {
    title: "Users",
    value: "36K",
    icon: <Users className="w-4 h-4 text-white" />,
    bg: "bg-gradient-to-br from-pink-500 to-fuchsia-500",
  },
  {
    title: "Clicks",
    value: "2M",
    icon: <MousePointerClick className="w-4 h-4 text-white" />,
    bg: "bg-gradient-to-br from-blue-500 to-sky-400",
  },
  {
    title: "Sales",
    value: "$435",
    icon: <CreditCard className="w-4 h-4 text-white" />,
    bg: "bg-gradient-to-br from-orange-400 to-yellow-400",
  },
  {
    title: "Items",
    value: "43",
    icon: <Puzzle className="w-4 h-4 text-white" />,
    bg: "bg-gradient-to-br from-rose-500 to-red-400",
  },
];
const page = ({ isCollapsed, activeItem, toggleMobileSidebar }) => {
  const pageTitles = {
    dashboard: "Dashboard",
    account: "Account Management",
    ledger: "Financial Ledger",
  };
  return (
    <div className="min-h-screen h-full  overflow-y-auto ">
      <div className="transition-all  duration-300 ease-in-out bg-[#EEEEF1]">
        {/* Nav bar with sidebar toggle for mobile */}
        <Navbar
          pageTitle={pageTitles[activeItem]}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        {/* Your page content here */}
        <div className="p-6">
          <div className="text-gray-700 rounded-xl mb-6 flex gap-2 justify-between flex-col md:flex-row">
            {/* <h2 className="text-lg font-medium mb-4">Welcome to {pageTitles[activeItem]}</h2>
                        <p className="text-gray-600">
                            This is the {activeItem} section of your application. You can customize this content
                            based on the active section. The sidebar and navbar will update accordingly.
                        </p> */}
            <div className="h-25 w-full md:w-70 rounded-xl bg-white shadow-lg text-left pl-6 py-6">
              <p className="font-semibold">Today's Money</p>
              <p className="font-bold  text-2xl">
                $53,000 <span className="text-green-500  text-xl">+55%</span>{" "}
              </p>
            </div>
            <div className="h-25 w-full md:w-70 rounded-xl bg-white shadow-lg text-left pl-6 py-6">
              <p className="font-semibold">Today's Users</p>
              <p className="font-bold  text-2xl">
                2,300 <span className="text-green-500  text-xl">+3%</span>{" "}
              </p>
            </div>
            <div className="h-25 w-full md:w-70 rounded-xl bg-white shadow-lg text-left pl-6 py-6">
              <p className="font-semibold">New Clients</p>
              <p className="font-bold  text-2xl">
                +3,462 <span className="text-red-500  text-xl">-2%</span>{" "}
              </p>
            </div>
            <div className="h-25 w-full md:w-70 rounded-xl bg-white shadow-lg text-left pl-6 py-6">
              <p className="font-semibold">Sales</p>
              <p className="font-bold  text-2xl">
                $103,430 <span className="text-green-500  text-xl">+55%</span>{" "}
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6">
            <div className="md:h-60 w-full bg-white shadow-lg rounded-xl md:col-span-5 flex flex-col md:flex-row">
              <div className=" flex flex-col justify-between h-full gap-5 p-5">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 font-semibold md:text-xl">
                    Build by developers
                  </p>
                  <p className="text-black font-bold text-2xl">
                    Soft UI Dashboard
                  </p>
                  <p className="md:text-xl text-gray-500 line-clamp-4">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                </div>
                <div className="text-gray-500  flex">
                  <p>Read More</p>
                  <ArrowRight className="transform transition duration-300 hover:translate-x-1" />
                </div>
              </div>
              <div className="shadow-lg rounded-xl h-[90%] md:m-auto md:mr-3 md:w-100 mx-4 md:mx-0 mb-4 bg-blue-500">
                <img
                  src={"/img/rocket.png"}
                  alt="rocket"
                  className="md:h-40 md:w-50 m-auto mt-8 m-2"
                ></img>
              </div>
            </div>
            <div className="h-60 rounded-xl shadow-lg w-full bg-white md:col-span-3 p-3">
              <div className="relative h-full rounded-xl  overflow-hidden">
                <div className='absolute inset-0 bg-[url("/img/cardbg.jpg")] bg-cover h-full rounded-xl shadow-lg w-full text-white brightness-50 flex flex-col p-3 justify-between'></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-5">
                  <p className="md:text-2xl font-bold">Work with the rockets</p>
                  <p className="md:text-xl">
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                  <div className="md:text-xl flex">
                    <p>Read More</p>
                    <ArrowRight className="transform transition duration-300 hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-7 gap-6 mt-6">
            <div className="md:col-span-3 h-full w-full bg-white shadow-lg rounded-xl">
              <div className="m-3">
                <VerticalBarChart></VerticalBarChart>
              </div>
              <div className="bg-white rounded-xl p-5">
                <h2 className="text-gray-700 font-semibold text-base">
                  Active Users
                </h2>
                <p className="text-gray-500 text-base mb-4">
                  (+23%) than last week
                </p>

                <div className="grid grid-cols-4 gap-4 ">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <div className="flex items-center gap-1 mb-1">
                        <div className={`p-1.5 rounded-md ${stat.bg}`}>
                          {stat.icon}
                        </div>
                        <p className="text-gray-500 text-xs">{stat.title}</p>
                      </div>
                      <p className="text-gray-800 font-bold text-xl">
                        {stat.value}
                      </p>
                      <div className="w-full h-2 mt-1 bg-gray-200 rounded-full">
                        <div className="bg-gray-800 h-full rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-white shadow-lg rounded-xl overflow-hidden">
              <SalesOverviewChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
