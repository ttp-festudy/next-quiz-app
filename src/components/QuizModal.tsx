import { cs } from "@/data/_index";

export default function QuizModal() {
  return (
    <div className="w-[800px] h-[400px] bg-[#6d6d6d] p-[20px] rounded-[20px] flex flex-col gap-[20px]">
      <div className="bg-[#4f4f4f] p-[20px] rounded-[10px]">
        <span className="font-[800]">{cs[0].title}</span>
      </div>
      <div className="bg-[#4f4f4f] p-[20px] rounded-[10px] flex-1">
        <p>{cs[0].content}</p>
      </div>
    </div>
  );
}
