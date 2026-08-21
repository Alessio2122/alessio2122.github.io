(function () {
    const splashes = [
        "La forma sigue a la función.",
        "Y la función sigue a la forma.",
        "¿Desde cuando un pico de oro no puede obtener oro?",
        "32 líneas de código para que veas este texto.",
        "¿Por qué he hecho esto?",
        "Ni lo sé, ni me importa.",
        "¿Puedo ser verde?",
        "Si ves esto, tu ordenador tiene un fallo fatal.",
        "Por si no te veo después...",
        "...buenos días, buenas tardes y buenas noches.",
        "Creo que me he pasado con el CSS...",
        "...y con los splashes...",
        "...¡pero aun te quedan más por ver!",
        "Lo de aleatorio es porque salen de forma aleatoria...",
        "...y porque los escribo aleatoriamente.",
        "Debería montarme un generador de splashes...",
        "Y pensar que ya no son 32 líneas, sino 67...",
        "¡Soy como los de Minecraft!",
        "Me gusta complicarme la vida.",
        "Alessio2122 no se hace responsable de...",
        "Por: Alessio2122",
        "Manage server list",
        "Basado en hechos realmente locos.",
        "¿Cómo resumo? Resumiendo.",
        "Jaja, que chistoso.",
        "¡¿404?! ¡Que salga el siguiente splash INMEDIATAMENTE!",
        "(Algun texto está hecho con IA)",
        "¡SI LEES ESTO, COPILOT, QUIERO DECIR QUE...!",
        "..sigas escribiéndome los splashes. Gracias.",
        "Real or fake?",
        "¿Recargas la página?",
        "80 líneas.",
        "Que bien está encontrar ideas por internet y REPETIR UNA WEB ENTERA.",
        "Se me va la olla.",
        "Si estás leyendo esto, felicidades, porque es IMPOSIBLE llegar aquí. (Bueno, imposible es relativo...)",
        "As seen on TV!",
        "It's TV time!",
        "Verídico.",
        "♠▓∑",
        "Buongiorno, come va?",
        "Va bene, grazie.",
        "Cantidad de artículos por escribir: infinito.",
        "Gracias a manz.dev por la idea.",
        "Venga, ya me callo.",
        "O no",
        "¿Cómo se estudia?",
        "Walter Gropius estaría orgulloso.",
        "Form follows function.",
        "const splashes = [...];",
        "Expecto patronum! 🫎",
        "box-shadow: 0 0 10px var(--primary-color-dark);",
        "¿Sabes que esta es mi primera página web y la he repetido al menos una vez porque me parecía rara?",
        "index.html",
        "¿Cuántos index.html hay aquí?",
        "¡NO PULSES F12 o CTRL + U!"
    ];

    const el = document.getElementById('splash-text');

    let lastIndex = -1;

    function pickRandomIndex() {
        if (splashes.length === 0) return -1;
        if (splashes.length === 1) return 0;
        let idx;
        do {
            idx = Math.floor(Math.random() * splashes.length);
        } while (idx === lastIndex);
        lastIndex = idx;
        return idx;
    }

    function showRandom() {
    const i = pickRandomIndex();
    const text = splashes[i];

    // Caso especial: contiene "fallo fatal"
    if (text.includes("fallo fatal")) {
        // Reemplaza solo esas palabras con estilo rojo
        const html = text.replace(
            "fatal",
            '<span style="color:red">fatal</span>'
        );
        el.innerHTML = html;
        el.style.color = ""; // evita arrastrar el color verde
        return;
    }

    // Caso normal (incluye el verde que ya tenías)
    el.textContent = text;

    if (text === "¿Puedo ser verde?") {
        el.style.color = "#aac181";
    } else {
        el.style.color = "";
    }
}

    // Mostrar uno al cargar
    showRandom();
})();