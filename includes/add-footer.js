fetch("/includes/footer.html")
    .then(r => r.text())
    .then(html => {
        document.querySelector("#footer").innerHTML = html;

        document.querySelectorAll("#footer script").forEach(oldScript => {
            const s = document.createElement("script");
            [...oldScript.attributes].forEach(a => s.setAttribute(a.name, a.value));
            s.textContent = oldScript.textContent;
            oldScript.replaceWith(s);
        });
    });