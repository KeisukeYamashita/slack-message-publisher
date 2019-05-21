function createData (type, from, message) {
    return {
        type: type,
        payload: {
            from: from,
            message: message
        }
    }
}


async function publish(projectId, topicName, data){
    const pubsub = new PubSub({projectId});
    const dataStr = JSON.stringify(data)
    const dataBuffer = Buffer.from(dataStr);

    const messageId = await pubsub.topic(topicName).publish(dataBuffer);
    return messageId
}

exports.publish =  publish
exports.createData = createData