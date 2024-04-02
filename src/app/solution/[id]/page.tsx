import Link from "next/link";
import { SolutionCard } from "./_components/_index";

export default function SolutionPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[800px] flex flex-col gap-[20px]">
        <SolutionCard id={id} />
        <div className="flex w-full justify-start">
          <Link
            href={`/quiz/${id}`}
            className="border px-[16px] py-[4px] rounded-[8px] hover:bg-[#454545]"
          >
            돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
