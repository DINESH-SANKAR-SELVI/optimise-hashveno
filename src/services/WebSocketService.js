class WebSocketService {
    constructor() {
        this.socket = null;
    }

    connect(onMessageReceived) {
        this.socket = new WebSocket('ws://localhost:8080/ws');

        this.socket.onopen = (event) => {
            console.log('Connected to WebSocket');
        };

        this.socket.onmessage = (event) => {
            if (onMessageReceived) {
                onMessageReceived(event.data);
            }
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };

        this.socket.onclose = (event) => {
            console.log('WebSocket closed: ', event);
        };
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

export default new WebSocketService();