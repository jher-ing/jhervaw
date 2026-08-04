import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md",
        className
      )}
      aria-label="Jherva — ir al inicio"
    >
      <Image
        src="/logo.png"
        alt=""
        width={32}
        height={32}
        priority
        className="size-8 rounded-[8px]"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-text-primary">
        Jherva
      </span>
    </Link>
  );
}
