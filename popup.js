function addRow() {
    chrome.tabs.executeScript(null, {file: "addRow.js"}, function() {
        $(".msg").hide();
        $("#success-row").show();
    });
}

function addColumn() {
    chrome.tabs.executeScript(null, {file: "addCol.js"}, function() {
        $(".msg").hide();
        $("#success-col").show();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.executeScript(null, {file: "jquery-3.2.1.min.js"});
    $(".msg").hide();

    document.getElementById('addRow').addEventListener('click', addRow);
    document.getElementById('addCol').addEventListener('click', addColumn);

    chrome.tabs.executeScript(null, {file: "isControlSelected.js"}, function(result) {
        if(!result || !result[0]) {
            $("#select-control").show();
            $(".btn").attr('disabled','disabled');
        }
    });
});
