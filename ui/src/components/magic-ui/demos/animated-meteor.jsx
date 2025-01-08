import Meteors from "@/components/magic-ui/meteors";
import { BackgroundImage } from "@/components/ui/background-image";

/**
 * 
 * @param {{
 *  meteorCount : number;
 * }}props 
 * @returns 
 */
export function MeteorDemo({children,meteorCount=50}) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <BackgroundImage
        imagePath=""
        className="flex min-h-svh flex-col items-center justify-center gap-6 w-full"
        >
          <Meteors number={meteorCount} />
        {children}
      </BackgroundImage>
    </div>
  );
}
