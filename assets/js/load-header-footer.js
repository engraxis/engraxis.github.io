document.addEventListener("DOMContentLoaded", function () {

    function load(id, file, callback) {
        fetch(file)
            .then(res => res.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (callback) callback(); // run callback after content is loaded
            });
    }

    // Load navbar and set active link
    load("navbar-placeholder", "navbar.html", function() {
        const links = document.querySelectorAll('#navbar .nav-links a');
        let currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "" || currentPage === "/") {
            currentPage = "index.html";
        }


        links.forEach(link => {
        const linkPage = link.getAttribute('href');

            if (linkPage === currentPage) {
                link.classList.add('active');

                // 🔥 If this link is inside a dropdown, activate the parent too
                const dropdown = link.closest('.dropdown');
                if (dropdown) {
                    const parentLink = dropdown.querySelector('.dropbtn');
                    parentLink.classList.add('active');
                }
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Load footer
    load("footer-placeholder", "footer.html");

});


