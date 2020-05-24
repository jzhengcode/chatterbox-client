var FormView = {

  $form: $('form'),
  $input: $('#message'),
  $room: $('#room-dropdown'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var messageInput = FormView.$input.val();
    var user = App.username;
    var room = FormView.$room.val();

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
      setTimeout(MessagesView.render, 3000);
      FormView.$input.val('');
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};