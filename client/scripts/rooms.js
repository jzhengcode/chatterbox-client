var Rooms = {
  storage: [],
  add: function(uniqueRooms, specNewRoom, specNewMessage) {
    // set up event to look for click add room
      // prompt for user input
      // store the return value
      // push stored value into storage
      // call roomsView.initialize
      var newRoom;
      var newRoomMessage;
      var runBySpec = false;

      if (specNewRoom) {
        newRoom = specNewRoom;
        newRoomMessage = specNewMessage;
        runBySpec = true; //do not send to server
      } else {
        newRoom = prompt('Please enter the room name');
        newRoomMessage = prompt('New message');
      }

      if (runBySpec) {
        let optionNode = $(`<option>${newRoom}</option>`);
        $('#room-dropdown').append(optionNode);
      }

      else if (newRoom){
        // if the user input already exists then do nothing
        if (!_.contains(uniqueRooms, newRoom)){
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
            // setTimeout(RoomsView.initialize, 1000);
            setTimeout(App.stopSpinner, 1000);
          }
        }
      }
  },
};