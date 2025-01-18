import LoginForm from "@/components/login-form";
import LogoutButton from "@/components/logout-button";
import Title from "@/components/title";
import UserHomeButton from "@/components/user-home-button";
import { userIsLoggedIn } from "@/lib/auth-functions";

export default function Home() {
  const isAuthenticated = userIsLoggedIn();

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center gap-10">
      <div className="absolute top-4 w-full">
        <Title showSmallTitle={true} showFrog={false} />
      </div>

      <div className="flex flex-col items-center justify-center mx-2 w-3/4 gap-2 p-4">
        <h3 className="font-alumni text-white text-3xl font-semibold uppercase text-left">
          Dobrodošli na e-Motion
        </h3>
        <p className="font-hammersmith text-center text-black">
          Platforma namijenjena djeci za lagano e-učenje emocija kroz igru u
          timovima.
        </p>
      </div>

      {isAuthenticated && (
        <div className="flex flex-col items-center justify-center gap-4">
          <UserHomeButton />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginForm />}
    </div>
  );
}
