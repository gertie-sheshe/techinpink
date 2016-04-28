$(function () {
  // GET function
  $(document).on('click', '#get-button', function() {
    $.ajax({
      url: '/api/view',
      contentType: 'application/json',
      success: function(response) {
        var data = response.members;
        // Clear the tbody
        $('tbody').html('');
        // Loop and append
        data.forEach(function print(member) {
          $('tbody').append(
            '<tr>' +
              "<td class='name'>' + member.name +'</td>" +
              '<td>Andela</td>' +
              '<td>Saturday</td>' +
              "<td><i class='material-icons delete'>delete</i></td>" +
            '</tr>'
          );
        });
      }
    });
  });

  // POST function
  $(document).on('click', '#post-button', function() {
    // Get the value from form
    var attendee = $('#attendee').val();
    // If user has not filled form
    if (!attendee) {
      Materialize.toast('Please fill with a name :)', 4000);
    } else {
      // Post value if user has filled name
      $.ajax({
        url: '/api/save',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({name: attendee}),
        success: function(response) {
          $('#get-button').trigger('click');
          Materialize.toast('Successfully added new user', 4000);
        }
      });
    }
  });

  // DELETE Button
  $(document).on('click', '.delete', function() {
    var del = $(this).closest('tr');
    var id = del.find('.name').text();
    console.log(del);
    console.log(id);
  });

  // GET STARTED button function
  $('#get-started').on('click', function() {
    document.getElementById('o').innerHTML = "<h4 id='register'>Enter Attendee: </h4> " +
    "<form class='col s12'> <div class='row'> <div class='input-field col s6'>  " +
    " <input type='text' id='attendee'>  <label for='attendee'> Attendee" +
    "</label> <a id='post-button' class='waves-effect waves-light btn #880e4f pink darken-4'>Add</a>" +
    "</div> </div> </form> <a id='get-button' class='waves-effect waves-light btn #880e4f pink darken-4 col s2 offset-s8'>View all</a><hr>" +
    "<div class='row'><table class='striped col s10 offset-s1' id='list'> " +
    "<thead><tr><th>Name</th><th>Venue</th><th>Day</th>" +
    "</tr></thead><tbody><tr><td class='name'>Gertrude</td><td>Andela</td><td>Saturday</td><td>" +
    "<i class='material-icons delete'>delete</i></td></tr></tbody></table></div>";

    $('#get-started').text('');
    // this.id = "go-back";
  });
});
