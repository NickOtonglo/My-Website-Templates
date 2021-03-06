// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html
let editor;

ClassicEditor
    .create( document.querySelector('#editor') )
    .then( newEditor => {
        editor = newEditor;
    } )
    .catch( error => {
        console.error(error);
    } );

document.querySelector('#btnSubmit').addEventListener('click', () => {
    const editorData = editor.getData();
    // console.log(editorData);
} );