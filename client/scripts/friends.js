var Friends = {
  storage: [],

  toggleStatus: function(node, runBySpec) {
    //get id of element that triggered the event, which should be username
    let user;
    if (node) {
      user = node[0].classList[1];
    } else {
      user = event.target.classList[1];
    }
    //add username to Friends storage
    if (!_.contains(Friends.storage, user)) {

      Friends.storage.push(user);

      //If not run by specRunner, add an alert for the user that the selected friend was added
      //Bypassing this for the spec as any alert will make the test time out and fail
      if (!runBySpec) {
        alert(`${user} added to friends!`);
        let $userID = $(`.${user}`);
        $userID.each(function() {
          $(this).parent().parent().addClass('friend');
        });
      }

    } else {
      alert(`Okay come on - ${user} is already a friend...`);

    }
  }
};