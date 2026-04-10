import RegistrationForm from "@/components/registration/RegistrationForm";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
 

  return (
    <div className="flex min-h-screen bg-[#0a0e1a]">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0cfe00]/20 to-[#ffd700]/20 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1709994981222-71a403966361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjZWxlYnJhdGlvbiUyMGdvYWwlMjBzY29yaW5nJTIwY3Jvd2R8ZW58MXx8fHwxNzc1NDcxMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Goal celebration"
          height={800}
          width={1200}          
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0cfe00] to-[#ffd700]">
              <span className="font-['Bebas_Neue'] text-3xl text-black">SF</span>
            </div>
            <div>
              <h1 className="font-['Bebas_Neue'] text-4xl tracking-wider text-white">
                STRIKERS FC
              </h1>
              <p className="text-sm text-gray-300">Your passion, our mission</p>
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-md">
            Join the Strikers family to get member-only content,
            early ticket access, and updates from the club community.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0cfe00] to-[#ffd700]">
              <span className="font-['Bebas_Neue'] text-2xl text-black">SF</span>
            </div>
            <h1 className="font-['Bebas_Neue'] text-3xl tracking-wider text-white">
              STRIKERS FC
            </h1>
          </div>

          <div>
            <h2 className="font-['Bebas_Neue'] text-4xl tracking-wide text-white">
              CREATE YOUR ACCOUNT
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Already a member?{" "}
              <Link
                href="/login"
                className="font-medium text-[#0cfe00] hover:text-[#0cfe00]/80"
              >
                Log in
              </Link>
            </p>
          </div>

          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}