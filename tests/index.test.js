'use strict';

const publisher = require('../index.js');

test('set properties correctly', () => {
    const projectId = "testProjectID";
    const topicName = "myKekeTopic";
    const publisherClient = new publisher.Publisher(projectId, topicName);

    expect(publisherClient.projectId).toBe(projectId);
    expect(publisherClient.topicName).toBe(topicName);
  });
