document.querySelectorAll(".favorite").forEach((button) => {
    button.addEventListener("click", () => {
        const saved = button.getAttribute("aria-pressed") !== "true";
        button.setAttribute("aria-pressed", String(saved));
        const image = button.querySelector("img");
        image.src = button.dataset.liked
            ? saved
                ? button.dataset.liked
                : button.dataset.unliked
            : `./assets/img/figma/${button.dataset.section}-Group${saved ? "852" : "853"}.svg`;
    });
});

const searchForm = document.querySelector(".blog-search");

searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchForm.elements.search.value.trim().toLowerCase();
    let matches = 0;

    document.querySelectorAll(".blog-card").forEach((card) => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        card.hidden = !title.includes(query);
        if (!card.hidden) matches += 1;
    });

    document.querySelector(".blog-empty").hidden = matches > 0;
    document.querySelector(".pagination").hidden = query.length > 0;
});

searchForm?.elements.search.addEventListener("search", () => {
    searchForm.requestSubmit();
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector(".contact-form__status").textContent =
        "This form is a preview. Your message has not been sent.";
});

document.querySelector("[data-print]")?.addEventListener("click", () => {
    window.print();
});

document.querySelector("[data-share]")?.addEventListener("click", async () => {
    const status = document.querySelector(".recipe-actions__status");
    try {
        await navigator.clipboard.writeText(window.location.href);
        status.textContent = "Recipe link copied.";
    } catch {
        status.textContent = "Copy the page address to share this recipe.";
    }
});

document
    .querySelector(".subscribe__form")
    ?.addEventListener("submit", (event) => {
        event.preventDefault();
        document.querySelector(".subscribe__status").textContent =
            "Thank you! This is a demo form; your email has not been sent.";
    });
