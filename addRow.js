// Add row
(function() {
    var editor = $('#playground-screenSet iframe').contents();
    var activeControl = editor.find('.gigya-composite-control-active');

    if(!activeControl || !activeControl.hasClass('gigya-composite-control')) {
        alert("Please select a screen-set control in the UI Builder");
        return;
    }

    var currentRow = activeControl.closest('.gigya-layout-row');
    currentRow.after('<div class="gigya-layout-row ui-droppable ui-sortable"></div>');
})();
