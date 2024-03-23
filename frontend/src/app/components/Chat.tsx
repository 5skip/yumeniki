import { Avatar, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Message } from "../types/custom";

const Chat = ({ content, role }: Message) => {
  const [chatMessage, setChatMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeoutId = setTimeout(() => {
        setChatMessage((prevText) => prevText + content[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 80);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [content, currentIndex]);

  return (
    <motion.div
      style={{
        alignSelf: role === "assistant" ? "flex-start" : "flex-end",
        width: "auto",
      }}
      initial={{
        opacity: 0,
        translateY: "100%",
      }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, translateY: 0 }}
    >
      <Flex
        gap="5px"
        w="full"
        flexDir={role === "assistant" ? "row" : "row-reverse"}
        // mt="10"
      >
        <Avatar
          name={role === "user" ? "Me" : "夢ニキ？"}
          w="40px"
          h="40px"
          src= "https://media.discordapp.net/attachments/1218148068730470422/1220359361810137128/DALLE_2024-03-21_22.11.58_-_Create_another_logo_design_featuring_a_cute_robot_character_emphasizing_purple_hues_within_the_bright_rainbow_colors_against_a_white_background._The_.webp?ex=660ea739&is=65fc3239&hm=0d3338bd2f73082bf8f7d961fbee8c00a4a76357c689894e201cdaf02b948bfb&=&format=webp&width=1098&height=1098"
        />
        <Flex
          borderWidth={1}
          borderColor="blue.400"
          bg="main-bg"
          p="0.5rem 1rem"
          w="auto"
          rounded={
            role === "assistant" ? "0 20px 20px 20px" : "20px 0 20px 20px"
          }
          fontSize={{ base: "8px", md: "18px" }}
          flexDir="column"
        >
          <Flex
              alignSelf="flex-end"
              fontStyle="italic"
              opacity={0.4}
              fontSize="8px"
              as="small"
              fontWeight={500}
            >
              占い師
            </Flex>
          {role === "assistant" ? chatMessage || "" : content || ""}
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default Chat;
