"use client"
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Loader2, Lock, Mail, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsLoading(true);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">
            Full Name
          </Label>
          <div className="relative mt-2">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded border-white/10 bg-white/5 pl-12 pr-4 text-[15px] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.07] focus:border-[#0cfe00]/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#0cfe00]/10"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-white">
            Email address
          </Label>
          <div className="relative mt-2">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded border-white/10 bg-white/5 pl-12 pr-4 text-[15px] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.07] focus:border-[#0cfe00]/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#0cfe00]/10"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <div className="relative mt-2">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded border-white/10 bg-white/5 pl-12 pr-4 text-[15px] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.07] focus:border-[#0cfe00]/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#0cfe00]/10"
              placeholder="Create a secure password"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="confirm-password" className="text-white">
            Confirm Password
          </Label>
          <div className="relative mt-2">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-12 rounded border-white/10 bg-white/5 pl-12 pr-4 text-[15px] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.07] focus:border-[#0cfe00]/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#0cfe00]/10"
              placeholder="Re-enter your password"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 bg-[#1a202e] text-[#0cfe00] focus:ring-[#0cfe00]"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
          I agree to Strikers FC&apos;s{" "}
          <a href="#" className="text-[#0cfe00] hover:text-[#0cfe00]/80">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#0cfe00] hover:text-[#0cfe00]/80">
            Privacy Policy
          </a>
        </label>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#0cfe00] text-black hover:bg-[#0cfe00]/90 font-medium h-12 rounded cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating your account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-[#0a0e1a] px-4 text-gray-400">
            Or sign up with
          </span>
        </div>
      </div>

      <div>
        <Button
          type="button"
          variant="outline"
          className="w-full border-white/10 bg-[#1a202e] text-white hover:bg-[#1a202e]/80 h-12 rounded cursor-pointer hover:text-white"
        >
          <FaGoogle className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>
      </div>
    </form>
  );
}
