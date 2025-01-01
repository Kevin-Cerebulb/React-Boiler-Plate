import { cn } from "@/lib/utils";

export const BackgroundImage = ({ children, imagePath, className }) => {
  return (
    <div
      className={cn("relative bg-cover bg-center bg-no-repeat", className)}
      style={{
        backgroundImage: `url(${imagePath})`,
        height : "100%",
      }}
    >
      {children}
    </div>
  );
};
