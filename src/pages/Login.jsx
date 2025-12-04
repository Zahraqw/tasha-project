import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F66826,#FB9745,#349FBD,#1EC8F6)] opacity-70" />
      <LoginForm />
    </div>
  );
}
