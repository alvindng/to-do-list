//========================BackEnd===========================
function ToDo (toDo) {
  this.do = toDo;
}

//========================FrontEnd==========================
$(function() {
  $('form#doForm').submit(function(event) {
    event.preventDefault();
    var list = $('input#do').val();
    var doList = list.split(', ');
    var newDo;
    for (var i = 0; i < doList.length; i++) {
      // console.log(doList[i]);
      newDo = new ToDo(doList[i]);
      $('ul#output').append('<li class="do">' +
                              '<span class="liItem">' + newDo.do + '</span>' +
                              '<span class="edit">' +
                                '<input type="text" class="newVal">' +
                                '<input type="submit" value="Edit" class="submit">' +
                              '</span>' +
                              '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +
                              '<button class="btn remove" type="remove">' +
                                '<span class="glyphicon glyphicon-remove"></span>' +
                              '</button>' +
                              '&nbsp&nbsp' +
                              '<button class="btn edit-button" type="edit">' +
                                '<span class="glyphicon glyphicon-edit"></span>' +
                              '</button>' +
                            '</li>');
      // console.log(newDo);
    };

    // console.log(newDo);
    $('.remove').click(function() {
      // console.log('remove');
      $(this).parent().remove();
      $('ul#complete').append('<li class="complete">' + $(this).parent().text() + "</li>");
    });

    $('.edit-button').click(function() {
      $(this).siblings('.liItem').hide().siblings('.edit').show();
      $(this).siblings('.edit').children('.submit').click(function() {
        var editVal = $(this).siblings('.newVal').val();
        // console.log(editVal);
        $(this).parent().siblings('.liItem').text(editVal);
        $(this).parent().siblings('.liItem').show().siblings('.edit').hide();
      });
    });

    $('input#do').val('')
  });
});
