import React from 'react';
import PropTypes from 'prop-types';

const MessageParser = ({ children, actions }) => {
const parse = (message) => {
    switch (true) {
        case /hello|hi|hey/i.test(message):
            actions.greet();
            break;
        case /bye|goodbye/i.test(message):
            actions.handleFinalMessage();
            break;
        case /price/i.test(message):
            actions.handlePriceQuery();
            break;
        case /hours|time/i.test(message):
            actions.handleHoursQuery();
            break;
        case /location|address/i.test(message):
            actions.handleLocationQuery();
            break;
        case /support|help/i.test(message):
            actions.handleSupportQuery();
            break;
        case /services/i.test(message):
            actions.handleServicesQuery();
            break;
        case /web development/i.test(message):
            actions.handleWebDevelopmentQuery();
            break;
        case /mobile development/i.test(message):
            actions.handleMobileDevelopmentQuery();
            break;
        case /branding/i.test(message):
            actions.handleBrandingQuery();
            break;
        case /seo/i.test(message):
            actions.handleSEOQuery();
            break;
        case /social media/i.test(message):
            actions.handleSocialMediaQuery();
            break;
        case /ui\/ux/i.test(message):
            actions.handleUIUXQuery();
            break;
        case /projects/i.test(message):
            actions.handleProjectsQuery();
            break;
        case /contact/i.test(message):
            actions.handleContactQuery();
            break;
        case /about/i.test(message):
            actions.handleAboutQuery();
            break;
        case /thanks|thank you/i.test(message):
            actions.handleThanksQuery();
            break;
        default:
            actions.handleUnknownMessage();
            break;
    }
    
};
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};
MessageParser.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.shape({
      greet: PropTypes.func.isRequired,
      handleFinalMessage: PropTypes.func.isRequired,
      handlePriceQuery: PropTypes.func.isRequired,
      handleHoursQuery: PropTypes.func.isRequired,
      handleLocationQuery: PropTypes.func.isRequired,
      handleSupportQuery: PropTypes.func.isRequired,
      handleServicesQuery: PropTypes.func.isRequired,
      handleWebDevelopmentQuery: PropTypes.func.isRequired,
      handleMobileDevelopmentQuery: PropTypes.func.isRequired,
      handleBrandingQuery: PropTypes.func.isRequired,
      handleSEOQuery: PropTypes.func.isRequired,
      handleSocialMediaQuery: PropTypes.func.isRequired,
      handleUIUXQuery: PropTypes.func.isRequired,
      handleProjectsQuery: PropTypes.func.isRequired,
      handleContactQuery: PropTypes.func.isRequired,
      handleAboutQuery: PropTypes.func.isRequired,
      handleThanksQuery: PropTypes.func.isRequired,
      handleUnknownMessage: PropTypes.func.isRequired,

        
  }).isRequired,
};

export default MessageParser;
