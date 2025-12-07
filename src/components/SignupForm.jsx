import { Card, CardContent, Input, Button } from "@/components/ui";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { SIGHN_UP_TEXT } from "@/constants/texts";

export default function SignupForm() {
  return (
    <Card className="w-full max-w-lg p-4 shadow-2xl rounded-3xl bg-white z-10">
      <CardContent className="space-y-7">
        <div className="text-center my-4">
          <h2 className="text-3xl font-semibold text-[#2c4e9d]">
            {SIGHN_UP_TEXT.title}
          </h2>
          <p className="text-gray-500 mt-2">{SIGHN_UP_TEXT.subtitle}</p>
        </div>

        <div className="space-y-7">
          <div>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="text"
                placeholder="Enter your full name"
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
          <div>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="password"
                placeholder="Enter your password"
                className="pl-10 py-5 border-[#349FBD] focus-visible:ring-[#349FBD]"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-500" />
              <Input
                type="password"
                placeholder="Confirm password"
                className="pl-10 py-5 border-[#349FBD] focus-visible:ring-[#349FBD]"
              />
            </div>
          </div>
          <Button className="w-full text-md bg-[#2c4e9d] hover:bg-[#1d3470] text-white py-6 rounded-md">
            {SIGHN_UP_TEXT.signupButton}
          </Button>
        </div>
        <p className="text-gray-600">
          {SIGHN_UP_TEXT.haveAccount}
          <Link
            to="/"
            className="text-[#2c4e9d] font-semibold hover:underline cursor-pointer"
          >
            {SIGHN_UP_TEXT.logIn}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
