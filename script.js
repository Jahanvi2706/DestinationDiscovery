const destinations = [
    { name: "Bali", interest: "beach", budget: "medium" },
    { name: "Swiss Alps", interest: "adventure", budget: "high" },
    { name: "Kyoto", interest: "culture", budget: "medium" },
    { name: "Grand Canyon", interest: "adventure", budget: "medium" },
    { name: "Machu Picchu", interest: "adventure", budget: "high" },
    { name: "Hawaii", interest: "beach", budget: "high" },
    { name: "Amazon Rainforest", interest: "nature", budget: "medium" },
    { name: "Paris", interest: "culture", budget: "medium" },
    { name: "Goa", interest: "beach", budget: "low" },
    { name: "Rishikesh", interest: "adventure", budget: "low" },
    { name: "Pokhara", interest: "adventure", budget: "low" },
    { name: "Munnar", interest: "adventure", budget: "low" },
    { name: "Kyoto", interest: "culture", budget: "low" },
    { name: "Varanasi", interest: "culture", budget: "low" },
    { name: "Rome", interest: "culture", budget: "high" },
    { name: "New York City", interest: "culture", budget: "high" },
    { name: "Coorg", interest: "nature", budget: "low" },
    { name: "Maldives", interest: "nature", budget: "high" },
    { name: "New Zealand", interest: "nature", budget: "high" },
    { name: "Ziro Valley", interest: "nature", budget: "low" }
];

function displayDestinations(interest, budget) {
    const resultsContainer = document.getElementById('destinations-list');
    resultsContainer.innerHTML = ''; 

    const filteredDestinations = destinations.filter(dest => {
        return dest.interest === interest && dest.budget === budget;
    });

    if (filteredDestinations.length === 0) {
        resultsContainer.innerHTML = '<p>No destinations found for your preferences.</p>';
    } else {
        filteredDestinations.forEach(dest => {
            const div = document.createElement('div');
            div.classList.add('destination');
            div.innerHTML = `<h3>${dest.name}</h3><p>Interest: ${dest.interest}</p><p>Budget: ${dest.budget}</p>`;
            resultsContainer.appendChild(div);
        });
    }
}

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const interest = document.getElementById('interest').value;
    const budget = document.getElementById('budget').value;

    displayDestinations(interest, budget);
});
