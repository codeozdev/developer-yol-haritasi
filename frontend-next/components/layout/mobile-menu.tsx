"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface MobileMenuProps {
  items: {
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
  };
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-[#1c2128] shadow-lg border-t border-gray-200 dark:border-gray-700 z-50">
            <div className="px-4 py-2">
              {Object.entries(items).map(([label, item]) => (
                <div
                  key={label}
                  className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={item.path}
                      onClick={() => !item.subItems && setIsOpen(false)}
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      {label}
                    </Link>
                    {item.subItems && (
                      <button
                        onClick={() => toggleSubMenu(label)}
                        className="p-2 text-gray-600 dark:text-gray-400">
                        <motion.span
                          animate={{ rotate: openSubMenus.includes(label) ? 180 : 0 }}
                          className="block">
                          ▼
                        </motion.span>
                      </button>
                    )}
                  </div>

                  {item.subItems && openSubMenus.includes(label) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 pb-2">
                      {Object.entries(item.subItems).map(([subLabel, subItem]) => (
                        <div key={subLabel}>
                          <Link
                            href={typeof subItem === "string" ? subItem : subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            {subLabel}
                          </Link>
                          {typeof subItem !== "string" && subItem.subItems && (
                            <div className="pl-4">
                              {Object.entries(subItem.subItems).map(([thirdLabel, path]) => (
                                <Link
                                  key={thirdLabel}
                                  href={path}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                  {thirdLabel}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
