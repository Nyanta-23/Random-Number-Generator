const RENDER_EVENT = 'render_results';
const arrayResultList = [];

window.addEventListener('DOMContentLoaded', function () {
    const gachaButton = document.querySelector('.gacha-button');
    const resetButton = document.querySelector('.reset-button');

    gachaButton.addEventListener('click', function (e) {
        e.preventDefault();
        addGacha();
    });

    resetButton.addEventListener('click', function (e) {
        e.preventDefault();
        resetGacha();
    });

});


function addGacha() {
    const gachaObject = generateGachaToObject(numberToString());
    arrayResultList.push(gachaObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}


function resetGacha() {
    arrayResultList.splice(0, arrayResultList.length);

    const tableForReset = document.querySelector('.table-history');
    tableForReset.innerHTML = '<tr><th>Gacha Number Results</th></tr>';

    document.dispatchEvent(new Event(RENDER_EVENT));
}


function generateGachaToObject(results) {
    return {
        results
    }
}


document.addEventListener(RENDER_EVENT, function () {

    const resultElement = document.getElementsByClassName('result-value')[0];

    const tableAdd = removeElementGachaResults();

    resultElement.innerText = '0';

    for (let index = 0; index < arrayResultList.length; index++) {

        const getIndex = arrayResultList[index];
        const listTableElement = createElementsGacha(getIndex);

        resultElement.innerText = getIndex.results;
        tableAdd.append(listTableElement);
    }
});


// Remove current gacha result from element
function removeElementGachaResults() {
    const tableForAdd = document.getElementsByClassName('table-history')[0];
    tableForAdd.innerHTML = '<tr><th>Gacha Number Results</th></tr>';

    return tableForAdd;
}


// Gacha Program
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
