import { GoDotFill } from "react-icons/go";

interface TableDataProps {
  sn: string;
  name: string;
  transactionReference: string;
  type: string;
  amount: string;
  date: string;
  status: string;
}

interface TableComponentProps {
  tableData: TableDataProps[];
  tableHeader: string[];
}

const TableComponent = ({ tableData, tableHeader }: TableComponentProps) => {
  return (
    <div className="overflow-x-auto">
      <table
        className="items-center bg-transparent w-full border-separate"
        style={{ borderSpacing: "0 8px" }}
      >
        <thead>
          <tr>
            {tableHeader.map((item, index) => (
              <th
                className={`px-6 bg-[#848484] text-[#FFFFFF] align-middle border border-solid border-blueGray-100 py-5 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                  index === item.length && "rounded-tr-lg rounded-br-lg"
                } ${index === 0 && "rounded-tl-lg rounded-bl-lg"}`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((item) => (
            <tr className="bg-white shadow-[0px_5px_9px_-5px_#0000000D]">
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-left text-[#505050] rounded-tl-lg rounded-bl-lg">
                {item.sn}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-left text-[#505050]">
                {item.name}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-left text-[#505050]">
                {item.transactionReference}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-left text-[#505050]">
                {item.type}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-left text-[#505050]">
                {item.amount}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-left text-[#505050]">
                {item.date}
              </td>
              <td className="border-t-0 px-6 align-end border-l-0 border-r-0 text-sm whitespace-nowrap py-6 text-[#505050]rounded-tl-lg rounded-br-lg">
                <div className="flex gap-x-5">
                  <div
                    className={`flex items-center ${
                      item.status === "Successful"
                        ? "bg-[#31D067]"
                        : item.status === "Failed"
                        ? "bg-[#EA523D]"
                        : "bg-[#FFA349]"
                    } rounded-3xl py-[6px] px-2`}
                  >
                    <GoDotFill color="#FFFFFF" />
                    <p className="text-[10px] text-white">{item?.status}</p>
                  </div>
                  <p className="bg-[#EC681C] flex justify-center items-center rounded-md px-4 py-1 text-white font-bold text-sm">
                    View
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
