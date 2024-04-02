import Link from "next/link";
import { cs } from "@/data/_index";

export default function QuizCard({ id }: { id: number }) {
  return (
    <div className="w-[300px] h-[400px] bg-[#6d6d6d] p-[20px] rounded-[20px] flex justify-center items-center relative">
      <p className="font-[600] text-[20px]">{cs[id].title}</p>
      <Link
        href={`/solution/${id}`}
        className="absolute bottom-[20px] left-[20px] border px-[16px] py-[4px] rounded-[8px] hover:bg-[#454545]"
      >
        정답
      </Link>
    </div>
  );
}
