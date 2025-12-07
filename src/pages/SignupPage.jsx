import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F66826,#FB9745,#349FBD,#1EC8F6)] opacity-80"></div>
      <div className="absolute inset-0 backdrop-blur-[60px]"></div>
      <SignupForm />
    </div>
  );
}
