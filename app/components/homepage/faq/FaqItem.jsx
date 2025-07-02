import { Accordion } from "@mantine/core";
import { motion } from "motion/react";

import classes from "./Faq.module.css";

export const FaqItem = ({ id, question, answer, index }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <Accordion.Item
        mt={15}
        key={id}
        className={classes.item}
        value={question}
      >
        <Accordion.Control>{question}</Accordion.Control>
        <Accordion.Panel>{answer}</Accordion.Panel>
      </Accordion.Item>
    </motion.div>
  );
};
