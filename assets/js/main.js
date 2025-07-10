




// Fetching data from JSON file and populating the grid
//Home page dynamic grid
fetch('/assets/data/home-data.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('dynamicGrid');
    data.sort((a, b) => (a.sort || 0) - (b.sort || 0));

    data.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col';
      col.style.backgroundImage = `url(${item.image})`;

      const h3 = document.createElement('h3');
      h3.textContent = item.title;

      if (!item.link || item.link === "#") {
        col.classList.add('disabled');
        const overlay = document.createElement('div');
        overlay.className = 'coming-soon';
        overlay.textContent = 'Coming Soon';
        col.appendChild(overlay);
      } else {
        col.onclick = () => window.location.href = item.link;
      }

      col.appendChild(h3);
      grid.appendChild(col);
    });
  })
  .catch(err => console.error("Failed to load grid data:", err));
