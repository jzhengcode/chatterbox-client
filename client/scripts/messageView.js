var MessageView = {

  //Chelsea notes: think we use provided render property below to construct message blocks

  //Janet notes: need to pull information (values?) and use render to translate said info
  //Need to do escaping to avoid XSS attacks
  render: _.template(`
      <div class="chat">
        <div class="username"><a href="#" class="makeFriend <%-username%>"><%-username%></a></div>
        <div class="message-body"><%-text%></div>
        <div class="timestamp"><%-createdAt%></div>
        <div class="room-name"><%-roomname%></div>
    `),

  renderFriend: _.template(`
      <div class="chat friend">
        <div class="username"><a href="#" class="makeFriend <%-username%>"><%-username%></a></div>
        <div class="message-body"><%-text%></div>
        <div class="timestamp"><%-createdAt%></div>
        <div class="room-name"><%-roomname%></div>
    `)
};