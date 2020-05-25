var MessagesView = {

  $chats: $('#chats'),
  $showMessages: $('#show-messages'),
  $room: $('#room-dropdown'),

  initialize: function() {
    MessagesView.render();
    FormView.initialize();
    RoomsView.initialize();

    MessagesView.$showMessages.on('click', function() {
      App.startSpinner();
      App.fetch(MessagesView.render);
      App.stopSpinner();
    });

  },

  render: function() {
    //use messageView.js to render each message
    //then render all message blocks on page in #chats element

    //if value of room dropdown is "All Rooms"
        //assign message set to all of Messages.storage
      //else
        //_.filter Messages.storage based on $room selector val()
    let messages;

    if (MessagesView.$room.val() === 'All Rooms'){
      messages = Messages.storage;
    } else {
      messages = Messages.storage.filter(messageNode => messageNode.roomname === MessagesView.$room.val());
    }
    MessagesView.$chats.empty();
    for (let message of messages) {

      if (!message.hasOwnProperty('username') || !message.hasOwnProperty('roomname') || !message.hasOwnProperty('text') || !message.hasOwnProperty('createdAt')) {
        continue;
      }

      let rendered = MessageView.render(message);
      MessagesView.$chats.append(rendered);
    }
    Friends.selectFriend(); //enable friend selection feature
  },

  renderMessage: function(message) {
    if (message.hasOwnProperty('username') && message.hasOwnProperty('roomname') && message.hasOwnProperty('text') && message.hasOwnProperty('createdAt')) {
      let rendered = MessageView.render(message);
      MessagesView.$chats.prepend(rendered);
    }
  }
  //render friends messages differently - i.e. if message.username is contained in friends storage
    //inside for-loop above, if message.username is _.contained in Friends.storage
      //assign rendered to MessageView.renderFriend() method instead of MessageView.render()

  //filter messages based on room name selected in dropdown before looping through and rendering
    //before starting for-loop above,

};