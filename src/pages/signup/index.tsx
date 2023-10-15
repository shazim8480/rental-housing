import Image from "next/image";
import React from "react";

import SignUpForm from "@/components/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="flex flex-col  lg:flex-row md:flex-row min-h-screen justify-evenly md:items-center">
        {/* sign-up form */}
        <SignUpForm />

        <div className="hidden lg:flex lg:flex-col lg:w-full">
          <Image
            src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            width={500}
            height={900}
            // layout="responsive"
            alt="auth"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
