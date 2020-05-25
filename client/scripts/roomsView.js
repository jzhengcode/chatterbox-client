var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#room-dropdown'),

  initialize: function() {

    //Kick off event listener for switching rooms
    RoomsView.$select.on('change', function() {
      MessagesView.render();
    });

    //Get unique room names from stored messages
    let roomNames = [];
    for (let messageObj of Messages.storage) {
      roomNames.push(messageObj.roomname);
    }
    let uniqueRooms = _.uniq(roomNames);

    //Map unique room names to renderable objects and store
    Rooms.storage = uniqueRooms.map(function(roomString) {
      let roomObj = {};
      roomObj.roomName = roomString;
      return roomObj;
    });

    //Reset the room dropdown menu
    RoomsView.$select.empty();

    //Add a default "All Rooms" option + each unique room name to menu
    RoomsView.$select.append('<option selected>All Rooms</option>');
    for (let roomName of Rooms.storage) {
      RoomsView.$select.append(RoomsView.render(roomName));
    }

    //Kick off event listener for "add room" button
    RoomsView.$button.on('click', function() {
      Rooms.add(uniqueRooms);
    });

  },

  render: _.template(`
    <option><%-roomName%></option>
  `)
};
