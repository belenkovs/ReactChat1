import React from 'react';
import ChatServiceContext from '../chat-service-context';

const WithChatService = () => {
    return (Wrapped) => {
        return (props) => {
            return (
                <ChatServiceContext.Consumer>
                    {
                    (ChatService) => {
                        return <Wrapped {...props} ChatService={ChatService} />                        
                    }
                    }
                </ChatServiceContext.Consumer>
            );
        };
    };
};

export default WithChatService;
