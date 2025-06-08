import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Create Your Account</h1>
      <SignUpForm />
    </main>
  );
}
