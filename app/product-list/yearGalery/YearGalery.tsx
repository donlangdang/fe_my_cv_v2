"use client";
import { motion } from "framer-motion";

const YearGalery = () => {
  const a = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ];

  return (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 md:px-32 gap-4 py-4 text-zinc-800">
      {a.map((b) => (
        <motion.div
          key={b}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          className="w-full h-auto aspect-3/4 rounded-2xl bg-muted"
        >
          {b}
        </motion.div>
      ))}
    </div>
  );
};

export default YearGalery;
