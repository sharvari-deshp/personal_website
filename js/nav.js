function initFadeNav(fadeSelector) {
    document.querySelectorAll("a[href]").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            const targetURL = new URL(href, window.location.href);

            if (targetURL.href === window.location.href) return;

            e.preventDefault();

            document.querySelectorAll(fadeSelector).forEach(el => {
                el.classList.add("fade");
            });

            setTimeout(() => {
                window.location.href = targetURL.href;
            }, 400);
        });
    });
}

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        document.querySelectorAll(".fade").forEach(el => el.classList.remove("fade"));
    }
});
