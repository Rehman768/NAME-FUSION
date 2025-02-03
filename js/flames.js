function calculateFlames() {
    const name1Input = document.getElementById('name1Input').value;
    const name2Input = document.getElementById('name2Input').value;
    const resultBox = document.getElementById('resultBox');

    if (!name1Input || !name2Input) {
        resultBox.innerHTML = 'Please enter both names.';
        return;
    }

    const flamesResult = getFlamesResult(name1Input, name2Input);
    resultBox.innerHTML = `
        <div class="result-content">
            <h3>FLAMES Result</h3>
            <p>Relationship: ${flamesResult.result}</p>
            <p>Compatibility: ${flamesResult.percentage}%</p>
        </div>
    `;
}

function getFlamesResult(name1, name2) {
    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    const combinedName = name1.toLowerCase() + name2.toLowerCase();
    let uniqueChars = '';

    for (let char of combinedName) {
        if (uniqueChars.includes(char)) {
            uniqueChars = uniqueChars.replace(char, '');
        } else {
            uniqueChars += char;
        }
    }

    const flamesIndex = uniqueChars.length % flames.length;
    const result = flames[flamesIndex];
    const percentage = Math.floor(Math.random() * 21) + 80; // Random percentage between 80 and 100

    return { result, percentage };
}
