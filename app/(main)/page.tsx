import About from "@/components/About";
import Fetures from "@/components/Fetures";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Ready from "@/components/Ready";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = await getUser();
  if (isAuth) {
    return redirect(`${user?.id}`);
  }
  return (
    <main className="relative">
      <Hero />
      <About />
      <Fetures />
      <Ready />
      <Footer />
    </main>
  );
}
