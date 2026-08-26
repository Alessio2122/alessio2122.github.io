---
title: "¿Qué tal el cambio a Linux?"
description: "Realmente, mejor. Desde que he tenido un ordenador, comencé con un Linux, siempre. Supongo que era porque el ordenador no aceptaba un Windows, o explotaría. Ese Linux fue un Lubuntu, y para lo que lo usaba, iba genial. Después de tener otro ordenador, instalamos un Linux Mint, y otra vez, iba genial, pero... Me pase a Windows (dejando la mitad de mi ordenador en Linux), y, aunque funcionaba bastante bien, después de unos años, acabé harto. Quizás por la inexistencia de soporte que sufrirá el Windows 10 en unos años o quizás porque iba muy lento, después de usar Windows 11 un año en mi último ordenador, busqué una distribución de Linux que encajara conmigo, y encontré una muy curiosa."
subtitle: "Realmente, mejor"
author: "Alessio2122"
datetime: "2026-08-23"
img: "/assets/articles/03-Que-tal-el-cambio-a-Linux/03-Banner 1900x432 75.jpg"
category: "Programación/Sistemas operativos"
---

Desde que he tenido un ordenador, comencé con un Linux, siempre. Supongo que era porque el ordenador no aceptaba un Windows, o explotaría. Ese Linux fue un  <a href="https://lubuntu.me/" target="_blank" rel="noopener noreferrer">Lubuntu</a>, y para lo que lo usaba, iba genial. Después de tener otro ordenador, instalamos un <a href="https://linuxmint.com/" target="_blank" rel="noopener noreferrer">Linux Mint</a>, y otra vez, iba genial, pero... Me pase a Windows (dejando la mitad de mi ordenador en Linux), y, aunque funcionaba bastante bien, después de unos años, acabé harto. Quizás por la inexistencia de soporte que sufrirá el Windows 10 en unos años o quizás porque iba muy lento, después de usar Windows 11 un año en mi último ordenador, busqué una distribución de Linux que encajara conmigo, y encontré una muy curiosa.

> [!article-content]- Contenido del artículo

## Pero antes...

¿Qué es Linux? Si queremos una definición muy escueta, podemos definirlo como el núcleo (o como se llama realmente, kernel) de un sistema operativo, que lanzó en 1991 el estudiante finés Linus Torvalds como un proyecto personal. Pero un kernel no vale de nada sin algo que ejecutar, porque el núcleo solo se comunica con el dispositivo. En ello entra <a href="https://www.gnu.org/" target="_blank" rel="noopener noreferrer">GNU</a> (pronunciado _/njuː/_, _ñu_), que creó todas las herramientas y programas que forman todo el entorno de usuario y que permiten que el sistema operativo esté completo. De esta forma, se crea GNU/Linux. 

> [!bocadillo] En la página web de la distribución <a href="https://www.debian.org/index.es.html" target="_blank" rel="noopener noreferrer">Debian</a> explican <a href="https://www.debian.org/releases/forky/s390x/ch01s02.es.html" target="_blank" rel="noopener noreferrer">qué es GNU/Linux</a>.

¿Y saben lo mejor? Que el núcleo de Linux es libre bajo la _Licencia Pública General de GNU v2 (GPLv2)_, y normalmente, otras partes de las distribuciones, usan también otras licencias libres.

### Infinidad de distribuciones

¿Y qué es una distribución de Linux? Es un sistema operativo con el kernel de Linus Torvalds con algunas de las herramientas de GNU, una interfaz de usuario (que gestiona las ventanas, la barra de tareas y el escritorio) y un gestor de paquetes.

## _CachyOS has caught me_ (CachyOS me atrapó)

Pues bien, tras buscar un poco, encontré <a href="https://cachyos.org/" target="_blank" rel="noopener noreferrer">CachyOS</a>, una distribución de Linux basada en <a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">Arch Linux</a>. Arch es una distribución ligera que no tiene una interfaz gráfica, sino que es solo un terminal como esta:

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhxcHczn5bniKUe1zbWa947t_YRfT2autUiaYwBG2Jg&s=10)

Con esto, podemos hacer infinidad de cosas, pero, para mi uso personal, no puedo quedarme solo con esto, así que, pasamos a CachyOS, que gestiona y optimiza los paquetes, descarga todos los drivers necesarios y prepara nuestro sistema para un funcionamiento inmejorable.

Realmente, CachyOS no tiene una interfaz gráfica definida sino que podemos seleccionar en la instalación del sistema operativo, y yo seleccioné la que en mi opinión es más bonita: <a href="https://kde.org/es/plasma-desktop/" target="_blank" rel="noopener noreferrer">KDE Plasma</a>. Aunque hay algunas muy chulas como <a href="https://www.gnome.org/es/" target="_blank" rel="noopener noreferrer">GNOME</a> o <a href="https://hypr.land/" target="_blank" rel="noopener noreferrer">Hyprland</a>.

Ahora tenemos una interfaz de usuario gráfica y curiosa, y también tenemos un sistema completo. Ahora, ¿qué podemos hacer?

## Instalando paquetes

Si necesitamos buscar en Internet, necesitamos un buscador, y para instalarlo tenemos dos opciones: usar el terminal o usar un gestor gráfico (que solo muestra lo mismo que haría el terminal en imagen).

Para usar el terminal tendremos que entrar a la aplicación de terminal del gestor de ventanas que tengamos o cualquier otro terminal que nos guste. En KDE Plasma es Konsole. Tendremos que usar el comando `pacman`, que no manejo con precisión, por ello les dejo una <a href="https://wiki.archlinux.org/title/Pacman_(Espa%C3%B1ol)" target="_blank" rel="noopener noreferrer">guía sobre este comando</a>.

Para usar un gestor gráfico, debemos instalarlo con el terminal, y en las webs de estos gestores tenemos el comando de instalación. Yo utilizo <a href="https://www.seafoam-labs.org/shelly-alpm/" target="_blank" rel="noopener noreferrer">Shelly</a>, aunque existen otras opciones como <a href="https://calamares.codeberg.page/" target="_blank" rel="noopener noreferrer">Calamares</a> o <a href="https://wiki.manjaro.org/index.php?title=Pamac" target="_blank" rel="noopener noreferrer">Pamac</a>.

En Arch podemos instalar paquetes desde distintos repositorios (lugares donde se guardan los paquetes para que nosotros los descarguemos) con distintos formatos:

- Pacman: incluyendo los paquetes de <a href="https://archlinux.org/packages/" target="_blank" rel="noopener noreferrer">Arch</a> y los de <a href="https://packages.cachyos.org/" target="_blank" rel="noopener noreferrer">CachyOS</a>.
- AUR: en el repositorio de <a href="https://aur.archlinux.org/" target="_blank" rel="noopener noreferrer">Arch</a> (estos paquetes han sido creados por usuarios y el uso de los archivos está a su propio riesgo).

Y en la gran mayoría de distribuciones tenemos:

- Flatpak: en el repositorio de <a href="https://flathub.org/es" target="_blank" rel="noopener noreferrer">Flathub</a>.
- Snapcraft: en el repositorio de <a href="https://snapcraft.io/" target="_blank" rel="noopener noreferrer">Snapcraft</a>.  

Además, tenemos AppImages, que son programas de Linux que funcionan en cualquier distribución.

> [!rehacer] Actualizando paquetes
> CachyOS trae una aplicación llamada Cachy-Update que al abrirlo actualizará los paquetes con solo tener que poner las letras `s`, `n`, su contraseña y el intro (para introducir las letras o su contraseña en el programa). Al final, pedirá si reiniciar el ordenador o no.
> Si quiere abrir Cachy-Update puede usar la aplicación de la lista de aplicaciones o escribir `cachy-update` o `arch-update` en el terminal.
> Este programa ejecuta los comandos de actualización de `pacman`, los paquetes AUR y muchos otros en un solo lugar para tener todo a punto.
> Conviene revisar esto todos los días, ya que, los paquetes de Linux suelen actualizarse muy a menudo (hay días que salen cientos).

Entonces, ya podemos instalar paquetes. ¿Qué más?

## Gestionando archivos

Como en los paquetes, podemos usar el terminal o un gestor gráfico. ¿No ve un patrón? Eso es porque Linux se basa en el terminal, y los gestores gráficos solo hacen más sencillas las tareas, porque, tristemente, mucha gente no conoce (ni quiere aprender) estos comandos de consola.

En KDE Plasma podemos usar Dolphin para gestionar nuestros archivos, aunque yo instalé <a href="https://doublecmd.sourceforge.io/" target="_blank" rel="noopener noreferrer">Double Commander</a> porque estoy acostumbrado al programa <a href="https://www.ghisler.com/" target="_blank" rel="noopener noreferrer">Total Commander</a> de Windows.