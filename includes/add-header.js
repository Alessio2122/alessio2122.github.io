fetch("/includes/header.html")
    .then(r => r.text())
    .then(html => {
        document.querySelector("#header").innerHTML = html;

        document.querySelectorAll("#header script").forEach(oldScript => {
            const s = document.createElement("script");
            [...oldScript.attributes].forEach(a => s.setAttribute(a.name, a.value));
            s.textContent = oldScript.textContent;
            oldScript.replaceWith(s);
        });
    });