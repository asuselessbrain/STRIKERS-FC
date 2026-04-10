import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0e1a]">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0cfe00]/20 to-[#ffd700]/20 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1766756467595-fd3f1f62d562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBmYW5zJTIwYXRtb3NwaGVyZSUyMG5pZ2h0fGVufDF8fHx8MTc3NTQ3MTEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stadium atmosphere"
          width={1200}
          height={800}
          priority
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0cfe00] to-[#ffd700]">
              <span className="font-['Bebas_Neue'] text-3xl text-black">
                SF
              </span>
            </div>
            <div>
              <h1 className="font-['Bebas_Neue'] text-4xl tracking-wider text-white">
                STRIKERS FC
              </h1>
              <p className="text-sm text-gray-300">Your passion, our mission</p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-md">
            Join thousands of fans in the ultimate football experience. Get
            exclusive access to tickets, merchandise, and club updates.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0cfe00] to-[#ffd700]">
              <span className="font-['Bebas_Neue'] text-2xl text-black">
                SF
              </span>
            </div>
            <h1 className="font-['Bebas_Neue'] text-3xl tracking-wider text-white">
              STRIKERS FC
            </h1>
          </div>

          <div>
            <h2 className="font-['Bebas_Neue'] text-4xl tracking-wide text-white">
              WELCOME BACK
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Don&lsquo;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-[#0cfe00] hover:text-[#0cfe00]/80"
              >
                Sign up
              </Link>
            </p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="text-[#0cfe00] hover:text-[#0cfe00]/80">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#0cfe00] hover:text-[#0cfe00]/80">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
