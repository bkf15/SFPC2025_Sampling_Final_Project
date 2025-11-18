fetch('projects/index.json')
    .then(r => r.json())
    .then(projects => {
        const container = document.getElementById('projects');

        projects.forEach(p => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h2>${p.title}</h2>
                <img src="${p.image}" width="300">
                <audio controls src="${p.song}"></audio>
                `;
            container.appendChild(div);
        });
    });