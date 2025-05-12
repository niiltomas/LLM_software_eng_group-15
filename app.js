// 1️⃣ Toggle Comparison Table Visibility
const toggleTableBtn = document.getElementById('toggle-table');
const comparisonTable = document.querySelector('#comparison-table table');

toggleTableBtn.addEventListener('click', () => {
    if (comparisonTable.style.display === 'none') {
        comparisonTable.style.display = 'table';
        toggleTableBtn.textContent = 'Hide Table';
    } else {
        comparisonTable.style.display = 'none';
        toggleTableBtn.textContent = 'Show Table';
    }
});

// 2️⃣ Pop-up Alert Message on Trivia Button Click
const triviaButton = document.getElementById('trivia-button');

triviaButton.addEventListener('click', () => {
    alert('Fun Fact: The largest LLMs are trained on datasets of over 1 trillion tokens!');
});

// 3️⃣ Theme Color Toggle (Light/Dark Mode)
const themeToggleBtn = document.createElement('button');
themeToggleBtn.textContent = 'Toggle Dark Mode';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.bottom = '20px';
themeToggleBtn.style.right = '20px';
themeToggleBtn.style.padding = '10px 15px';
themeToggleBtn.style.backgroundColor = '#333';
themeToggleBtn.style.color = '#fff';
themeToggleBtn.style.border = 'none';
themeToggleBtn.style.borderRadius = '5px';
themeToggleBtn.style.cursor = 'pointer';

document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark Mode Styles via JS Class
const darkModeStyle = document.createElement('style');
darkModeStyle.textContent = `
    body.dark-mode {
        background-color: #121212;
        color: #e0e0e0;
    }

    body.dark-mode section {
        background-color: #1e1e1e;
        color: #e0e0e0;
    }

    body.dark-mode a {
        color: #90caf9;
    }

    body.dark-mode th {
        background-color: #333;
    }

    body.dark-mode button {
        background-color: #555;
    }

    body.dark-mode button:hover {
        background-color: #777;
    }
`;

document.head.appendChild(darkModeStyle);
