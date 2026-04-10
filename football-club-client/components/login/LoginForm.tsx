"use client"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Loader2, Lock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(email, password)
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-5">
        <div className="space-y-2.5">
          <Label htmlFor="email" className="text-sm text-slate-200">
            Email address
          </Label>
          <div className="group relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-[#0cfe00]" />
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded border-white/10 bg-white/5 pl-12 pr-4 text-[15px] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.07] focus:border-[#0cfe00]/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#0cfe00]/10"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="password" className="text-sm text-slate-200">
            Password
          </Label>
          <div className="group relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-[#0cfe00]" />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded border-white/10 bg-white/5 pl-12 pr-4 text-[15px] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.07] focus:border-[#0cfe00]/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#0cfe00]/10"
              placeholder="Enter your password"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-[#1a202e] text-[#0cfe00] focus:ring-[#0cfe00]"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-400"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-[#0cfe00] hover:text-[#0cfe00]/80"
          >
            Forgot password?
          </a>
        </div>
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
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-[#0a0e1a] px-4 text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div>
        <Button
          type="button"
          variant="outline"
          className="w-full border-white/10 bg-[#1a202e] text-white hover:bg-[#1a202e]/80 h-12 rounded cursor-pointer hover:text-white"
        >
          <FcGoogle className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
      </div>
    </form>
  );
}
