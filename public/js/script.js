$(function () {
  // GET function
  $('#get-button').on('click', function() {
    $.ajax({
      url: '/api/view',
      contentType: 'application/json',
      success: function(response) {
        console.log('Tulifika', response);
      }
    });
  });

  // POST function
  $('#post-button').on('click', function() {
    $.ajax({
      url: '/api/save',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({name: 'Gertrude Nyenyeshi'}),
      success: function(response) {
        console.log('Watuuuu', response);
      }
    });
  });

  // DELETE function
  $('#delete-button').on('click', function() {
    
  });
});
