function setActiveSidebarLink() {
    const currentHash = window.location.hash.substring(1) || 'home'
    const navLinks = document.querySelectorAll('#sidebar .nav-link')

    navLinks.forEach(link => {
        const href = link.getAttribute('href')

        if(!href || !href.startsWith('#')) {
            link.classList.remove('active')
            return
        }

        const hashTarget = href.startsWith('#') ? href.substring(1) : null

        if(hashTarget === currentHash) link.classList.add('active')
        else link.classList.remove('active')
    })
}

function updateQuantity(productId, change) {
            const input = event.target.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value) + change;
            if (value >= 1) {
                input.value = value;
            }
        }

// hook into the routing
window.addEventListener('hashchange', setActiveSidebarLink)
window.addEventListener('DOMContentLoaded', () => {
    router()
    setActiveSidebarLink()
})