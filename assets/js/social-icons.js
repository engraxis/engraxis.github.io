// Array of social links
const socialLinks = [
    { name: "Email", url: "mailto:atah@es.aau.dk", iconClass: "fas fa-envelope" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/engrabxis/", iconClass: "fab fa-linkedin" },
    { name: "GitHub", url: "https://github.com/engraxis", iconClass: "fab fa-github" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=y4iZqrgAAAAJ&view_op=list_works&sortby=pubdate", iconImg: "assets/images/scholar_icon.png" },
    { name: "Research Gate", url: "https://scholar.google.com/citations?hl=en&user=y4iZqrgAAAAJ&view_op=list_works&sortby=pubdate", iconImg: "assets/images/r_gate_icon.png" },
    { name: "Website", url: "https://vbn.aau.dk/da/persons/atah/", iconClass: "fas fa-globe" },
    { name: "Facebook", url: "https://www.facebook.com/dead.abx/", iconClass: "fab fa-facebook" },
];

// Function to render icons
function renderSocialIcons(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.setAttribute("aria-label", link.name);

        if (link.iconClass) {
            const i = document.createElement("i");
            i.className = link.iconClass;
            a.appendChild(i);
        } else if (link.iconImg) {
            const img = document.createElement("img");
            img.src = link.iconImg;
            img.alt = link.name;
            a.appendChild(img);
        }

        container.appendChild(a);
    });
}

// Automatically render on page load
document.addEventListener("DOMContentLoaded", () => renderSocialIcons("social-icons"));

