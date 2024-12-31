const destinations = [
{ name: "Goa", interest: "beach", budget: "low" },
{ name: "Munnar", interest: "adventure", budget: "low" },
{ name: "Coorg", interest: "nature", budget: "low" },
{ name: "Maldives", interest: "nature", budget: "high" },
{ name: "Ziro Valley", interest: "nature", budget: "low" },
{ name: "Everest Base Camp", interest: "adventure", budget: "medium" },
{ name: "Costa Rica", interest: "adventure", budget: "medium" },
{ name: "Zion National Park", interest: "adventure", budget: "medium" },
{ name: "Patagonia", interest: "adventure", budget: "high" },
{ name: "Bora Bora", interest: "beach", budget: "high" },
{ name: "Santorini", interest: "beach", budget: "high" },
{ name: "Amazon Rainforest", interest: "nature", budget: "medium" },
{ name: "Kruger National Park", interest: "nature", budget: "medium" },
{ name: "Banff National Park", interest: "nature", budget: "medium" },
{ name: "Swiss Alps", interest: "adventure", budget: "high" },
{ name: "Kyoto", interest: "culture", budget: "medium" },
{ name: "Grand Canyon", interest: "adventure", budget: "medium" },
{ name: "Hawaii", interest: "beach", budget: "high" },
{ name: "Rishikesh", interest: "adventure", budget: "low" },
{ name: "Pokhara", interest: "adventure", budget: "low" },
{ name: "Varanasi", interest: "culture", budget: "low" },
{ name: "New York City", interest: "culture", budget: "high" },
{ name: "New Zealand", interest: "nature", budget: "high" },
{ name: "Machu Picchu", interest: "culture", budget: "high" },
{ name: "Cairo", interest: "culture", budget: "medium" },
{ name: "Dubai", interest: "adventure", budget: "high" },
{ name: "Sydney", interest: "beach", budget: "medium" },
{ name: "Barcelona", interest: "culture", budget: "medium" },
{ name: "Iceland", interest: "adventure", budget: "high" },
{ name: "Maui", interest: "beach", budget: "medium" },
{ name: "Malaga", interest: "beach", budget: "low" },
{ name: "Langkawi", interest: "beach", budget: "medium" },
{ name: "Mount Kilimanjaro", interest: "adventure", budget: "high" },
{ name: "Queenstown", interest: "adventure", budget: "medium" },
{ name: "Norwegian Fjords", interest: "nature", budget: "high" },
{ name: "Great Barrier Reef", interest: "nature", budget: "high" },
{ name: "Chobe National Park", interest: "nature", budget: "medium" },
{ name: "Galapagos Islands", interest: "nature", budget: "high" },
{ name: "Athens", interest: "culture", budget: "medium" }
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
