// Initial values
let coins = 100;
let copies = 0;
let hearts = 0;

const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const heartCount = document.getElementById("heartCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Sample services
const services = [
  { id: 1, name: "National Emergency Number", nameEn: "National Emergency", number: "999", category: "Emergency", icon: "./assets/emergency.png" },
  { id: 2, name: "Police Helpline Number", nameEn: "Police", number: "999", category: "Emergency", icon: "./assets/police.png" },
  { id: 3, name: "Fire Service Number", nameEn: "Fire Service", number: "999", category: "Emergency", icon: "./assets/fire-service.png" },
  { id: 4, name: "Ambulance Service", nameEn: "Ambulance", number: "1994-9999999", category: "Emergency", icon: "./assets/ambulance.png" },
  { id: 5, name: "Woman & Child Helpline", nameEn: "woman & child", number: "109", category: "Emergency", icon: "./assets/emergency.png" },
  { id: 6, name: "Water Help", nameEn: "Water", number: "106", category: "Utility", icon: "icons/water.png" },
];

// Render service cards
const cardSection = document.getElementById("cardSection");
services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg shadow flex flex-col items-center gap-2";

  card.innerHTML = `
    <img src="${service.icon}" alt="${service.name}" class="w-12 h-12">
    <h3 class="font-bold">${service.name}</h3>
    <p class="text-sm">${service.nameEn}</p>
    <p class="text-md font-bold">${service.number}</p>
    <span class="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">${service.category}</span>
    <button class="heart-btn">
      <img src="icons/heart.png" alt="heart" class="w-6 h-6">
    </button>
    <div class="flex gap-2 mt-2">
      <button class="copy-btn bg-blue-500 text-white px-3 py-1 rounded">Copy</button>
      <button class="call-btn flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded">
        <i class="fas fa-phone"></i> Call
      </button>
    </div>
  `;
  cardSection.appendChild(card);

  // Heart button functionality
  card.querySelector(".heart-btn").addEventListener("click", () => {
    hearts++;
    heartCount.textContent = hearts;
  });

  // Copy button functionality
  card.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(service.number);
    alert(`Copied ${service.name} number: ${service.number}`);
    copies++;
    copyCount.textContent = copies;
  });

  // Call button functionality
  card.querySelector(".call-btn").addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coins -= 20;
    coinCount.textContent = coins;
    alert(`Calling ${service.name} at ${service.number}`);

    // Add to history
    const li = document.createElement("li");
    li.textContent = `${service.name} - ${service.number}`;
    historyList.appendChild(li);
  });
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
