---
title: "REAPER, un DAW completo"
description: "Probando DAW gratuitos. Siempre he querido componer canciones (no sé por qué), pero nunca he sido capaz de encontrar un DAW en condiciones. Pero Reaper, por ahora, es mi DAW preferido, aunque con algunas limitaciones. ¿Qué es un DAW? De forma literal DAW es Digital Audio Workspace o, en español, espacio de trabajo de audio digital. Por tanto, es un programa o varios de ellos que nos permiten generar, editar y manipular audio digital."
subtitle: "Probando DAW gratuitos"
author: "Alessio2122"
datetime: "2026-08-21"
img: "/assets/articles/01-REAPER-un-DAW-completo/01-Banner 1900x432 75.jpg"
category: "Música/DAW"
---

Siempre he querido componer canciones (no sé por qué), pero nunca he sido capaz de encontrar un DAW en condiciones. Pero Reaper, por ahora, es mi DAW preferido, aunque con algunas limitaciones.

> [!article-content]- Contenido del artículo

> [!question] ¿Qué es un DAW?
> De forma literal DAW es Digital Audio Workspace o, en español, espacio de trabajo de audio digital. Por tanto, es un programa o varios de ellos que nos permiten generar, editar y manipular audio digital.

## Mi inexperiencia con LMMS

Hace mucho tiempo encontré el DAW <a href="https://lmms.io/" target="_blank" rel="noopener noreferrer">LMMS</a> (Linux MultiMedia Studio), y lo único que componía eran ritmos y melodías con una falta aparente de conocimiento musical (ya que no me di cuenta de que la música que estaba aprendiendo con la guitarra valía, de alguna forma, en otros campos). Un día, la inspiración me llegó y, tras ganar un poco de conocimiento de plugins VST y otros temas que se deberían conocer para utilizar un DAW, compuse una canción (ahora mismo irrelevante), una canción que no denotaba esa falta de conocimiento, algo mejor que todo lo demás. Pero creando esta canción, me percaté de algunas cosas un tanto limitantes:

1. **Soporte limitado para plugins**: solo permite utilizar plugins VST y no VST3 u otros.
2. **Imposibilidad de grabación de audio mediante micrófonos o interfaces de audio**: no se puede grabar audio, aunque sí que se puede introducir mediante varios plugins que vienen con el programa.

> [!tambor]- ¿Qué es un plugin en un DAW?
> Podemos distinguir dos tipos: los que modifican el funcionamiento del DAW y los que generan sonido o lo modifican.
>
> El segundo tipo es del que más se suele hablar cuando se dice plugin en el contexto de los DAW. En esta categoría tenemos varios tipos:
>
> - VST. 
> - VSTi.
> - VST2.
> - VST3.
> - CLAP.
> - LV2.
> - AU.
> - AAX.
> - Y muchos más.
>
> Estos plugins suelen venir en distintos formatos dependiendo de la plataforma:
>
> - Windows:
>     - VST2: .dll.
>     - VST3: .vst3.
> - Linux:
>     - VST2: .so.
>     - VST3: .vst3.
> - Mac:
>     - VST2: .vst.
>     - VST3: .vst3.
>     - Audio Units (AU): .component.
>
> Hay algunos problemas de compatibilidad con VST2 Y VST3 de Windows funcionando en Windows, ya que los formatos son distintos. Para solucionar esto podemos usar capas de compatibilidad como <a href="https://yabridge.org/" target="_blank" rel="noopener noreferrer">yabridge</a>.

Es un buen DAW, de <a href="https://github.com/LMMS/lmms" target="_blank" rel="noopener noreferrer">código abierto</a> y se puede <a href="https://lmms.io/download" target="_blank" rel="noopener noreferrer">descargar</a> de forma **gratuita** para la gran mayoría de los sistemas operativos modernos. De hecho, para poder usar VST3, se puede usar <a href="https://kushview.net/element/" target="_blank" rel="noopener noreferrer">Element</a> o <a href="https://kx.studio/Applications:Carla" target="_blank" rel="noopener noreferrer">Carla</a>, y para grabar se puede grabar el audio en otras aplicaciones y luego importarlo en el DAW.

No tengo muchos problemas con este DAW, pero, como cualquier otro, quise buscar algún que otro programa más para probar, y encontré otro DAW.

## ¿Y FL Studio?

Lo he probado, y está muy bien si pagara... La prueba gratuita me permitió componer una canción que me gustaría recuperar, porque, guardé el archivo y como es una prueba no puedo abrirlo porque solo permite abrir los archivos una vez: la vez que los creas.

Tiene compatibilidad con VST, pero, no pude probarlo lo suficiente... Si quieren probarlo, les recomiendo guardar la canción en pistas MIDI si quieren guardar sus canciones.

Tras esto, me di cuenta de que no me serviría, y en una búsqueda rápida encontré el siguiente DAW y del que les vengo a hablar.

## REAPER. Sí, con mayúsculas

<a href="https://www.reaper.fm/" target="_blank" rel="noopener noreferrer">REAPER</a>, Rapid Environment for Audio Production, Engineering, and Recording (entorno rápido para producción, ingeniería y grabación de audio), es un DAW versátil con compatibilidad con plugins, grabación, edición de sonido, efectos virtuales de fábrica y muchas otras cosas.

La pregunta que todos tendrán es si es de pago, y la respuesta es más compleja: REAPER es un DAW que cuesta dinero, pero existe una versión de prueba oficial y completamente funcional durante 60 días sin registro ni datos personales, pero, tras haberlo probado más de 60 días, no pide una suscripción ni un pago, simplemente, sale la ventana de esperar 5 segundos para que se piensen si comprarlo. Por tanto, es completamente gratuito durante un tiempo indefinido, aunque, es recomendable que, si le han dado bastante uso y es indispensable para ustedes, lo paguen.

![](/assets/articles/01-REAPER-un-DAW-completo/01-Interfaz.png)
> Interfaz del DAW REAPER

### Instalación

1. Descargue el instalador de su sistema operativo en <a href="https://www.reaper.fm/download.php" target="_blank" rel="noopener noreferrer">REAPER | Download</a>.
2. Ejecute el instalador descargado. En Linux está dentro de una carpeta comprimida que deberá descomprimir. Para ejecutarlo en Linux deberá abrirlo desde el terminal usando el comando `sh install-reaper.sh` dentro de la carpeta descomprimida.
3. Siga los pasos de la instalación y espere hasta que se complete.
4. Ejecute el programa instalado.

> [!mas] REAPER nos proporciona en su página web una <a href="https://dlz.reaper.fm/userguide/ReaperUserGuide779a.pdf" target="_blank" rel="noopener noreferrer">guía de usuario</a> completa que indica con precisión todos los pasos a realizar.

### Abriendo el programa

Al abrir el DAW siempre saldrá esta ventana:

![](/assets/articles/01-REAPER-un-DAW-completo/01-Ventana.png)
> Ventana del DAW REAPER que indica que el programa es de pago

Deberá esperar cinco segundos y pulsar `Still Evaluating` o cerrar la ventana.

### Creando un proyecto

Para crear un proyecto debe ir al apartado superior de `File` y al subapartado de `New project` o pulse directamente `Ctrl` + `N`.
Este proyecto, como al abrir el programa la primera vez no tendrá ninguna pista. Para crear una pista, pulse en la izquierda, en el gestor de pistas el botón `⊕`, haga click derecho en el gestor y pulse `Insert new track` o pulse `Ctrl` + `T`.

Ahora que ya tiene una pista, tiene dos opciones para usarla: usar MIDI o audio.

#### Usando MIDI y plugins

Para añadir un plugin en una pista, pulse el botón en el que pone `FX` en la pista, y seleccione el plugin que quiera.

Los plugins se guardan en una carpeta distinta en cada sistema operativo. En el apartado superior de `Options` y en el subapartado de preferences o pulsando `Ctrl` + `P` podrá entrar a la configuración del DAW. En el apartado de la izquierda llamado `Plugins` podrá seleccionar el tipo de plugin y la carpeta o carpetas en la que se hayan para que el programa los escanee y pueda abrirlos.

Si ha introducido los plugins en las carpetas indicadas, tras cerrar el programa y volver a abrirlo o en la configuración de los plugins y pulsando a `Re-scan...`, se escanearán los plugins para poder usarlos.

Teniendo ya una pista con plugins puede introducir MIDI en la pista y tiene varias opciones para hacerlo:

- **Grabar el MIDI en la pista pulsando las entradas de un controlador MIDI**: puede pulsar el botón circular rojo de la pista, y seleccione la entrada a MIDI donde pone `IN FX`. Si no tiene un controlador MIDI pero quiere tocar con las teclas del ordenador puede usar el teclado virtual del DAW que puede abrir en el apartado superior de `View` y en el subapartado de `Virtual MIDI Keyboard` o pulsando directamente `Alt` + `T`. Esto armará la pista para la grabación. Para poder grabar deberá pulsar el botón inferior rojo que comenzará a grabar las pistas armadas.
- **Crear un item MIDI en la pista** pulsando el apartado superior de `Insert` y en el subapartado de `New MIDI item`.
- **Editar un item MIDI en el piano roll** haciendo doble click en las pistas. Si ha usado algún DAW anteriormente, es igual que muchos de estos programas, posicionando las notas en una cuadrícula con un tiempo y fuerza definidos.

#### Usando audio

De la misma forma que grabó MIDI, puede grabar audio mono o estéreo. Puede aplicar efectos a este audio en el apartado de `FX` de la pista.

### A problemas, soluciones

Por ahora, en este DAW he encontrado algunos problemas que, en cuanto me he puesto a buscar, he solucionado, y es que, para mi gusto, el control del _zoom_ y del _scroll_ no estaban bien integrados con la rueda del ratón, en el apartado superior de `Actions` y en el subapartado de `Show action list...` pude cambiar los controles.

#### Los plugins de DAW que instalé

Otro de los problemas es que algunas de las configuraciones de los plugins no se guardaban de una sesión a otra, por ello, instalé <a href="https://sws-extension.org/" target="_blank" rel="noopener noreferrer">SWS/S&M</a>. Este plugin de DAW da algunas opciones que el programa no nos da por defecto. En el apartado de `Extensions`, en el subapartado de `SWS/S&M` y en el segundo subapartado de `Snapshots` podremos crear versiones completas de nuestro proyecto incluyendo todas las configuraciones de plugins, sonidos, MIDI y efectos que tengamos puestos al crear la versión.

Seguro que se habrá fijado de que el único idioma de este programa es el inglés, por ello, descargué e instalé un <a href="https://www.reaperespa.com/descargar-reaper-en-espanol/" target="_blank" rel="noopener noreferrer">paquete de traducciones hecho por Javier Robledo</a> que ha traducido completamente el DAW. Para instalarlo, hay que abrir el archivo `.ReaperLangPack` con REAPER y se instalará. Tras reiniciar el programa se traducirá **todo** al español.

## Conclusión

Todos estos DAW son buenos, funcionan bien y tienen un potencial suficiente como para componer canciones completas y complejas de una forma poco engorrosa. 

> [!ejemplo] No digo que componer no sea complejo, solo digo que estos programas hacen el trabajo más sencillo para plasmar las ideas en el programa.

En próximos artículos les hablaré de plugins VST y efectos que les recomiendo.