"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#f2f2f5] px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png" // ✅ Replace with the path to your logo
            alt="Swayamm Logo"
            width={60}
            height={60}
          />
          <h1 className="text-xl font-bold text-[#005eff] mt-2">SWAYAMM </h1>
          <h2 className="text-lg font-bold text-[#005eff] -mt-1">ACCOUNTING</h2>
        </div>

        <form
          // onSubmit={handleLogin}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 custom-input"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 custom-input"
              placeholder="Enter your password"
            />
          </div>
          <Link href="/dashboard" className="w-full">
            <button
              //   type="submit"
              className="w-full bg-[#005eff] text-white py-2 rounded-lg font-semibold hover:bg-[#0041c4] transition duration-300"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
