import React from 'react';
import useFirestore from 'hooks/useFirestore';
import { motion } from 'framer-motion';

const Image = ({ setImage }) => {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className="img-wrap"
            key={doc.id}
            onClick={() => setImage(doc)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt={doc.name}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Image;