"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.push("/dashboard");
      } else {
        setIsCheckingAuth(false);
      }
    };
    checkAuth();
  }, [supabase.auth, router]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="animate-pulse text-xl text-[#7A7A7A]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden">
      {/* Background decorative blobs - hidden on mobile, visible on larger screens */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-[#FFAEBC] opacity-15 rounded-blob animate-blob-wobble" />
        <div className="absolute top-40 -left-10 w-36 md:w-48 h-36 md:h-48 bg-[#B4F8C8] opacity-15 rounded-blob animate-blob-wobble animation-delay-2000" />
        <div className="absolute bottom-40 right-10 w-24 md:w-32 h-24 md:h-32 bg-[#E0BBE4] opacity-15 rounded-blob animate-blob-wobble animation-delay-1000" />
        <div className="absolute bottom-20 left-20 w-32 md:w-40 h-32 md:h-40 bg-[#FBE7C6] opacity-15 rounded-blob animate-blob-wobble animation-delay-3000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Login/SignUp Card - solid white on mobile, slightly transparent on larger screens */}
        <div className="bg-white sm:bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-6 sm:p-8">
          {isLogin ? (
            <Login onSwitchToSignUp={() => setIsLogin(false)} />
          ) : (
            <SignUp onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>

      {/* Floating Mascot - only on large screens */}
      <div className="absolute bottom-0 right-10 z-0 pointer-events-none hidden xl:block">
        <div className="relative animate-float-slow">
          <div className="w-64 h-64 relative">
            <Image
              src="/mascot-happy.svg"
              alt="Rambl Mascot"
              fill
              className="object-contain opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
