import React, { useEffect, useState } from 'react';
import WebSocketService from '../services/WebSocketService';

const EntityUpdates = () => {
    const [entity, setEntity] = useState(null);

    useEffect(() => {
        // Connect to the WebSocket
        WebSocketService.connect((message) => {
            if (message.body) {
                const receivedEntity = JSON.parse(message.body); // Assuming the message is in JSON format
                setEntity(receivedEntity);
            }
        });

        // Cleanup function to disconnect the WebSocket
        return () => {
            WebSocketService.disconnect();
        };
    }, []);

    return (
        <div className="App">
            <h1>WebSocket Demo</h1>
            {entity ? (
                <div>
                    <h2>Entity Details</h2>
                    <p>ID: {entity.id}</p>
                    <p>Name: {entity.name}</p>
                    {/* Add more fields as necessary */}
                </div>
            ) : (
                <p>No entity data available.</p>
            )}
        </div>
    );
}

export default EntityUpdates;