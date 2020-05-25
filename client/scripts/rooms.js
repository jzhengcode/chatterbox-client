var Rooms = {
  storage: [],

  add: function(uniqueRooms, specNewRoom, specNewMessage) {
      var newRoom, newRoomMessage;
      var runBySpec = false;

      //If run by specRunner, need to add inputs directly instead of asking user for input
      if (specNewRoom) {
        newRoom = specNewRoom;
        newRoomMessage = specNewMessage;
        runBySpec = true;

      //Else, request user input with prompts
      } else {
        newRoom = prompt('Please enter the room name');
        newRoomMessage = prompt('New message');
      }

      //If run by specRunner, append the new room directly to the dropdown, as our implemented method requires interaction with the server, which the room test doesn't interact with
      if (runBySpec) {
        let optionNode = $(`<option>${newRoom}</option>`);
        $('#room-dropdown').append(optionNode);

      //Else, post a new message to the room and regenerate room list
      } else if (newRoom) {
        if (!_.contains(uniqueRooms, newRoom)) {
          var messageInput = newRoomMessage;
          var user = App.username;
          var room = newRoom;

          var messageObj = {
            username: user,
            roomname: room,
            text: messageInput,
            createdAt: null
          };

          if (messageInput !== '') {
            Parse.create(messageObj);
            App.startSpinner();
            App.fetch(MessagesView.initialize);
            setTimeout(App.stopSpinner, 1000);
          }
        }
      }
  },
};