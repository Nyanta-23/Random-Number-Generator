const RENDER_EVENT = 'render_results';
const arrayResultList = [];

window.addEventListener('DOMContentLoaded', function () {
    const gachaButton = document.getElementsByClassName('gacha-button')[0];
    const resetButton = document.getElementsByClassName('reset-button')[0];

    gachaButton.addEventListener('click', function (e) {
        e.preventDefault();
        addGacha();
    });

    resetButton.addEventListener('click', function (e) {
        e.preventDefault();
        resetGacha();
    });
});


// Add Gacha Result list and Displayed for box gacha result
function addGacha() {
    const gachaObject = generateGachaToObject(numberToString());
    arrayResultList.push(gachaObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

// Reset Gacha result list
function resetGacha() {
    const tableForReset = document.getElementsByClassName('table-history')[0];
    tableForReset.innerHTML = '<tr><th>Gacha Number Result</th></tr>';

    document.dispatchEvent(new Event(RENDER_EVENT));
}


function generateGachaToObject(results) {
    return {
        results
    }
}


// Render browser
document.addEventListener(RENDER_EVENT, function () {
    const resultElement = document.getElementsByClassName('result-value')[0];
    const tableAdd = removeElementGachaResults();
    resultElement.innerText = '0';

    for (let index = 0; index < arrayResultList.length; index++) {

        const getIndex = arrayResultList[index];
        const listTableElement = createElementsGacha(getIndex);

        resultElement.innerText = getIndex.results;
        tableAdd.appendChild(listTableElement);
    }

});



// Gacha program
function numberSet() {
    const userInput = document.getElementById('to-input').value;
    const i = 1;
    let resultVariable;
    parseInt(userInput);

    if (i > userInput) {
        alert('Kamu harus isi nilai Lebih Dari satu!\nYou must fill value more than one!');
        return;
    } else {
        resultVariable = numberRandom(userInput);
        return resultVariable;
    }
}


function numberRandom(valueUser) {
    let number = Math.random() * valueUser;
    if (number == 0 || number < valueUser) {
        number += 1;
    }
    return parseInt(number);
}

function numberToString() {
    let getResults = numberSet();
    if (getResults == undefined) {
        return getResults = 0;
    }
    return getResults.toString();
}



// create Elements
function createElementsGacha(itemNumber) {
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');

    tableData.innerText = itemNumber.results;
    tableRow.append(tableData);
    
    return tableRow;
}



// Remove current gacha result from element
function removeElementGachaResults(){
    const tableForAdd = document.getElementsByClassName('table-history')[0];
    tableForAdd.innerHTML = '<tr><th>Gacha Number Results</th></tr>';
    return tableForAdd;
}

