function generateNickname() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const resultBox = document.getElementById('resultBox');

    if (!nameInput || !gender) {
        resultBox.innerHTML = 'Please fill in all fields.';
        return;
    }

    const nickname = generateNicknameBasedOnName(nameInput);
    resultBox.innerHTML = `Generated Nickname: ${nickname}`;
}

function refreshNickname() {
    const resultBox = document.getElementById('resultBox');
    const currentNickname = resultBox.innerHTML.replace('Generated Nickname: ', '');

    const refreshedNickname = currentNickname.split('').reverse().join('');
    resultBox.innerHTML = `Generated Nickname: ${refreshedNickname}`;
}

function generateNicknameBasedOnName(name) {
    const nameLower = name.toLowerCase();
    if (nameLower === 'lekhana') {
        return 'Lucky';
    }

    // Add more custom logic here if needed
    return name.slice(0, 3) + 'y';
}

function generateBoyNickname(name) {
    // Logic to generate boy nicknames using string manipulation
    let nickname = name;

    if (name.length > 6) {
        nickname = name.slice(0, 3) + name.slice(-2);
    } else {
        nickname = name + 'y';
    }

    return capitalizeFirstLetter(nickname);
}

function generateGirlNickname(name) {
    // Logic to generate girl nicknames using string manipulation
    let nickname = name;

    if (name.length > 6) {
        nickname = name.slice(0, 2) + name.slice(-2);
    } else {
        nickname = name + 'a';
    }

    return capitalizeFirstLetter(nickname);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
