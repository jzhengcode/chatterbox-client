var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#room-dropdown'),

  initialize: function() {
    //set up event listener for Add Room button click

    //filter message view on the selected room

    let roomNames = [];
    for (let messageObj of Messages.storage) {
      roomNames.push(messageObj.roomname);
    }
    let uniqueRooms = _.uniq(roomNames);
    uniqueRooms = uniqueRooms.map(function(roomString) {
      let roomObj = {};
      roomObj.roomName = roomString;
      return roomObj;
    });
    Rooms.storage = uniqueRooms;
    for (let roomName of Rooms.storage) {
      RoomsView.$select.append(RoomsView.render(roomName));
    }
  },

  render: _.template(`
    <option><%-roomName%></option>
  `)
};
