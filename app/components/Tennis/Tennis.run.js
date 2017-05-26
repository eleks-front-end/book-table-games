export default () => {
    console.log($.fn.select2);
    if ($.fn.select2) {
        $('#select2-1').select2({
            theme: 'bootstrap'
        });
    }
}
