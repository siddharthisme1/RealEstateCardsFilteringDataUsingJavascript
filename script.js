const properties = [];
const propertyContainer = document.getElementById('propertyContainer');

// Generate 50 Property Cards with Random Data
const locations = ["Bangalore", "Delhi", "Mumbai"];
const statuses = ["Ready to Move", "Near Possession", "Under Construction"];
const projectTypes = ["Villa", "Apartment", "Plot"];
const prices = ["Under 1.4 Cr", "1.4 Cr - 2.5 Cr", "2.5 Cr - 5 Cr"];

for (let i = 1; i <= 50; i++) {
  properties.push({
    id: i,
    title: `Property ${i}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    projectType: projectTypes[Math.floor(Math.random() * projectTypes.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
    imgUrl: 'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600'
  });
}




function renderProperties(propertyList) {
  propertyContainer.innerHTML = '';
  propertyList.forEach(property => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="status-badge">${property.status}</div>  
      <img src="${property.imgUrl}" alt="${property.title}">
      <h4>${property.title}</h4>
      
     
      <div class="row location-status">
        <div class="icon-text">
          <i class="fas fa-map-marker-alt"></i> <br>
          <p class="location">${property.location}</p>
        </div>
       
        <div class="icon-text">
          <i class="fas fa-info-circle"></i><br>
          <p class="status">${property.status}</p>
        </div>
      </div>

     
      <div class="row price-project">
        <div class="icon-text">
          <i class="fas fa-dollar-sign"></i><br>
          <p class="price">${property.price}</p>
        </div>
       
        <div class="icon-text">
          <i class="fas fa-building"></i><br>
          <p class="project-type">${property.projectType}</p>
        </div>
      </div>

      <div class="button-container">
        <button class="btn view-more">View More</button>
        <button class="btn schedule-visit">Schedule Site Visit</button>
      </div>
    `;
    propertyContainer.appendChild(card);
  });
}

// function renderProperties(propertyList) {
//     propertyContainer.innerHTML = '';
//     propertyList.forEach(property => {
//       const card = document.createElement('div');
//       card.classList.add('card');
//       card.innerHTML = `
//       <div class="status-badge">${property.status}</div>  
//       <img src="${property.imgUrl}" alt="${property.title}">
//         <h4>${property.title}</h4>
//         <p class="location">${property.location}</p>
//         <p class="status">${property.status}</p>
//         <p class="project-type">${property.projectType}</p>
//         <p class="price">Price: ${property.price}</p>
//         <div class="button-container">
//           <button class="btn view-more">View More</button>
//           <button class="btn schedule-visit">Schedule Site Visit</button>
//         </div>
//       `;
//       propertyContainer.appendChild(card);
//     });
//   }
  
  // <img src="${property.imgUrl}" alt="${property.title}">
  //       <h4>${property.title}</h4>
  //       <p class="location">${property.location}</p>
  //       <p class="status">${property.status}</p>
  //       <p class="project-type">${property.projectType}</p>
  //       <p class="price">Price: ${property.price}</p>
  //       <div class="button-container">
  //         <button class="btn view-more">View More</button>
  //         <button class="btn schedule-visit">Schedule Site Visit</button>
  //       </div>
// Initial render of all properties
renderProperties(properties);

// Filters
const locationFilters = document.querySelectorAll('.location-filter');
const statusFilters = document.querySelectorAll('.status-filter');
const projectFilters = document.querySelectorAll('.project-filter');
const priceFilters = document.querySelectorAll('.price-filter');

function applyFilters() {
  const selectedLocations = Array.from(locationFilters)
    .filter(filter => filter.checked)
    .map(filter => filter.value);

  const selectedStatuses = Array.from(statusFilters)
    .filter(filter => filter.checked)
    .map(filter => filter.value);

  const selectedProjects = Array.from(projectFilters)
    .filter(filter => filter.checked)
    .map(filter => filter.value);

  const selectedPrices = Array.from(priceFilters)
    .filter(filter => filter.checked)
    .map(filter => filter.value);

  const filteredProperties = properties.filter(property => {
    const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(property.location);
    const matchStatus = selectedStatuses.length === 0 || selectedStatuses.includes(property.status);
    const matchProject = selectedProjects.length === 0 || selectedProjects.includes(property.projectType);
    const matchPrice = selectedPrices.length === 0 || selectedPrices.includes(property.price);

    return matchLocation && matchStatus && matchProject && matchPrice;
  });

  renderProperties(filteredProperties);
}

// Add event listeners for all filters
[...locationFilters, ...statusFilters, ...projectFilters, ...priceFilters].forEach(filter => {
  filter.addEventListener('change', applyFilters);
});

// Reset Filters
document.getElementById('resetFilters').addEventListener('click', () => {
  [...locationFilters, ...statusFilters, ...projectFilters, ...priceFilters].forEach(filter => {
    filter.checked = false;
  });
  renderProperties(properties);
});
