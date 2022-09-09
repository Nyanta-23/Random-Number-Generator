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


function addGacha() {
    const gachaObject = generateGachaToObject(numberToString());
    arrayResultList.push(gachaObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}


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


document.addEventListener(RENDER_EVENT, function () {
    const tableForAdd = document.getElementsByClassName('table-history')[0];
    const resultElement = document.getElementsByClassName('result-value')[0];
    resultElement.innerText = '0';

    for (let i = 0; i < arrayResultList.length; i++) {

        const getIndex = arrayResultList.shift(i);
        const listTableElement = createElementsGacha(getIndex);

        resultElement.innerText = getIndex.results;
        tableForAdd.appendChild(listTableElement);
    }

});




// Gacha Program is done
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

    if (itemNumber.results != arrayResultList.results) {
        tableData.innerText = itemNumber.results;
        tableRow.append(tableData);

        return tableRow;
    }

}