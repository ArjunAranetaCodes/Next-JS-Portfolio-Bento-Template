"use client";
import { cn } from "@/utils/cn";
import React, { useContext } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento_grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";

import { SkeletonOne } from "./ui/skeleton1";
import { SkeletonTwo } from "./ui/skeleton2";
import { SkeletonThree } from "./ui/skeleton3";
import { SkeletonFour } from "./ui/skeleton4";
import { SkeletonFive } from "./ui/skeleton5";
import { SkeletonSix } from "./ui/skeleton6";
import { SkeletonSeven } from "./ui/skeleton7";
import { ThemeContext } from "@/utils/theme-context";
import { motion, AnimatePresence } from "framer-motion";

export function BentoGridDemo() {
  const { projects } = useContext(ThemeContext);
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      <AnimatePresence>
        {projects.map((sortId, i) => {
          const sortParts = sortId.split(", ");
          const sortName = "Project " + sortParts[0];
          const project = items.find((obj) => obj.sortName === sortName);
          const classPartiallyVisible =
            sortParts[1] === "partial" ? "opacity-30" : "";
          
          if (project) {
            return (
              <motion.div
                className={cn(
                  "[&>p:text-lg]",
                  project.className,
                  classPartiallyVisible
                )}
                key={i}
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { delay: 0.5, type: "spring" },
                }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.5 },
                }}
                layout
              >
                <BentoGridItem
                  title={project.title}
                  description={project.description}
                  header={project.header}
                  icon={project.icon}
                  link={project.link}
                />
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    sortName: "Project 1",
    title: "Web Designs",
    description: (
      <span className="text-sm">
        Showcasing my expertise in crafting visually stunning and user-friendly
        websites.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    sortName: "Project 2",
    title: "AI Chatbots",
    description: (
      <span className="text-sm">
        A Repository of Chatbots I built using TypeScript, React, Chainlit, and Python.
      </span>
    ),
    link: "https://github.com/ArjunAranetaCodes/Python-DataScience-AI",
    header: <SkeletonOne />,
    className: "md:col-span-1 cursor-pointer",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    sortName: "Project 3",
    title: "Reach me Here",
    description: (
      <span className="text-sm">
        For your inquiries and collaborations.
      </span>
    ),
    link: "https://www.linkedin.com/in/arjun-araneta/",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    sortName: "Project 4",
    title: "Web Design",
    description: (
      <span className="text-sm">
        Modern aesthetics with intuitive functionality
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    sortName: "Project 5",
    title: "React Issue Tracker",
    description: (
      <span className="text-sm">
        A powerful and user-friendly application that enables teams to
        efficiently manage and track software development tasks, bugs, and
        feature requests.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },

  {
    sortName: "Project 6",
    title: "React Weather App",
    description: (
      <span className="text-sm">
        Provides users with up-to-date and accurate weather information,
        allowing them to easily check the current conditions, forecast.
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    sortName: "Project 7",
    title: "Java Applications",
    description: (
      <span className="text-sm">
        A curated collection of innovative Java-based applications that I built
        to showcase the versatility, power, and elegance of the Java programming
        language.
      </span>
    ),
    header: <SkeletonSeven />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
