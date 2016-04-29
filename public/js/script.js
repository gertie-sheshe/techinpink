$(function () {
  // GET function
  $(document).on('click', '#get-button', function() {
    $.ajax({
      url: '/api/view',
      contentType: 'application/json',
      success: function(response) {
        var data = response.members;
        console.log(data.email);
        // Clear the tbody
        $('tbody').html('');
        // Loop and append
        data.forEach(function print(member) {
          $('tbody').append(
            '<tr>' +
              "<td class='name'>" + member.name +"</td>" +
              "<td class='email'>" + member.email + "</td>" +
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
    var email = $('#email').val();
    console.log(email);
    // If user has not filled form
    if (!attendee || !email) {
      Materialize.toast('Please fill in both fields', 4000);
    } else {
      // Post value if user has filled name
      $.ajax({
        url: '/api/save',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({name: attendee, email:email}),
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
    var email = del.find('.email').text();
    $.ajax({
      url: '/api/delete/' + email,
      method: 'DELETE',
      contentType: 'application/json',
      success: function(response) {
        Materialize.toast(response.message, 4000);
        $('#get-button').trigger('click');
      }
    });
  });

  // GET STARTED button function
  $('#get-started').on('click', function() {
    document.getElementById('o').innerHTML = "<div class='row'><h4 class='col s12' id='register'>Register Attendee: </h4> " +
    "<form class='col s12'> " +
      "<div class='row'> " +
        "<div class='input-field col s6'>  " +
          "<input type='text' id='attendee'> " +
          "<label for='attendee'> Attendee </label>" +
        "</div> " +
      "</div>" +
      "<div class='row'> " +
        "<div class='input-field col s6'>  " +
          "<input type='email' id='email'> " +
          "<label for='email'> Email </label>" +
          "<a id='post-button' class='waves-effect waves-light btn #880e4f pink darken-4'>Add</a>" +
        "</div> " +
      "</div>" +
    "</form> " +
    "<div class='container centered'><a id='get-button' class='waves-effect waves-light btn #880e4f pink darken-4'>View all</a></div><br/><hr>" +
    "<div class='col s12'> " +
      "<table class='striped' id='list'> " +
        "<thead> " +
          "<tr> " +
            "<th>Name</th> " +
            "<th>Email</th> " +
            "<th>Venue</th> " +
            "<th>Day</th>" +
          "</tr> " +
        "</thead> " +
          "<tbody> " +
            "<tr> " +
              "<td class='name'>Gertrude</td> " +
              "<td>gertienyesh@gmail.com</td>" +
              "<td>Andela</td>" +
              "<td>Saturday</td> " +
              "<td><i class='material-icons delete'>delete</i></td> " +
            "</tr> " +
          "</tbody> " +
        "</table> " +
      "</div></div>";
    $('#get-started').text('');
  });
});
