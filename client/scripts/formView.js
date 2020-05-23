var FormView = {

  $form: $('form'),
  $input: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    //get value from input
    //if value isn't blank
      //pass in value to Parse.create
      //call messsageView.render -> refresh everything
    var messageInput = FormView.$input.val();
    //do stuff to message input
      //fix me
    //
    if (messageInput !== '') {
      Parse.create(messageInput);
      messsageView.render();
    }
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};