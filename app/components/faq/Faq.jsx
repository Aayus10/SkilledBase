"use client";
import { Accordion, Box, Container, Grid, Image, Title } from "@mantine/core";
import classes from "./Faq.module.css";
import {motion} from "motion/react"
import { JumboTitle } from "../jumbotitle/JumboTitle";


export function Faq({ faqs }) {
  return (
    <div className={classes.wrapper}>
      <Box size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              mt={{ md: 30 }}
              src={"./faq.svg"}
              alt="Frequently Asked Questions"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <JumboTitle order={2} fz="sm">
              FAQs
            </JumboTitle>

            <Accordion
              mt={20}
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              {faqs.map((faq,index) => {
                const { id, question, answer } = faq;
                return (
                  <motion.div
                  key={id}
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 * index,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <Accordion.Item mt={15}
                      key={id}
                      className={classes.item}
                      value={question}
                    >
                      <Accordion.Control>{question}</Accordion.Control>
                      <Accordion.Panel>{answer}</Accordion.Panel>
                    </Accordion.Item>
                  </motion.div>
                );
              })}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  );
}
