'use strict';

const publisher = require('../index.js');

test('Publisher() => set properties correctly', () => {
    const projectId = "testProjectID";
    const topicName = "myKekeTopic";
    const publisherClient = new publisher.Publisher(projectId, topicName);

    expect(publisherClient.projectId).toBe(projectId);
    expect(publisherClient.topicName).toBe(topicName);
  });
  
test('createData() => set fields correctly without Option', () => {
  const type = 'text';
  const from = 'keke';
  const message = 'me';

  expect(publisher.createData(type, from, message)).toStrictEqual({
    type: type,
    payload: {
      from: from,
      message: message
    }
  })
})

  
test('createData() => set fields correctly with Option', () => {
  const type = 'text';
  const from = 'keke';
  const message = 'me';
  const option = {
    title: "Hello",
    value: "Is me~~"
  };

  expect(publisher.createData(type, from, message, option)).toStrictEqual({
    type: type,
    payload: {
      from: from,
      message: message,
      option: option
    }
  })
})