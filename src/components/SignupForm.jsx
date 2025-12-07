import { Card, CardContent, Input, Button } from "@/components/ui";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { SIGHN_UP_TEXT } from "@/constants/texts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/validation/signupSchema";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <Card className="w-full max-w-lg p-4 shadow-2xl rounded-3xl bg-white z-10">
      <CardContent className="space-y-7">
        <div className="text-center my-4">
          <h2 className="text-3xl font-semibold text-[#2c4e9d]">
            {SIGHN_UP_TEXT.title}
          </h2>
          <p className="text-gray-500 mt-2">{SIGHN_UP_TEXT.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-500" />
            <Input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName")}
              className="pl-10 py-5 border-[#349FBD]"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-500" />
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="pl-10 py-5 border-[#349FBD]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-500" />
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="pl-10 py-5 border-[#349FBD]"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-500" />
            <Input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
              className="pl-10 py-5 border-[#349FBD]"
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button className="w-full text-md bg-[#2c4e9d] hover:bg-[#1d3470] text-white py-6 rounded-md">
            {SIGHN_UP_TEXT.signupButton}
          </Button>
        </form>

        <p className="text-gray-600">
          {SIGHN_UP_TEXT.haveAccount}
          <Link to="/" className="text-[#2c4e9d] font-semibold hover:underline">
            {SIGHN_UP_TEXT.logIn}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
