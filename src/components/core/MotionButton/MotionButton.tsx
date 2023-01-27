import { Button, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = (props: ButtonProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.075,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.975 }}
    >
      <Button {...props}>{props.children}</Button>
    </motion.div>
  );
};

export default MotionButton;
