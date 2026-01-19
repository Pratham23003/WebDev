
// Sample user data
const users = [];

//async function to get data from random USER API
const url = "https://randomuser.me/api/?results=5";
const data = fetch(url);
data
.then(raw => raw.json())
.then(data => {
    data.results.forEach((result)=>{
        console.log(result);
        users.push({
            name : result.name.first + " " + result.name.last,
            email : result.email,
            role : result.location.city,
            avatar : result.picture.large,
            bio : result.gender
        });
    });
    renderUserCards();
})
.catch((err)=>{
    console.log("error :", err);
})


// Function to render user cards
function renderUserCards() {
    const container = document.getElementById('cardsContainer');
    
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform';
        
        card.innerHTML = `
            <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-24"></div>
            <div class="px-6 pb-6">
                <div class="flex justify-center -mt-16 mb-4">
                    <img src="${user.avatar}" alt="${user.name}" class="w-24 h-24 rounded-full border-4 border-white shadow-lg">
                </div>
                <h2 class="text-xl font-bold text-gray-800 text-center mb-1">${user.name}</h2>
                <p class="text-sm text-purple-600 font-semibold text-center mb-3">${user.role}</p>
                <p class="text-gray-600 text-center text-sm mb-4">${user.bio}</p>
                <p class="text-gray-500 text-sm text-center mb-4">${user.email}</p>
                <div class="flex gap-2">
                    <button class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">Follow</button>
                    <button class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">Message</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
