
tinymce.init({
    //ID should be unique, so won't target otehr <textarea> tags
    selector: '#tiny',
    height: 500,
    theme: 'modern',
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | mybutton',
    plugins: 'lists advlist image imagetools link',
    setup: function(editor){
        editor.addButton('mybutton', {
        text: "Insert User Name",
        onclick: function () {
            editor.windowManager.open({
            title: 'Insert User Name - Custom Dialog',
            width: 720,
            height: 110,
            body: [
              {type: 'textbox', name: 'firstName', label : 'First Name'},
              {type: 'textbox', name: 'lastName', label : 'Last Name'}],
            onSubmit: function(e){
              editor.setContent(`<span class="abc">${e.data.firstName}  ${e.data.lastName}</span>`)
            }
          })
        }
      })
  }
});


// tinymce.WindowManager({
//
// })
