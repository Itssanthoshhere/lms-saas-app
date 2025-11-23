import CompanionForm from "@/components/CompanionForm";

const NewCompanion = () => {
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
