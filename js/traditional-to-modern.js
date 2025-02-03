function generateName() {
    const nameInput = document.getElementById('nameInput').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const resultBox = document.getElementById('resultBox');

    if (!nameInput || !gender) {
        resultBox.innerHTML = 'Please enter a name and select a gender.';
        return;
    }

    let modernName = '';

    if (gender === 'male') {
        modernName = modernizeMaleName(nameInput);
    } else if (gender === 'female') {
        modernName = modernizeFemaleName(nameInput);
    }

    resultBox.innerHTML = `Modernized Name: ${modernName}`;
}

function refreshName() {
    const resultBox = document.getElementById('resultBox');
    const currentName = resultBox.innerHTML.replace('Modernized Name: ', '');

    let refreshedName = currentName;

    if (currentName.length > 6) {
        refreshedName = currentName.slice(0, 2) + currentName.slice(-2);
    } else {
        refreshedName = currentName + 'x';
    }

    resultBox.innerHTML = `Modernized Name: ${refreshedName}`;
}

function modernizeMaleName(name) {
    // Logic to modernize male names using string manipulation
    let modernName = name;

    if (name.length > 6) {
        modernName = name.slice(0, 3) + name.slice(-3);
    } else {
        modernName = name + 'y';
    }

    return capitalizeFirstLetter(modernName);
}

function modernizeFemaleName(name) {
    // Logic to modernize female names using string manipulation
    let modernName = name;

    if (name.length > 6) {
        modernName = name.slice(0, 2) + name.slice(-2);
    } else {
        modernName = name + 'a';
    }

    return capitalizeFirstLetter(modernName);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
