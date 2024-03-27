function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue === 'Yes') {
        var currentDate = new Date();
        var formattedDate = formatDateToServiceNow(currentDate);

        g_form.setValue('date_of_termination', formattedDate);
        g_form.setReadOnly('date_of_termination', true);
        alert("Please call the service desk at 1-888-677-NUMBER or ext. 1111 after submitting the form to notify us of the immediate termination.");
    } else {
        g_form.clearValue('date_of_termination');
        g_form.setReadOnly('date_of_termination', false);
    }
}

function formatDateToServiceNow(date) {
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-based
    var day = ('0' + date.getDate()).slice(-2);
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);

    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
