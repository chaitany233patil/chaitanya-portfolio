"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const NavItems = [
    { title: "Work", href: "/work" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Playground", href: "/playground" },
  ];

  const containerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        when: "afterChildren",
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section>
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto hidden sm:flex justify-between items-center my-6 px-3">
        <Link href="/">
          <Image
            src={"/signature.svg"}
            alt="signature"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex gap-8">
          {NavItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="text-neutral-500 hover:text-neutral-900 text-lg transition-all duration-300 relative group">
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile NavBar */}
      <div className="flex sm:hidden">
        <div className="w-full my-6 px-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={"/signature.svg"}
                alt="signature"
                width={100}
                height={100}
              />
            </Link>
            <motion.div
              className="cursor-pointer"
              onClick={() => setisOpen((prev) => !prev)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              >
                {isOpen ? (
                  <X className="mr-2" />
                ) : (
                  <AlignJustify className="mr-2" />
                )}
              </motion.div>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center text-neutral-500 gap-4 pt-6 border-b border-neutral-500/20 rounded-b-xl pb-6 overflow-hidden"
              >
                {NavItems.map((item) => (
                  <motion.div
                    key={item.title}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
                    variants={itemVariants}
                    className="group cursor-pointer"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href={item.href}>
                      <div className="text-neutral-500 hover:text-neutral-900 transition-colors duration-300 text-lg font-medium relative">
                        {item.title}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900 rounded-full"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
