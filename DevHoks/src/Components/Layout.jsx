/* eslint-disable no-unused-vars */
import Footer from "./Layout/Footer/footer";
import Navbar from "./Layout/Header/navbar";
import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../Components/ChatBot/config.js";
import MessageParser from "../Components/ChatBot/MessageParser.jsx";
import ActionProvider from "../Components/ChatBot/ActionProvider.jsx";
import { Outlet } from "react-router";

const Layout = () => {
  const [isChatbotVisible, setIsChatbotVisible] = React.useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      <div
        className={`fixed bottom-5 right-5 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer ${
          isChatbotVisible ? "" : "pulse-animation"
        }`}
        onClick={toggleChatbot}
      >
        <style>
          {`
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }
            .pulse-animation {
              animation: pulse 1.5s infinite;
            }
          `}
        </style>

        <i className="fas fa-headset"></i>
      </div>

      {isChatbotVisible && (
        <div className="chat-bot fixed bottom-52 right-0 md:w-62 md:h-96 bg-white border border-gray-300 rounded-lg shadow-lg">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
