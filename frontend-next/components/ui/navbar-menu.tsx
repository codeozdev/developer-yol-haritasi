"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 ">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface HoveredLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const HoveredLink = ({ children, href, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      href={href || "#"}
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};

// Add these interfaces before the NavbarMenu component
interface MenuItems {
  [key: string]: {
    path: string;
    subItems?: {
      [key: string]:
        | string
        | {
            path: string;
            subItems?: {
              [key: string]: string;
            };
          };
    };
  };
}

interface NavbarMenuProps {
  items: MenuItems;
}

export function NavbarMenu({ items }: NavbarMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

  // Menünün kapanmasını geciktirmek için timeout state'i
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    // Eğer kapanma için bir timeout varsa iptal et
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    // Menünün kapanmasını geciktir
    const timeout = setTimeout(() => {
      setHoveredItem(null);
      setHoveredSubItem(null);
    }, 300); // 300ms gecikme

    setCloseTimeout(timeout);
  };

  return (
    <>
      {Object.entries(items).map(([label, item]) => (
        <li
          key={label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(label)}
          onMouseLeave={handleMouseLeave}>
          <Link
            href={item.path}
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">
            {label}
          </Link>

          {hoveredItem === label && item.subItems && (
            <div
              className="absolute left-0 mt-2 w-48 bg-white dark:bg-[#1c2128] rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700"
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}>
              {Object.entries(item.subItems).map(([subLabel, subItem]) => (
                <div
                  key={subLabel}
                  className="relative"
                  onMouseEnter={() => setHoveredSubItem(subLabel)}
                  onMouseLeave={() => setHoveredSubItem(null)}>
                  <Link
                    href={typeof subItem === "string" ? subItem : subItem.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#2d333b] dark:hover:text-white">
                    {subLabel}
                  </Link>

                  {hoveredSubItem === subLabel &&
                    typeof subItem !== "string" &&
                    subItem.subItems && (
                      <div
                        className="absolute left-full top-0 w-48 bg-white dark:bg-[#1c2128] rounded-md shadow-lg py-1 border border-gray-200 dark:border-gray-700"
                        onMouseEnter={() => {
                          handleMouseEnter(label);
                          setHoveredSubItem(subLabel);
                        }}
                        onMouseLeave={handleMouseLeave}>
                        {Object.entries(subItem.subItems).map(([thirdLabel, path]) => (
                          <Link
                            key={thirdLabel}
                            href={path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#2d333b] dark:hover:text-white">
                            {thirdLabel}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </>
  );
}
