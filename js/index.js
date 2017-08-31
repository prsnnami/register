function edit(data) {
  console.log(this.id);
  console.log('clicked');
}
$(document).ready(function () {
  let modal = $('#modal');
  let data;
  $.ajax({
    type: "GET",
    url: "/dummy.json",
    success: function (response) {
      for(let data of response) {
        console.log(data);
        $('#tbody').append(
          tr(
            td(lPad(data.id, 3) + id(data).prop('outerHTML')) +
            td(data.name) +
            td(data.phone_number)
          )
        )
      }
    }
  });
  
  $('#modal-open').click(function() {
    modal.show();
  });
  
  $('#close').click(function() {
    modal.hide();
  });

  let td = x => `<td>${x}</td>`;
  let id = x => {
    let span = $('<span class="edit-link" onclick="edit()"><i class="fa fa-pencil"></i></span>');
    edit.bind(data);
    return span;
  };
  

  let tr = arg => `<tr>${arg}</tr>`;
  
  function lPad(num, length) {
    return ('0000000000'+num).slice(0-length);
  }
});

