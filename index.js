class Publisher {
    constructor(projectId, topic){
        this.projectId = projectId
        this.topic = topic
    }

    async publish(projectId, topicName, data){
        const pubsub = new PubSub({projectId});
        const dataStr = JSON.stringify(data)
        const dataBuffer = Buffer.from(dataStr);
    
        const messageId = await pubsub.topic(topicName).publish(dataBuffer);
        return messageId
    }
}

function createData (type, from, message) {
    return {
        type: type,
        payload: {
            from: from,
            message: message
        }
    }
}

exports.Publisher =  Publisher
exports.createData = createData