import { createChatBotMessage } from "react-chatbot-kit";
import "../ChatBot/bot.css";
import Contact from "./Contact";

const config = {
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you today?", {
      widget: "overview",
    }),
    createChatBotMessage(
      "Feel free to ask me about the different Services we offer, our Prices, our Location, our Hours of operation, or any other queries you may have.",
      {
        withAvatar: true,
        delay: 1000,
        widget: "overview",
      }
    ),
  ],

  // widgets: [
  //   {
  //     widgetName: 'overview',
  //     widgetFunc: (props) => <Contact {...props} />,
  //   },
  // ],
  botName: "Rixon Bot",
};

export default config;
