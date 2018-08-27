// Add column
(function() {
    var editor = $('#playground-screenSet iframe').contents();
    var activeControl = editor.find('.gigya-composite-control-active');

    if(!activeControl || !activeControl.hasClass('gigya-composite-control')) {
        alert("Please select a screen-set control in the UI Builder");
        return;
    }

    var currentRow = activeControl.closest('.gigya-layout-row');

    // Add/Remove classes from row
    currentRow.addClass('with-two-inputs');
    currentRow.removeClass (function (index, className) {
        return (className.match (/\bcols\S+/g) || []).join(' ');
    });

    // Count current cells and add col to row
    var newCell = '<div class="gigya-layout-cell ui-droppable ui-sortable"></div>';
    var cellCount = currentRow.find('.gigya-layout-cell').length;

    if (!cellCount) {
        // No cols in row
        currentRow.contents().wrapAll(newCell);
    }

    // Add new cell to the row
    currentRow.append(newCell);

    if (cellCount > 1) {
        // Two or more cols already in row, add inline width
        var colWidth = Math.round(100 / (cellCount + 1));
        currentRow.find('.gigya-layout-cell').css('width', colWidth + '%');
    }
})();
