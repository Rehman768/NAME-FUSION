function generateName() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const startingLetter = document.getElementById('startingLetter').value.toLowerCase();
    const religion = document.querySelector('input[name="religion"]:checked').value;
    const resultBox = document.getElementById('resultBox');

    if (!gender || !startingLetter || !religion) {
        resultBox.innerHTML = 'Please fill in all fields.';
        return;
    }

    const names = generateNameBasedOnInput(gender, startingLetter, religion);
    resultBox.innerHTML = `Generated Names: ${names.join(', ')}`;
}

function refreshName() {
    const resultBox = document.getElementById('resultBox');
    const currentNames = resultBox.innerHTML.replace('Generated Names: ', '').split(', ');

    const refreshedNames = currentNames.map(name => {
        if (name.length > 4) {
            return name.slice(0, 2) + name.slice(-2);
        } else {
            return name + 'y';
        }
    });

    resultBox.innerHTML = `Generated Names: ${refreshedNames.join(', ')}`;
}

function generateNameBasedOnInput(gender, startingLetter, religion) {
    const names = {
        boy: {
            hindu: ['Aarav', 'Vivaan', 'Aditya', 'Krishna', 'Rohan', 'Aryan', 'Dhruv', 'Karan', 'Manish', 'Nikhil', 'Arjun', 'Bharat', 'Chirag', 'Dev', 'Eshan', 'Farhan', 'Gaurav', 'Harsh', 'Ishaan', 'Jatin', 'Kunal', 'Laksh', 'Mohan', 'Naveen', 'Om', 'Pranav', 'Rahul', 'Sagar', 'Tarun', 'Uday', 'Varun', 'Yash', 'Zain'],
            muslim: ['Ayaan', 'Zaid', 'Ibrahim', 'Omar', 'Rehan', 'Ahmed', 'Bilal', 'Faisal', 'Hassan', 'Junaid', 'Khalid', 'Latif', 'Mansoor', 'Naseem', 'Osman', 'Parvez', 'Qasim', 'Rafiq', 'Sajid', 'Tariq', 'Usman', 'Waseem', 'Yasir', 'Zubair'],
            christian: ['Ethan', 'Noah', 'Liam', 'James', 'Lucas', 'Benjamin', 'Henry', 'Samuel', 'Matthew', 'Daniel', 'Andrew', 'Brian', 'Charles', 'David', 'Edward', 'Frank', 'George', 'Harry', 'Isaac', 'Jack', 'Kevin', 'Louis', 'Michael', 'Nathan', 'Oliver', 'Paul', 'Quincy', 'Robert', 'Steven', 'Thomas', 'Victor', 'William', 'Xavier', 'Zachary']
        },
        girl: {
            hindu: ['Aaradhya', 'Ananya', 'Diya', 'Isha', 'Kavya', 'Meera', 'Nisha', 'Pooja', 'Riya', 'Sanya', 'Aditi', 'Bhavna', 'Chitra', 'Deepa', 'Esha', 'Farah', 'Gita', 'Hema', 'Indira', 'Jaya', 'Kiran', 'Lata', 'Maya', 'Naina', 'Ojas', 'Priya', 'Radha', 'Sita', 'Tara', 'Uma', 'Vidya', 'Yamini', 'Zara'],
            muslim: ['Ayesha', 'Zara', 'Fatima', 'Mariam', 'Noor', 'Amina', 'Hiba', 'Laila', 'Nadia', 'Sana', 'Aaliyah', 'Bushra', 'Carmen', 'Dina', 'Eman', 'Farah', 'Ghazal', 'Huda', 'Iqra', 'Jameela', 'Khadija', 'Layla', 'Maha', 'Nura', 'Omaira', 'Parveen', 'Qamar', 'Rania', 'Sahar', 'Tala', 'Umm', 'Wafa', 'Yasmin', 'Zainab'],
            christian: ['Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail', 'Bella', 'Chloe', 'Daisy', 'Ella', 'Faith', 'Grace', 'Hannah', 'Ivy', 'Julia', 'Katherine', 'Lily', 'Madeline', 'Natalie', 'Ophelia', 'Penelope', 'Quinn', 'Rebecca', 'Sarah', 'Tessa', 'Ursula', 'Violet', 'Willow', 'Xena', 'Zoe']
        }
    };

    const filteredNames = names[gender][religion].filter(name => name.toLowerCase().startsWith(startingLetter));
    return filteredNames.length > 0 ? filteredNames.slice(0, 3) : ['No name found'];
}
