import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    {
        id: 1,
        image: "image1.jpg",
      },
      {
        id: 2,
        image: "image2.jpg",
      },
      {
        id: 3,
        image: "image3.jpg",
      },
];

const Diplomas = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
<>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.img
            src={item.image}
            alt={`Image ${item.id}`}
          />
        </motion.div>
      ))}

      <AnimatePresence className="border-solid border-2">
        {selectedId !== null && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
            <motion.h2>{items[selectedId - 1].title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    
  </>
)}

export default Diplomas;
