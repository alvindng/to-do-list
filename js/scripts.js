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
      $('ul#output').append('<li class="do">' + newDo.do + "</li>");
      // console.log(newDo);
    };

    // console.log(newDo);
    $('.do').click(function() {
      // console.log('remove');
      this.remove('.do');
    });
  });
});
