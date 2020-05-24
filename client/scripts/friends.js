var Friends = {
  storage: [],

  //create storage array
  //set up event listener for a click on any username
    //on click, add username to Friends storage
    //have a popup that says "added to friends" or something
  selectFriend: function() {
    $('.makeFriend').each(function() {
      $(this).on('click', function() {
        //get id of element that triggered the event, which should be username
        let user = event.target.classList[1];
        //add username to Friends storage
        if (!_.contains(Friends.storage, user)) {
          Friends.storage.push(user);
          //pop up that says "<username> added to friends"
          alert(`${user} added to friends!`);
          //for each element with this user id...
          let $userID = $(`.${user}`);
          $userID.each(function() {
            $(this).parent().parent().addClass('friend');
          });
        } else {
          alert(`Okay come on - ${user} is already a friend...`);
        }
      });
    });
  }
};