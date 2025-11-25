import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <main className="flex justify-center items-center px-4 py-8">
      <article className="w-full max-w-2xl flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
