import SignupForm from "../components/SignupForm";
import Navigation from "../components/Navigation";

export default function Signup() {
  return (
    <main className="bg-[#0b0a0a] min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center mt-[-1px]">
        <SignupForm />
      </div>
    </main>
  );
}
