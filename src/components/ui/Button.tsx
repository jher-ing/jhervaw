import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Variantes y tamaños según 03-Design-System/Buttons.md.
 * Estados: default, hover, active, focus-visible, disabled y loading
 * quedan cubiertos por las clases y por la prop `loading`.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium " +
    "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-hover shadow-sm",
        secondary:
          "bg-surface-raised text-text-primary hover:bg-border/60 border border-border",
        outline:
          "border border-border text-text-primary hover:border-border-strong hover:bg-surface-raised",
        ghost: "text-text-primary hover:bg-surface-raised",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto rounded-none",
      },
      size: {
        sm: "h-8 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends NativeButtonProps, VariantProps<typeof buttonVariants> {
  href?: string;
  loading?: boolean;
  external?: boolean;
}

export function Button({
  className,
  variant,
  size,
  href,
  loading,
  external,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...externalProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
