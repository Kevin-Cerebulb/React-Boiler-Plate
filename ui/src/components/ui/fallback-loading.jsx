import { cn } from "@/lib/utils";

export default function FallbackLoading({
  height = "h-screen",
  spinnerColor = "border-gray-900",
  className,
}) {
  return (
    <div className={cn("flex justify-center items-center", height, className)}>
      <div
        className={cn(
          "animate-spin rounded-full h-5 w-5 border-b-2 mr-3",
          spinnerColor
        )}
      ></div>
      Loading...
    </div>
  );
}
