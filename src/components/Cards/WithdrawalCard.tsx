import { cn } from "../../utils";

interface WithdrawalCardProps {
  title: string;
  amount: string;
  className: string;
  helper: string;
}

const WithdrawalCard = ({
  title,
  amount,
  helper,
  className,
}: WithdrawalCardProps) => {
  return (
    <div className={cn("", className)}>
      <h3 className="mb-4 font-bold text-xs text-[#505050]">{title}</h3>
      <p className="mb-2 font-bold text-base text-[#FF6600]">{amount}</p>
      <p className="text-xs text-[#505050]">{helper}</p>
    </div>
  );
};

export default WithdrawalCard;
