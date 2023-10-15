import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="flex flex-col  lg:flex-row md:flex-row min-h-screen justify-evenly md:items-center">
        <div className="hidden lg:flex lg:flex-col lg:w-full">
          <Image
            src="https://plus.unsplash.com/premium_photo-1671089657650-a7d75104224f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
            width={500}
            height={900}
            // layout="responsive"
            alt="auth"
          />
        </div>

        {/* login form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
