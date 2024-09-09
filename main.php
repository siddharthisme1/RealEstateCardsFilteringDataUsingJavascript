<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Property Listings</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <aside class="sidebar">
      <h3>Filters</h3>
      
      <div class="filter-group">
        <h4>Select Status</h4>
        <div>
            
          <label><input type="checkbox" class="status-filter" value="Ready to Move"> Ready to Move</label>
          <label><input type="checkbox" class="status-filter" value="Near Possession"> Near Possession</label>
          <label><input type="checkbox" class="status-filter" value="Under Construction"> Under Construction</label>
        </div>
      </div>
      </select>
      <div class="filter-group">
        <h4>Select Location</h4>
        <div>
          <label><input type="checkbox" class="location-filter" value="Bangalore"> Bangalore</label>
          <label><input type="checkbox" class="location-filter" value="Delhi"> Delhi</label>
          <label><input type="checkbox" class="location-filter" value="Mumbai"> Mumbai</label>
        </div>
      </div>

      <div class="filter-group">
        <h4>Select Project</h4>
        <div>
          <label><input type="checkbox" class="project-filter" value="Villa"> Villa</label>
          <label><input type="checkbox" class="project-filter" value="Apartment"> Apartment</label>
          <label><input type="checkbox" class="project-filter" value="Plot"> Plot</label>
        </div>
      </div>

      <div class="filter-group">
        <h4>Select Price</h4>
        <div>
          <label><input type="checkbox" class="price-filter" value="Under 1.4 Cr"> Under 1.4 Cr</label>
          <label><input type="checkbox" class="price-filter" value="1.4 Cr - 2.5 Cr"> 1.4 Cr - 2.5 Cr</label>
          <label><input type="checkbox" class="price-filter" value="2.5 Cr - 5 Cr"> 2.5 Cr - 5 Cr</label>
        </div>
      </div>

      <button id="resetFilters">Reset Filters</button>
    </aside>

    <main class="content">
      <h1>Property Listings</h1>
      <div id="propertyContainer" class="card-grid"></div>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>
