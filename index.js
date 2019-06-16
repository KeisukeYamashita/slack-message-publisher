'use strict';

const {PubSub} = require('@google-cloud/pubsub');

class Publisher {
    constructor(projectId, topicName){
        this.projectId = projectId
        this.topicName = topicName
    }

    async publish(data){
        const pubsub = new PubSub(this.projectId);
        const dataStr = JSON.stringify(data)
        const dataBuffer = Buffer.from(dataStr);
    
        const messageId = await pubsub.topic(this.topicName).publish(dataBuffer);
        return messageId
    }
}

function createData (type, from, message, option) {
    const data = {
        type: type,
        payload: {
            from: from,
            message: message
        }
    };

    if (option !== undefined) data.payload.option = option;

    return data;
}

exports.Publisher =  Publisher;
exports.createData = createData;