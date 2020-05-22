var MessageView = {

  //Chelsea notes: think we use provided render property below to construct message blocks

  //Need to do escaping to avoid XSS attacks
  render: _.template(`
      <div class="chat">
        <div class="username">test</div>
        <div></div>
      </div>
    `)

};




//Chelsea - copied this from underscore.js documentation:
//=============================================================================
//_.template(templateString, [settings])
//Compiles JavaScript templates into functions that can be evaluated for rendering
//Useful for rendering complicated bits of HTML from JSON data sources
//Template functions can both interpolate values, using <%= … %>
//as well as execute arbitrary JavaScript code, with <% … %>.
//If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>
//When you evaluate a template function, pass in a data object that
//has properties corresponding to the template's free variables.
//More info at underscore.js