import { ReactNode, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { LiaSearchSolid } from "react-icons/lia";
import Dropdown from "../dropdown/Dropdown";

interface TabDataProps {
  id?: number;
  content?: ReactNode;
  name: string;
}

interface TableTabProps {
  tabData?: TabDataProps[];
}
const TableTab = ({ tabData }: TableTabProps) => {
  const [tab, setTab] = useState("All");

  const onTabChange = (value: string) => {
    setTab(value);
  };

  const tabs = ["All", "Withdrawals", "Deposits", "Payments"];

  const rowList = [
    {
      id: 1,
      label: "10",
      value: "10",
    },
    {
      id: 2,
      label: "20",
      value: "20",
    },
    {
      id: 3,
      label: "30",
      value: "30",
    },
  ];

  return (
    <div className="">
      <Tabs value={tab} onValueChange={onTabChange} className="w-full">
        <div className="bg-white rounded-t-md py-2">
          <TabsList className="bg-white" defaultValue={"All"}>
            {tabs.map((item) => (
              <div>
                <TabsTrigger
                  value={item}
                  className={`!shadow-none py-[10px] md:px-6`}
                >
                  <p
                    className={`${
                      tab === item && "!text-[#FF6600]"
                    } text-[#505050] text-xs sm:text-sm font-bold`}
                  >
                    {item}
                  </p>
                </TabsTrigger>
                {tab === item && <Separator className="bg-[#FF6600] h-[2px]" />}
              </div>
            ))}
          </TabsList>
          <Separator className="bg-[#E1E1E1]" />
          <div className="bg-white px-6 py-4 flex flex-col gap-y-2 md:flex-row justify-between">
            <div className="relative">
              <LiaSearchSolid
                className="absolute top-[13px] left-3"
                color="#A8A8A8"
              />
              <Input
                type="text"
                placeholder="Search"
                className="pl-8 bg-[#F7F6F4] border border-[#DEDEDE] outline-0 focus:outline-0 rounded-[10px] placeholder:text-[#A8A8A8] ring-0"
              />
            </div>
            <div className="flex gap-x-2 items-center ">
              <p className="text-[#A8A8A8] text-xs">Display</p>
              <Dropdown
                dropdownList={rowList}
                triggerClass="bg-[#F7F6F4] h-8"
              />
              <p className="text-[#A8A8A8] text-xs">Rows</p>
            </div>
          </div>
        </div>
        {tabData?.map((item) => (
          <TabsContent key={item.id} value={item.name}>
            {item.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TableTab;
