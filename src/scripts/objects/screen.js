const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>👥 ${user.followers} seguidores </p>
                                            <p>👤 seguindo ${user.following} pessoas </p>
                                        </div>
                                    </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" targer="_blank">${repo.name}</a>
                                                                    <div class="info-repositorio">
                                                                        <p>🍴 ${repo.forks_count}</p>
                                                                        <p>⭐ ${repo.stargazers_count}</p>
                                                                        <p>👀 ${repo.watchers_count}</p>
                                                                        <p>👨‍💻 ${repo.language ?? ''}</p>
                                                                    </div>
                                                                </li>`
        )

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => eventsItens += `<li>
                                                        <p>${event.repo.name}</p>
                                                        <p>${event.payload.commits ? event.payload.commits[0].message: ''}</p>
                                                    </li>`
        )

        
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }