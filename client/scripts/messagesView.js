var MessagesView = {

  $chats: $('#chats'),
  $showMessages: $('#show-messages'),

  initialize: function() {
    //Chelsea notes: part of initializing message view will be setting up an event listener for message submissions

    //Also set up event listener, or timeout function, for rendering new messages on a schedule or on a button click
    MessagesView.$showMessages.on('click', MessagesView.render);

    //also want to render some number of messages retrieved from server - like last 100 messages or something
  },

  render: function() {
    //use messageView.js to render each message
    //then render all message blocks on page in #chats element
    MessagesView.$chats.empty();
    //for each message in messages.js storage...
    for (let message of Messages.storage) {
      //call MessageView.render template on the message
      //if message doesn't have username, roomname, text, and createdAt properties, continue to next loop
      if (!message.hasOwnProperty('username') || !message.hasOwnProperty('roomname') || !message.hasOwnProperty('text') || !message.hasOwnProperty('createdAt')) {
        continue;
      }
      let rendered = MessageView.render(message);
      //append the created node to #chats
      MessagesView.$chats.append(rendered);
    }
  }

};