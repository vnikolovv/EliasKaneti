var spinnerContainer = document.createElement('div');
spinnerContainer.className = 'spinner-container';
spinnerContainer.id = 'spinner-container';
document.body.appendChild(spinnerContainer);

var spinner = document.createElement('div');
spinner.className = 'spinner';
spinnerContainer.appendChild(spinner);

spinnerContainer.style.display = 'flex';

document.onreadystatechange = function () {
    var spinnerContainer = document.getElementById('spinner-container');

    if (document.readyState === 'complete') {
        spinnerContainer.style.display = 'none';
    } else {
        spinnerContainer.style.display = 'flex';
    }
};
