import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!viewportRef.current) return;

    const amount = viewportRef.current.offsetWidth * 0.9;

    viewportRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      {/* Controls */}
      <Button
        variant="secondary"
        className="hidden lg:flex items-center absolute left-[-25px] top-1/2 -translate-y-1/2  z-10 w-12 h-12 rounded-full"
        onClick={() => scroll("left")}
      >
        <ArrowLeft/>
      </Button>

      <Button
        variant="secondary"
        className="lg:flex items-center absolute right-[-25px] top-1/2 -translate-y-1/2  z-10 w-12 h-12  rounded-full"
        onClick={() => scroll("right")}
      >
        <ArrowRight/>
      </Button>

      <ScrollArea.Root className="w-full">
        <ScrollArea.Viewport
          ref={viewportRef}
          className="w-full overflow-x-auto"
        >
         
          <div
            className="
              flex gap-6
              snap-x snap-mandatory
              py-2
            "
          >
            {children}
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar orientation="horizontal" />
      </ScrollArea.Root>
    </div>
  );
}

