function generateMealPlan() {
    const form = document.getElementById('mealPlanForm');
    const email = form.email.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];

    let mealPlan = `<h1>Meal Plan for ${form.name.value}</h1>
                    <p>Goal for the Week: ${form.goal.value}</p>
                    <p>Email: ${email}</p>`;

    days.forEach(day => {
        mealPlan += `<h2>${day}</h2><ul>`;
        meals.forEach(meal => {
            const mealInputId = `${day.toLowerCase()}${meal}`;
            mealPlan += `<li>${meal}: ${form[mealInputId].value}</li>`;
        });
        mealPlan += `</ul>`;
    });

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Generated Meal Plan</title>
            <style>
                body {
                    font-family: 'Cutive', sans-serif;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
            </style>
        </head>
        <body>
            ${mealPlan}
        </body>
        </html>
    `);
    newWindow.document.close();
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function printMealPlan() {
    window.print();
}
