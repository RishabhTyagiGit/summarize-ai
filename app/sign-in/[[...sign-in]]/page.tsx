import BgGradient from "@/components/common/bg-gradient";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center lg:min-h-[50vh] mt-12">
      <BgGradient className="from-rose-400 via-rose-300 to-orange-200" />
      <SignIn />
    </div>
  );
}
