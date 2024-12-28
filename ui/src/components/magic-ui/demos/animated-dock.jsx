"use client";

import { CalendarIcon, MailIcon } from "lucide-react";
import { buttonVariants } from "@/components/shadcn-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn-ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magic-ui/dock";

const Icons = {
    calendar: (props) => <CalendarIcon {...props} />,
    email: (props) => <MailIcon {...props} />,
    linkedin: (props) => (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>LinkedIn</title>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
    x: (props) => (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>X</title>
        <path
          fill="currentColor"
          d="M12 10.586l-4.95-4.95-1.414 1.414L10.586 12l-4.95 4.95 1.414 1.414L12 13.414l4.95 4.95 1.414-1.414L13.414 12l4.95-4.95-1.414-1.414L12 10.586z"
        />
      </svg>
    ),
  };

const DATA = {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
      },
    },
};

export function AnimatedDockDemo() {
  return (
      <TooltipProvider>
        <Dock direction="middle">
          {Object.entries(DATA.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
  );
}
