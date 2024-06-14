let history = [];

function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultContainer = document.getElementById('result');
    const previousRequestsContainer = document.getElementById('previousRequestsContainer');

    if (isNaN(min) || isNaN(max)) {
        resultContainer.textContent = 'Please enter valid numbers.';
        return;
    }

    if (min >= max) {
        resultContainer.textContent = 'Min should be less than max.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultContainer.textContent = `Random number: ${randomNumber}`;

    // Добавляем текущий результат в историю
    history.unshift(randomNumber);

    // Ограничиваем историю только тремя последними значениями
    if (history.length > 3) {
        history.pop(); // Удаляем старый результат, если история длиннее трех элементов
    }

    // Отображаем список предыдущих запросов
    previousRequestsContainer.innerHTML = '';
    history.forEach((item, index) => {
        const inputElement = document.createElement('div');
        inputElement.textContent = `Previous result was: ${item}`;
        previousRequestsContainer.appendChild(inputElement);
    });

    if (history.length >= 3) {
        previousRequestsContainer.style.display = 'block';
    }
}