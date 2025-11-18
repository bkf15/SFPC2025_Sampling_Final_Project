fetch('projects/index.json')
    .then(r => r.json())
    .then(projects => {
        const container = document.getElementById('projects');

        projects.forEach(p => {
            const div = document.createElement('div');
            div.classList.add("project-card");
            div.innerHTML = `
        <h2>${p.title}</h2>
        <h3>${p.author}</h3>
        <img src="${p.image}">
        <audio controls src="${p.song}"></audio>
        <p class="description">${p.description}</p>
      `;
            container.appendChild(div);
        });
    });