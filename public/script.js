$(document).ready(function(){
    $('.accordion-button').on('hidden.bs.collapse', function () {
        // find the children and close them
        $(this).find('.collapse').collapse('hide');
    });
});

