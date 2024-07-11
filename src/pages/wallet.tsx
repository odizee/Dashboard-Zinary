import TotalAmountsCard from "../components/Cards/TotalAmountsCard";
import TotalCard from "../components/Cards/TotalCard";
import WithdrawalCard from "../components/Cards/WithdrawalCard";
import { Chart } from "../components/charts";
import Dropdown from "../components/dropdown/Dropdown";
import TableComponent from "../components/table/TableComponent";
import TableTab from "../components/table/TableTab";
import { Separator } from "../components/ui/separator";

const Wallet = () => {
  const dateList = [
    {
      id: 1,
      label: "Today",
      value: "today",
    },
    {
      id: 2,
      label: "Yesterday",
      value: "yesterday",
    },
    {
      id: 3,
      label: "Tomorrow",
      value: "tomorrow",
    },
  ];

  const withdrawalList = [
    {
      id: 1,
      title: "Withdrawals",
      amount: "N3,402,300",
      helper: "722 Cases",
    },
    {
      id: 2,
      title: "Withdrawals",
      amount: "N3,402,300",
      helper: "722 Cases",
    },
    {
      id: 3,
      title: "Withdrawals",
      amount: "N3,402,300",
      helper: "722 Cases",
    },
    {
      id: 4,
      title: "Withdrawals",
      amount: "N3,402,300",
      helper: "722 Cases",
    },
  ];

  const tableHeader = [
    "S/N",
    "Name",
    "Transaction Reference",
    "Type",
    "Amount",
    "Date",
    "Status",
  ];

  const tableData = [
    {
      id: 1,
      sn: "0000001",
      name: "Tife Balogun",
      transactionReference: "tanya.hill@example.com",
      type: "Deposit",
      amount: "₦34,694.145",
      date: "Dec 4, 2019 21:42",
      status: "Successful",
    },
    {
      id: 2,
      sn: "0000001",
      name: "Tife Balogun",
      transactionReference: "tanya.hill@example.com",
      type: "Deposit",
      amount: "₦34,694.145",
      date: "Dec 4, 2019 21:42",
      status: "Failed",
    },
    {
      id: 3,
      sn: "0000001",
      name: "Tife Balogun",
      transactionReference: "tanya.hill@example.com",
      type: "Deposit",
      amount: "₦34,694.145",
      date: "Dec 4, 2019 21:42",
      status: "Pending",
    },
  ];

  const TotalAmountsList = [
    {
      id: 1,
      title: "Total Withdrawals",
      amount: "N3,402,300",
    },
    {
      id: 2,
      title: "Total Deposits",
      amount: "N3,402,300",
    },
    {
      id: 3,
      title: "Total Payments",
      amount: "N3,402,300",
    },
    {
      id: 4,
      title: "Total Commission",
      amount: "N3,402,300",
    },
    {
      id: 5,
      title: "Total Amount",
      amount: "N3,402,300",
    },
  ];

  return (
    <div className="w-full xl:w-[1100px] m-auto mt-8">
      <div className="mb-5 sm:flex justify-between items-center">
        <h2 className=" font-bold md:text-2xl text-left text-[#505050] sm:mb-0 mb-2">
          WalletOverview
        </h2>
        <div className="flex flex-row gap-x-2 items-center gap-y-1">
          <p className="text-[#7c7c7c] text-xs font-semibold">Duration</p>
          <Dropdown dropdownList={dateList} />
        </div>
      </div>
      <Separator className="h-[1px] bg-[#E1E1E1]" />
      <div className="mt-4 grid sm:grid-cols-9 gap-x-7 gap-y-3">
        <div className="p-4 bg-white rounded-md sm:col-span-5 md:col-span-3 shadow-[0px_4px_30px_0px_#0000000F]">
          <div className="grid grid-cols-2 gap-4">
            {withdrawalList.map((item) => (
              <WithdrawalCard
                title={item.title}
                amount={item.amount}
                helper={item.helper}
                className="bg-[#FFF7E5] px-4 py-6 rounded-md"
              />
            ))}
          </div>
          <div className="mt-4">
            <TotalCard
              title={"Total Amount"}
              amount={"N3,402,300"}
              className="bg-[#505050] px-4 py-6 rounded-md flex items-center justify-between text-white"
            />
          </div>
        </div>
        <div className="sm:col-span-4 md:col-span-2">
          <TotalAmountsCard
            itemsList={TotalAmountsList}
            className="bg-[#EC681C] rounded-md"
          />
        </div>
        <div className="sm:col-span-9 md:col-span-4 rounded-md bg-white p-4 py-6 shadow-[0px_4px_30px_0px_#0000000F]">
          <h2 className="mb-9 font-bold text-[#505050] text-xs">
            Real-Time Update
          </h2>
          <Chart />
        </div>
      </div>
      <div className="mt-6">
        <TableTab
          tabData={[
            {
              id: 1,
              content: (
                <div>
                  <TableComponent
                    tableData={tableData}
                    tableHeader={tableHeader}
                  />
                  <div className="w-full flex justify-center mt-6">
                    <button className="bg-[#EC681C] px-5 py-3 rounded-md text-white">
                      View All
                    </button>
                  </div>
                </div>
              ),
              name: "All",
            },
            {
              id: 2,
              content: <div className="h-10" />,
              name: "Withdrawals",
            },
            {
              id: 3,
              content: <div className="h-10" />,
              name: "Deposits",
            },
            {
              id: 4,
              content: <div className="h-10" />,
              name: "Payments",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Wallet;
