const routes = {
    home: './pages/home.html',
    account: './pages/account.html',
    favorites: './pages/favorites.html',
    cart: './pages/cart.html',
    stationery: './pages/stationery.html'
}

// hash is the current #page
function loadPage(page) {
    const path = routes[page] || './pages/404.html'
    fetch(path).then(res => res.text())
               .then(html => {
                    document.getElementById('page-content').innerHTML = html
               })
               .catch(() => {
                    document.getElementById('page-content').innerHTML = '<h2>Error loading page.</h2>'
               })


    console.log('Sidebar: ', sidebar)
}

function router() {
    const hash = window.location.hash.substring(1) || 'home'
    console.log('Routing to:', hash)

    const sidebar = document.getElementById('sidebar')
    const header = document.getElementById('main-header')
    const pageContent = document.getElementById('page-content')

    if (!sidebar || !header || !pageContent) {
        console.error('Required elements missing.')
        return
    }

    const isAuthPage = (hash === 'account')

    if (isAuthPage) {
        sidebar.classList.add('d-none')
        sidebar.style.setProperty('display', 'none', 'important')
        header.classList.add('d-none')
        pageContent.classList.remove('col-md-9', 'col-lg-10')
        pageContent.classList.add('col-12')
        pageContent.style.marginLeft = '0'
    } else {
        sidebar.classList.remove('d-none')
        sidebar.style.setProperty('display', '', 'important')
        header.classList.remove('d-none')
        pageContent.classList.remove('col-12')
        pageContent.classList.add('col-md-9', 'col-lg-10')
        pageContent.style.marginLeft = ''
    }

    loadPage(hash)
}

window.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)