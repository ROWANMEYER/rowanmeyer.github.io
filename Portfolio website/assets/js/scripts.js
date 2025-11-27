// Project data
const projects = [
  {
    title: 'Truck Fuel Consumption Dashboard',
    desc: 'Automated Excel dashboard for tracking fuel usage, KM/L, and monthly summaries.',
    img: 'assets/images/fuel_dashboard.png',
    download: 'downloads/fuel_dashboard.xlsx',
    tags: ['Excel','Dashboard','Fuel']
  },
  {
    title: 'Driver & Fleet Dispatch System',
    desc: 'Select drivers, trucks and trailers and generate WhatsApp-ready messages.',
    img: 'assets/images/dispatch_system.png',
    download: 'downloads/dispatch_system.xlsx',
    tags: ['Excel','Dispatch']
  },
  {
    title: 'Driver Tracker (proof of concept)',
    desc: 'A small Python/Flask proof-of-concept to track driver activity and simple reports.',
    img: 'assets/images/driver_tracker.png',
    download: '',
    tags: ['Python','Flask']
  }
];

// Function to generate each project card
function createProjectCard(p){
  const div = document.createElement('div');
  div.className = 'bg-slate-800 p-5 rounded-xl card-hover';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="rounded-lg mb-4 h-48 w-full object-cover" />
    <h3 class="text-xl font-semibold">${p.title}</h3>
    <p class="text-slate-400 mt-2">${p.desc}</p>

    <div class="mt-4 flex items-center justify-between gap-3">
      ${
        p.download
        ? `<a href="${p.download}" class="inline-block bg-teal-500 text-slate-900 py-2 px-4 rounded-lg font-medium">Download</a>`
        : `<span class="text-slate-500">Demo</span>`
      }
      <div class="text-sm text-slate-400">
        ${p.tags.map(t => `<span class="mr-2">#${t}</span>`).join('')}
      </div>
    </div>
  `;
  return div;
}

// Add cards to grid
const grid = document.getElementById('projectsGrid');
projects.forEach(p => grid.appendChild(createProjectCard(p)));

console.log("Projects loaded");
