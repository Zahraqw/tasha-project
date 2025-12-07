import { Card, CardContent, Input, Button } from "@/components/ui";
import { FiUser, FiMail } from "react-icons/fi";
import { LOGIN_TEXT } from "@/constants/texts";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-lg p-10 shadow-2xl rounded-3xl bg-white z-10">
      <CardContent className="space-y-7">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#2c4e9d]">
            {LOGIN_TEXT.title}
          </h2>
          <p className="text-gray-500 mt-2">{LOGIN_TEXT.subtitle}</p>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-gray-500" />
            <Input
              type="text"
              placeholder="Enter your name"
              className="pl-10 py-5 border-[#349FBD] focus-visible:ring-[#349FBD]"
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-500" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 py-5 border-[#349FBD] focus-visible:ring-[#349FBD]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 text-[#349FBD]" />
            <span className="text-gray-500 ">{LOGIN_TEXT.remember}</span>
          </label>
          <button className="text-[#2c4e9d] hover:underline font-semibold">
            {LOGIN_TEXT.forgotPassword}
          </button>
        </div>

        <Button className="w-full text-md bg-[#2c4e9d] hover:bg-[#1d3470] text-white py-6 rounded-md">
          {LOGIN_TEXT.loginButton}
        </Button>

        <p className="text-gray-600">
          {LOGIN_TEXT.noAccount}{" "}
          <Link
            to="/signup"
            className="text-[#2c4e9d] font-semibold hover:underline cursor-pointer"
          >
            {LOGIN_TEXT.signup}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
