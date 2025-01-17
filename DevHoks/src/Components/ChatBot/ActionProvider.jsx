import React from "react";
import PropTypes from "prop-types";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const greet = () => {
    const message = createChatBotMessage("Hello! How can I help you today?");
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  const handleFinalMessage = () => {
    const message = createChatBotMessage(
      "Thank you for providing your details. We will get back to you shortly."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handlePriceQuery = () => {
    const message = createChatBotMessage(
      "Our prices vary depending on the service. Please visit our pricing page for more details."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  const handleHoursQuery = () => {
    const message = createChatBotMessage("We are open 24/7, Monday to Sunday.");
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  const handleLocationQuery = () => {
    const message = createChatBotMessage(
      "We are located at Blue Area, Islamabad, Pakistan."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  const handleSupportQuery = () => {
    const message = createChatBotMessage(
      "For support, please contact us at abdulhameedbcs001@gmail.com or call us at (+92) 300 0713825."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  const handleServicesQuery = () => {
    const message = createChatBotMessage(
      "We offer a variety of services including web development, mobile app development, SEO, and digital marketing."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleBrandingQuery = () => {
    const message = createChatBotMessage(
      "Our branding services include logo design, brand strategy, and identity development."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleSEOQuery = () => {
    const message = createChatBotMessage(
      "Our SEO services help improve your website's visibility on search engines."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleSocialMediaQuery = () => {
    const message = createChatBotMessage(
      "We manage your social media presence to engage with your audience effectively."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleWebDevelopmentQuery = () => {
    const message = createChatBotMessage(
      "Our web development services include creating responsive and user-friendly websites."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleMobileDevelopmentQuery = () => {
    const message = createChatBotMessage(
      "We develop mobile applications for both Android and iOS platforms."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleUIUXQuery = () => {
    const message = createChatBotMessage(
      "Our UI/UX design services focus on creating intuitive and engaging user experiences."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleProjectsQuery = () => {
    const message = createChatBotMessage(
      "We have completed numerous projects in various domains. Check out our portfolio for more details."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleContactQuery = () => {
    const message = createChatBotMessage(
      "You can contact us via email at contact@rixonbit.com or call us at (+92) 300 0713825."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleAboutQuery = () => {
    const message = createChatBotMessage(
      "We are a leading company in the tech industry, providing top-notch services to our clients."
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleThanksQuery = () => {
    const message = createChatBotMessage("You're welcome!");
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };
  const handleUnknownMessage = () => {
    const message = createChatBotMessage(
      "I'm sorry, I didn't understand that. Can you please rephrase?"
    );
    setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            greet: greet,
            handleFinalMessage: handleFinalMessage,
            handlePriceQuery: handlePriceQuery,
            handleHoursQuery: handleHoursQuery,
            handleLocationQuery: handleLocationQuery,
            handleSupportQuery: handleSupportQuery,
            handleServicesQuery: handleServicesQuery,
            handleBrandingQuery: handleBrandingQuery,
            handleSEOQuery: handleSEOQuery,
            handleSocialMediaQuery: handleSocialMediaQuery,
            handleWebDevelopmentQuery: handleWebDevelopmentQuery,
            handleMobileDevelopmentQuery: handleMobileDevelopmentQuery,
            handleUIUXQuery: handleUIUXQuery,
            handleProjectsQuery: handleProjectsQuery,
            handleContactQuery: handleContactQuery,
            handleAboutQuery: handleAboutQuery,
            handleThanksQuery: handleThanksQuery,
            handleUnknownMessage: handleUnknownMessage,
          },
        });
      })}
    </div>
  );
};
ActionProvider.propTypes = {
  createChatBotMessage: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ActionProvider;
