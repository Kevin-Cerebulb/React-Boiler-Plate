import { Footer } from "@/components/footer";
import { LoginForm } from "@/components/shadcn-ui/login/login-form";
import { BackgroundImage } from "@/components/ui/background-image";

export function Component() {
  return (
    <BackgroundImage
      imagePath=""
      className="flex min-h-svh flex-col items-center justify-center gap-6"
    >
      <div className="flex w-full max-w-sm flex-col gap-6 mt-auto ">
        <div className="flex items-center gap-2 self-center font-medium">
          Company Logo
        </div>
        <LoginForm />
      </div>
      <div className="mt-auto z-10 w-full">
				<Footer />
			</div>
    </BackgroundImage>
  );
}
