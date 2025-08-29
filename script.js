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
  { id: 2, name: "Police Helpline Number", nameEn: "Police", number: "100", category: "Emergency", icon: "./assets/police.png" },
  { id: 3, name: "Fire Service Number", nameEn: "Fire Service", number: "120", category: "Emergency", icon: "./assets/fire-service.png" },
  { id: 4, name: "Ambulance Service", nameEn: "Ambulance", number: "105", category: "Emergency", icon: "./assets/ambulance.png" },
  { id: 5, name: "Woman & Child Helpline", nameEn: "woman & child", number: "109", category: "Emergency", icon: "./assets/brac.png" },
  { id: 6, name: "Bangladesh-Railway Service", nameEn: "Bangladesh-Railway", number: "106", category: "Emergency", icon: "./assets/Bangladesh-Railway.png" },
];

// Render service cards
const cardSection = document.getElementById("cardSection");
services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg shadow flex flex-col items-center gap-2";

  card.innerHTML = `
    <img src="${service.icon}" alt="${service.name}" class="w-12 h-12">
    <div class="flex justify-between items-center w-full">
  <div>
    <h3 class="font-bold">${service.name}</h3>
    <p class="text-sm">${service.nameEn}</p>
    <p class="text-md font-bold">${service.number}</p>
    <span class="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">${service.category}</span>
  </div>
  <button class="heart-btn text-black-500 text-xl">
  <i class="fa-regular fa-heart"></i>
</button>

</div>

    <div class="flex gap-2 mt-2">
      <button class="copy-btn bg-blue-500 text-white px-3 py-1 rounded w-[143px]"><i class="fa-regular fa-copy"></i> Copy</button>
      <button class="call-btn flex justify-center items-center gap-2 bg-green-500 text-white px-3 py-1 rounded w-[143px]">
  <i class="fas fa-phone"></i>
  <span>Call</span>
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
  // Copy number to clipboard
  navigator.clipboard.writeText(service.number)
    .then(() => {
      alert(`Copied ${service.number} to clipboard!`);
      copies++;
      copyCount.textContent = copies;
    })
    .catch(err => {
      console.error("Failed to copy:", err);
    });
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

  // Add to history with current time
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";

  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  li.innerHTML = `
    <span>${service.name} - ${service.number}</span>
    <span class="text-gray-500 text-xs">${timeString}</span>
  `;

  historyList.appendChild(li);
});

//clear history functionality
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = ""; // clears all <li> items
});
 
});