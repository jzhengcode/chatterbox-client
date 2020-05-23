var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#room-dropdown'),

  initialize: function() {

    //to do: filter message view on the selected room --> do this messagesView render function
    RoomsView.$select.on('change', function() {
      MessagesView.render();
    });

    let roomNames = [];
    for (let messageObj of Messages.storage) {
      roomNames.push(messageObj.roomname);
    }
    let uniqueRooms = _.uniq(roomNames);

    let uniqueRoomObjs = uniqueRooms.map(function(roomString) {
      let roomObj = {};
      roomObj.roomName = roomString;
      return roomObj;
    });
    Rooms.storage = uniqueRoomObjs;
    RoomsView.$select.empty();
    for (let roomName of Rooms.storage) {
      RoomsView.$select.append(RoomsView.render(roomName));
    }
    // set up event to look for click add room
      // prompt for user input
      // store the return value
      // push stored value into storage
      // call roomsView.initialize

    RoomsView.$button.on('click', function() {
      let newRoom = prompt('Please enter the room name');
      let newRoomMessage = prompt('New message');

      if (newRoom){

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
            App.fetch(App.stopSpinner);
            setTimeout(MessagesView.render, 2000);
            setTimeout(RoomsView.initialize, 1000);
          }

        }

      }
    });


  },

  render: _.template(`
    <option><%-roomName%></option>
  `)
};
