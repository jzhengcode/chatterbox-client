var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#room-dropdown'),
  listening: false,

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
    RoomsView.$select.append('<option selected>All Rooms</option>');
    for (let roomName of Rooms.storage) {
      RoomsView.$select.append(RoomsView.render(roomName));
    }
    RoomsView.$button.on('click', function() {
      Rooms.add(uniqueRooms);
    });
    RoomsView.listening = true;






  },



  render: _.template(`
    <option><%-roomName%></option>
  `)
};
