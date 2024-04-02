import { QuizCard } from "./_components/_index";

export default function QuizPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="flex justify-center items-center h-screen">
      <QuizCard id={id} />
    </main>
  );
}
