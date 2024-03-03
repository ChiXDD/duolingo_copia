//Creacion de todos los elementos del headder
const header = document.createElement('header'); // Creacion del header
header.classList.add('encabezado');

const containerBarra = document.createElement('div'); // Contenedor de la barra
containerBarra.classList.add('containerBarra');
containerBarra.classList.add('desaparecerNav'); // Clase que se usara en un evento futuro

const navBarra = document.createElement('nav'); // Barra de navegacion
navBarra.classList.add('barra');

const enlaceLogo = document.createElement('a');
enlaceLogo.href = 'https://es.duolingo.com/'; // Enlace que te lleva a la pagina de duolingo

const imgLogo = document.createElement('img'); // Imagen del logo
imgLogo.src = 'imagenes/duolingoHeader.svg';
imgLogo.alt = 'Duolingo';
imgLogo.classList.add('logo');

enlaceLogo.appendChild(imgLogo); // Agrega la imagen al enlace

const containerIdiomas = document.createElement('div'); // Contenedor de la barra de idiomas
containerIdiomas.classList.add('idiomas');

const botonIdiomas = document.createElement('button'); // Boton de idiomas
botonIdiomas.type = 'button';
botonIdiomas.classList.add('botonIdiomasHead');

const textoBoton = document.createElement('span'); // Texto del boton
textoBoton.classList.add('textoBoton');
textoBoton.textContent = 'IDIOMA DE LA PAGINA: ESPAÑOL';

const imgFlecha = document.createElement('img'); // Flecha del boton
imgFlecha.src = 'imagenes/flecha.svg';
imgFlecha.alt = 'flecha';
imgFlecha.classList.add('flecha');

botonIdiomas.appendChild(textoBoton); //Agrega el texto al boton
botonIdiomas.appendChild(imgFlecha); //Agrega la flecha al boton

containerIdiomas.appendChild(botonIdiomas); //Agrega el boton al contenedor

navBarra.appendChild(enlaceLogo); //Agrega el enlace con el logo al nav
navBarra.appendChild(containerIdiomas); //Agrega el contenedor de idiomas al nav

containerBarra.appendChild(navBarra); //Agrega el nav al contenedor

header.appendChild(containerBarra); //Agrega el contenedor al header

document.body.appendChild(header); //Agrega el header al documento HTML

// Evento en el que sale un borde abajo de la barra de navegacion al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        containerBarra.style.borderBottom = '2px solid rgb(229, 229, 229)';
    } else {
        containerBarra.style.borderBottom = 'none';
    }
});



const main = document.createElement('main'); //Creacion del contenedor principal en donde se agregaran las secciones

const pagina1 = document.createElement('div'); //Se crea la pagina que se ve al entrar al sitio
pagina1.classList.add('pagina1');

const parte1 = document.createElement('div'); //Se crea la parte 1 de la pagina, en donde esta Duo y los botones
parte1.classList.add('parte1');

const containerImagen1 = document.createElement('div'); //Contenedor de la imagen 1
containerImagen1.classList.add('containerImagen1');

const img1 = document.createElement('img'); //Imagen 1
img1.src = 'imagenes/duolingoLogo.png';
img1.alt = 'imagen1';
img1.classList.add('imagenParte1');

containerImagen1.appendChild(img1); //Agrega la imagen al contenedor

const textParte1 = document.createElement('div'); //Contenedor del titulo y los botones de la parte 1
textParte1.classList.add('textParte1');

const tituloText = document.createElement('h1'); //Titulo de la parte 1
tituloText.classList.add('tituloText');
tituloText.textContent = '¡La forma divertida, efectiva y gratis de aprender un idioma!';

const botones2 = document.createElement('div'); //Contenedor de los botones
botones2.classList.add('botones2');

const enlaceRegistro = document.createElement('a'); //Enlace hacia la pagina de registro
enlaceRegistro.href = 'https://es.duolingo.com/register';
enlaceRegistro.classList.add('butt');

const botonEmpezar = document.createElement('button'); //Boton para registrarse
botonEmpezar.type = 'button';
botonEmpezar.classList.add('botonEmpezar');
botonEmpezar.textContent = 'EMPIEZA AHORA'; //Texto del boton

const botonCuenta = document.createElement('button'); //Boton para iniciar sesion
botonCuenta.type = 'button';
botonCuenta.classList.add('botonCuenta');
botonCuenta.innerHTML = 'YA TENGO UNA CUENTA'; //Texto del boton

enlaceRegistro.appendChild(botonEmpezar); //Agrega el boton de registro al enlace
botones2.appendChild(enlaceRegistro); //Agrega el enlace al contenedor de botones
botones2.appendChild(botonCuenta); //Agrega el boton de iniciar sesion al contenedor de botones

textParte1.appendChild(tituloText); //Agrega el titulo al contenedor del titulo y los botones
textParte1.appendChild(botones2); //Agrega el contenedor de botones al contenedor del titulo y los botones

parte1.appendChild(containerImagen1); //Agrega el contenedor de la imagen al contenedor de la parte 1
parte1.appendChild(textParte1); //Agrega el contenedor del titulo y los botones al contenedor de la parte 1

pagina1.appendChild(parte1); //Agrega la parte 1 a la pagina 1

// Evento en el que al desplazarse mas abajo del boton de registro, este aparece en el nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 390) {
        botonIdiomas.classList.add('botonEmpezar');
        botonIdiomas.classList.remove('botonIdiomasHead');
        botonIdiomas.innerHTML = '<a href="https://es.duolingo.com/register" class="butt"><button type="button" class="botonEmpezar">EMPIEZA AHORA</button></a>';
    } else {
        botonIdiomas.classList.remove('botonEmpezar');
        botonIdiomas.classList.add('botonIdiomasHead');
        botonIdiomas.innerHTML = '<span class="textoBoton">IDIOMA DE LA PAGINA: ESPAÑOL</span><img src="imagenes/flecha.svg" alt="flecha" class="flecha">';
    }
});

const conteinerBarraIdiomas = document.createElement('div'); //Contenedor de la barra de idiomas
conteinerBarraIdiomas.classList.add('conteinerBarraIdiomas');

const barraIdiomas = document.createElement('nav'); //Barra de idiomas
barraIdiomas.classList.add('barraIdiomas');

const flechaIzquierda = document.createElement('img'); //Flecha hacia la izquierda
flechaIzquierda.src = 'imagenes/flecha.svg';
flechaIzquierda.alt = 'flechaIzquierda';
flechaIzquierda.classList.add('flechaIzquierda'); 

const carIdiomas = document.createElement('div'); //Contenedor de la lista de idiomas
carIdiomas.classList.add('carIdiomas');

const listaIdiomas = document.createElement('ul'); //Lista de idiomas
listaIdiomas.classList.add('listaIdiomas');

// Se crea un arreglo con los idiomas y sus atributos
const idiomas = [
    { nombre: 'INGLÉS', url: 'https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s', imagen: 'imagenes/paises/ingles.png' },
    { nombre: 'FRANCÉS', url: 'https://es.duolingo.com/course/fr/es/Aprender-franc%C3%A9s', imagen: 'imagenes/paises/frances.png' },
    { nombre: 'ALEMÁN', url: 'https://es.duolingo.com/course/de/es/Aprender-alem%C3%A1n', imagen: 'imagenes/paises/aleman.png' },
    { nombre: 'ITALIANO', url: 'https://es.duolingo.com/course/it/es/Aprender-italiano', imagen: 'imagenes/paises/italiano.png' },
    { nombre: 'PORTUGUÉS', url: 'https://es.duolingo.com/course/pt/es/Aprender-portugu%C3%A9s', imagen: 'imagenes/paises/portugues.png' },
    { nombre: 'CATALÁN', url: 'https://es.duolingo.com/course/ca/es/Aprender-catal%C3%A1n', imagen: 'imagenes/paises/catalan.png' },
    { nombre: 'RUSO', url: 'https://es.duolingo.com/course/ru/es/Aprender-ruso', imagen: 'imagenes/paises/ruso.png' },
    { nombre: 'SUECO', url: 'https://es.duolingo.com/course/sv/es/Aprender-sueco', imagen: 'imagenes/paises/sueco.png' }
];

// Se usa un ciclo para crear un elemento por cada uno de los idiomas del arreglo anterior
idiomas.forEach(idioma => {
    const itemIdioma = document.createElement('li');
    const enlaceIdioma = document.createElement('a');
    enlaceIdioma.href = idioma.url;
    enlaceIdioma.classList.add('idiomasIndi');

    const imgIdioma = document.createElement('img');
    imgIdioma.src = idioma.imagen;
    imgIdioma.alt = idioma.nombre;
    imgIdioma.classList.add('idiomasImg');

    const spanIdioma = document.createElement('span');
    spanIdioma.classList.add('idiomasSpan');
    spanIdioma.textContent = idioma.nombre;

    enlaceIdioma.appendChild(imgIdioma);
    enlaceIdioma.appendChild(spanIdioma);
    itemIdioma.appendChild(enlaceIdioma);
    listaIdiomas.appendChild(itemIdioma);
});

const flechaDerecha = document.createElement('img'); //Flecha hacia la derecha
flechaDerecha.src = 'imagenes/flecha.svg';
flechaDerecha.alt = 'flechaDerecha';
flechaDerecha.classList.add('flechaDerecha');

barraIdiomas.appendChild(flechaIzquierda); //Agrega la flecha hacia la izquierda a la barra de idiomas
carIdiomas.appendChild(listaIdiomas); //Agrega la lista de idiomas al contenedor de la lista de idiomas
barraIdiomas.appendChild(carIdiomas); //Agrega el contenedor de la lista de idiomas a la barra de idiomas
barraIdiomas.appendChild(flechaDerecha); //Agrega la flecha hacia la derecha a la barra de idiomas

conteinerBarraIdiomas.appendChild(barraIdiomas); //Agrega la barra de idiomas al contenedor de la barra de idiomas

pagina1.appendChild(conteinerBarraIdiomas); //Agrega el contenedor de la barra de idiomas a la pagina 1

main.appendChild(pagina1); //Agrega la pagina 1 al contenedor principal

const cuerpo = document.createElement('div'); //Creacion del primer cuerpo de las secciones
cuerpo.classList.add('cuerpo');

// Se hace otro arreglo con los datos de las secciones
const seccionesUno = [
    {
        titulo: 'divertido, efectivo y gratis',
        contenido: 'Aprender con Duolingo es divertido y <a class="textAzul" href="https://es.duolingo.com/efficacy">los estudios demuestran que funciona.</a> ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!',
        imgSrc: 'imagenes/hombreCelu.svg',
        clases: ['secciones', 'marginUp']
    },
    {
        titulo: 'respaldado por la ciencia',
        contenido: 'Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.',
        imgSrc: 'imagenes/niñasCiencia.svg',
        clases: ['secciones', 'seccionesInverso'] // Algunos tienen la clase "seccionesInverso" para que se vea invertido
    },
    {
        titulo: 'mantén tu motivación',
        contenido: 'Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.',
        imgSrc: 'imagenes/hombreCorriendo.svg',
        clases: ['secciones']
    }
];

// Se usa un ciclo para crear un elemento por cada uno de las secciones del arreglo anterior
seccionesUno.forEach(seccion => {
    const divSeccion = document.createElement('div');
    divSeccion.classList.add(...seccion.clases);

    const textSecciones = document.createElement('div');
    textSecciones.classList.add('textSecciones');

    const tituloSecciones = document.createElement('h2');
    tituloSecciones.classList.add('tituloSecciones');
    tituloSecciones.textContent = seccion.titulo;

    const normalSecciones = document.createElement('p');
    normalSecciones.classList.add('normalSecciones');
    normalSecciones.innerHTML = seccion.contenido;

    textSecciones.appendChild(tituloSecciones);
    textSecciones.appendChild(normalSecciones);

    const imgSecciones = document.createElement('div');
    imgSecciones.classList.add('imgSecciones');

    const imgSeccion = document.createElement('img');
    imgSeccion.src = seccion.imgSrc;
    imgSeccion.alt = '';

    imgSecciones.appendChild(imgSeccion);

    divSeccion.appendChild(textSecciones);
    divSeccion.appendChild(imgSecciones);

    cuerpo.appendChild(divSeccion);
});

main.appendChild(cuerpo); //Agrega el cuerpo al contenedor principal

const gradienteDiv = document.createElement('div'); // Se crea un contenedor en donde se pondrá el gradiente
gradienteDiv.classList.add('gradiente');

const seccionDiferente = document.createElement('div'); // Se crea la seccion en donde empezará el gradiente
seccionDiferente.classList.add('secciones', 'seccionesInverso', 'pad');

const textSeccionDiferente = document.createElement('div'); // Se crea el contenedor del texto y el titulo de la seccion
textSeccionDiferente.classList.add('textSecciones');

const tituloSeccionDiferente = document.createElement('h2'); // Se crea el titulo de la seccion
tituloSeccionDiferente.classList.add('tituloSecciones');
tituloSeccionDiferente.textContent = 'aprendizaje personalizado';

const normalSeccionDiferente = document.createElement('p'); // Se crea el texto de la seccion
normalSeccionDiferente.classList.add('normalSecciones');
normalSeccionDiferente.textContent = 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.';

textSeccionDiferente.appendChild(tituloSeccionDiferente); // Se agrega el titulo al contenedor
textSeccionDiferente.appendChild(normalSeccionDiferente); // Se agrega el texto al contenedor

const imgSeccionDiferente = document.createElement('div'); // Se crea el contenedor de la imagen de la seccion
imgSeccionDiferente.classList.add('imgSecciones');

const imgSeccionDif = document.createElement('img'); // Se crea la imagen de la seccion
imgSeccionDif.src = 'imagenes/dosPersonas.svg';
imgSeccionDif.alt = '';

imgSeccionDiferente.appendChild(imgSeccionDif); // Se agrega la imagen al contenedor

seccionDiferente.appendChild(textSeccionDiferente); // Se agrega el contenedor del texto al contenedor de la seccion
seccionDiferente.appendChild(imgSeccionDiferente); // Se agrega el contenedor de la imagen al contenedor de la seccion

gradienteDiv.appendChild(seccionDiferente); // Se agrega la seccion al contenedor del gradiente

// Evento para que el nav desaparezca cuando llegue a la seccion de descargas, y reaparezca despues de Super Duolingo
window.addEventListener('scroll', () => {
    if (window.scrollY > 2950 && window.scrollY < 5030) {
        containerBarra.style.marginTop = '-72px';
    } else {
        containerBarra.style.marginTop = '0px';
    }
});


const seccionDif = document.createElement('div'); // Se crea la seccion de descargas
seccionDif.classList.add('seccionDif');

const divSeccionDif = document.createElement('div');
divSeccionDif.classList.add('divSeccionDif');

const containerDesc = document.createElement('div');
containerDesc.classList.add('containerDesc');

const tituloDesc = document.createElement('h1'); // Se crea el titulo de la seccion
tituloDesc.classList.add('tituloDesc');
tituloDesc.textContent = 'aprende cuando quieras y donde quieras';

const containerBotonesDesc = document.createElement('div'); // Se crea el contenedor de los botones de descarga
containerBotonesDesc.classList.add('containerBotonesDesc');

const botonDesc1 = document.createElement('button'); // Se crea el boton de descarga para la App Store
botonDesc1.type = 'button';
botonDesc1.classList.add('botonDesc');
botonDesc1.innerHTML = '<div class="containerLogoBoton"><img src="imagenes/logoApple.png" alt="apple" class="logoBoton"></div><div class="textBotonDesc"><p>Descárgalo en la</p><p>App Store</p></div>';

const botonDesc2 = document.createElement('button'); // Se crea el boton de descarga para Google Play
botonDesc2.type = 'button';
botonDesc2.classList.add('botonDesc');
botonDesc2.innerHTML = '<div class="containerLogoBoton"><img src="imagenes/logoGooglePlay.png" alt="GP" class="logoBoton"></div><div class="textBotonDesc"><p>Disponible en</p><p>Google Play</p></div>';

containerBotonesDesc.appendChild(botonDesc1); // Se agregan los botones al contenedor
containerBotonesDesc.appendChild(botonDesc2); 

containerDesc.appendChild(tituloDesc); // Se agrega el titulo al contenedor
containerDesc.appendChild(containerBotonesDesc); // Se agrega el contenedor de los botones al contenedor

divSeccionDif.appendChild(containerDesc); 

seccionDif.appendChild(divSeccionDif);

gradienteDiv.appendChild(seccionDif); // Se agrega la seccion al contenedor del gradiente

const fondo = document.createElement('div'); // Se crea el fondo de la seccion de descargas
fondo.classList.add('fondo');

const imgFondo = document.createElement('img'); // Se crea la imagen de fondo
imgFondo.src = 'imagenes/fondoVariado.svg';
imgFondo.alt = 'fondo';
imgFondo.classList.add('fondoImg');

fondo.appendChild(imgFondo); // Se agrega la imagen al fondo

gradienteDiv.appendChild(fondo); // Se agrega el fondo al contenedor del gradiente

cuerpo.appendChild(gradienteDiv); // Se agrega el contenedor del gradiente al cuerpo


const containerSuperDuolingo = document.createElement('div'); // Se crea el contenedor de la seccion de Super Duolingo
containerSuperDuolingo.classList.add('containerSuperDuolingo');

const superDuolingo = document.createElement('div'); // Se crea la seccion de Super Duolingo
superDuolingo.classList.add('superDuolingo');

const imgSuperDuolingo = document.createElement('div'); // Se crea el contenedor de la imagen de Super Duolingo
imgSuperDuolingo.classList.add('imgSuperDuolingo');

const imgSuperDuolingoImg = document.createElement('img'); // Se crea la imagen de Super Duolingo
imgSuperDuolingoImg.src = 'imagenes/superDuolingoImg.svg';
imgSuperDuolingoImg.alt = '';

imgSuperDuolingo.appendChild(imgSuperDuolingoImg); // Se agrega la imagen al contenedor

const textSuperDuolingo = document.createElement('div'); // Se crea el contenedor del texto de Super Duolingo
textSuperDuolingo.classList.add('textSuperDuolingo');

const superDuolingoTxt = document.createElement('img'); // Se agrega la imagen del texto de Super Duolingo
superDuolingoTxt.src = 'imagenes/superDuolingoTxt.svg';
superDuolingoTxt.alt = '';
superDuolingoTxt.classList.add('powerUp');

const botonSuperDuolingo = document.createElement('button'); // Se crea el boton de Super Duolingo
botonSuperDuolingo.type = 'button';
botonSuperDuolingo.classList.add('botonSuperDuolingo');
botonSuperDuolingo.textContent = 'Prueba 2 semanas gratis';

textSuperDuolingo.appendChild(superDuolingoTxt); // Se agrega la imagen del texto al contenedor
textSuperDuolingo.appendChild(botonSuperDuolingo); // Se agrega el boton al contenedor

superDuolingo.appendChild(imgSuperDuolingo); // Se agrega el contenedor de la imagen al contenedor de Super Duolingo
superDuolingo.appendChild(textSuperDuolingo); // Se agrega el contenedor del texto al contenedor de Super Duolingo

containerSuperDuolingo.appendChild(superDuolingo); // Se agrega la seccion de Super Duolingo al contenedor

cuerpo.appendChild(containerSuperDuolingo); // Se agrega el contenedor de Super Duolingo al cuerpo


const cuerpo2 = document.createElement('div');
cuerpo2.classList.add('cuerpo');

// Creación de las secciones adicionales
const seccionesDos = [
    {
        titulo: 'duolingo english test',
        contenido: 'Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí.',
        imgSrc: 'imagenes/mujerPlaca.svg',
        textoDelBoton: 'CERTIFICA TU INGLÉS',
        clases: ['secciones', 'marginUp']
    },
    {
        titulo: 'duolingo for schools',
        contenido: 'Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.',
        imgSrc: 'imagenes/niñoLapiz.svg',
        textoDelBoton: 'POTENCIA TU SALON DE CLASES',
        clases: ['secciones', 'seccionesInverso']
    },
    {
        titulo: 'duolingo abc',
        contenido: '¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente gratis!',
        imgSrc: 'imagenes/duoABC.svg',
        textoDelBoton: 'CONOCE DUOLINGO ABC',
        clases: ['secciones']
    },
    {
        titulo: 'duolingo math',
        contenido: '¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza matemática.',
        imgSrc: 'imagenes/duoMat.svg',
        textoDelBoton: 'MEJORA EN MATEMÁTICA',
        clases: ['secciones', 'seccionesInverso']
    }
];

seccionesDos.forEach(seccion => {
    const divSeccionDos = document.createElement('div');
    divSeccionDos.classList.add(...seccion.clases);

    const textSeccionesDos = document.createElement('div');
    textSeccionesDos.classList.add('textSecciones');

    const tituloSeccionesDos = document.createElement('h2');
    tituloSeccionesDos.classList.add('tituloSecciones');
    tituloSeccionesDos.textContent = seccion.titulo;

    const normalSeccionesDos = document.createElement('p');
    normalSeccionesDos.classList.add('normalSecciones');
    normalSeccionesDos.innerHTML = seccion.contenido;

    const btnSeccionesDos = document.createElement('button');
    btnSeccionesDos.type = 'button';
    btnSeccionesDos.classList.add('botonSecciones');
    btnSeccionesDos.textContent = seccion.textoDelBoton;

    textSeccionesDos.appendChild(tituloSeccionesDos);
    textSeccionesDos.appendChild(normalSeccionesDos);
    textSeccionesDos.appendChild(btnSeccionesDos);

    const imgSeccionesDos = document.createElement('div');
    imgSeccionesDos.classList.add('imgSecciones');

    const imgSeccionDos = document.createElement('img');
    imgSeccionDos.src = seccion.imgSrc;
    imgSeccionDos.alt = '';

    imgSeccionesDos.appendChild(imgSeccionDos);

    divSeccionDos.appendChild(textSeccionesDos);
    divSeccionDos.appendChild(imgSeccionesDos);

    cuerpo2.appendChild(divSeccionDos);
});

cuerpo.appendChild(cuerpo2);

const conteinerFinal = document.createElement('div'); // Se crea el contenedor final
conteinerFinal.classList.add('conteinerFinal');

const tituloFinal = document.createElement('h1'); // Se crea el titulo final
tituloFinal.classList.add('tituloFinal');
tituloFinal.textContent = 'aprende idiomas con duolingo';

const containerBotonesDescFinal = document.createElement('div'); // Se crea el contenedor de los botones finales
containerBotonesDescFinal.classList.add('containerBotonesDesc');

const botonFinal = document.createElement('button'); // Se crea el boton final
botonFinal.type = 'button';
botonFinal.classList.add('botonEmpezar');
botonFinal.textContent = 'EMPIEZA AHORA';

const enlaceRegistroFinal = document.createElement('a'); // Se crea el enlace final
enlaceRegistroFinal.href = 'https://es.duolingo.com/register';
enlaceRegistroFinal.classList.add('butt');

enlaceRegistroFinal.appendChild(botonFinal); // Se agrega el boton al enlace
containerBotonesDescFinal.appendChild(enlaceRegistroFinal); // Se agrega el enlace al contenedor

conteinerFinal.appendChild(tituloFinal); // Se agrega el titulo al contenedor
conteinerFinal.appendChild(containerBotonesDescFinal); // Se agrega el contenedor de los botones al contenedor

cuerpo.appendChild(conteinerFinal); // Se agrega el contenedor al cuerpo

const imagenFinal = document.createElement('div'); // Contenedor de la imagen final
imagenFinal.classList.add('imagenFinal');

const imgFinal = document.createElement('img'); // Imagen final
imgFinal.src = 'imagenes/imagenFinal.svg';
imgFinal.alt = '';

imagenFinal.appendChild(imgFinal); // Se agrega la imagen al contenedor

cuerpo.appendChild(imagenFinal); // Se agrega el contenedor al cuerpo

document.body.appendChild(main); //Agrega el contenedor principal al documento HTML


const footer = document.createElement('footer'); // Creacion del footer
footer.classList.add('footer');

const footerContainer = document.createElement('div'); // Contenedor principal del footer
footerContainer.classList.add('conteinerFooter');

footer.appendChild(footerContainer); // Agrega el contenedor principal al footer

const infoSobreNosotros = document.createElement('div'); // Crear la sección "Sobre nosotros"
infoSobreNosotros.classList.add('info');

const vinculosSobreNosotros = document.createElement('div'); // Titulo de la seccion
vinculosSobreNosotros.classList.add('vinculos');
vinculosSobreNosotros.textContent = 'Sobre nosotros';

infoSobreNosotros.appendChild(vinculosSobreNosotros); // Agregar el contenedor de los vinculos al contenedor de la seccion

const ulSobreNosotros = document.createElement('ul'); // Crear la lista de vinculos de "Sobre nosotros"
ulSobreNosotros.classList.add('ulVinculos');

// Se crea un arreglo con los vinculos de "Sobre nosotros"
const enlacesSobreNosotros = [
    { text: 'Cursos', href: 'https://es.duolingo.com/info' },
    { text: 'Misión', href: 'https://es.duolingo.com/info' },
    { text: 'Método de enseñanza', href: 'https://es.duolingo.com/approach' },
    { text: 'Eficacia', href: 'https://es.duolingo.com/efficacy' },
    { text: 'Equipo', href: 'https://careers.duolingo.com/about' },
    { text: 'Investigación', href: 'https://research.duolingo.com/' },
    { text: 'Empleo', href: 'https://careers.duolingo.com/' },
    { text: 'Guía para uso de marca', href: 'https://design.duolingo.com/' },
    { text: 'Tienda', href: 'https://store.duolingo.com/' },
    { text: 'Prensa', href: 'https://press.duolingo.com/' },
    { text: 'Inversionistas', href: 'https://investors.duolingo.com/' },
    { text: 'Contáctanos', href: 'https://es.duolingo.com/contact' }
];

// Se usa un ciclo para crear un elemento por cada uno de los vinculos del arreglo anterior
enlacesSobreNosotros.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    li.appendChild(a);
    ulSobreNosotros.appendChild(li);
});
infoSobreNosotros.appendChild(ulSobreNosotros); // Agregar la lista de vinculos al contenedor de la seccion

const infoProductos = document.createElement('div'); // Crear la sección "Productos"
infoProductos.classList.add('info');

const vinculosProductos = document.createElement('div'); // Titulo de la seccion
vinculosProductos.classList.add('vinculos');
vinculosProductos.textContent = 'Productos';

infoProductos.appendChild(vinculosProductos); // Agregar el contenedor de los vinculos al contenedor de la seccion

const ulProductos = document.createElement('ul'); // Crear la lista de vinculos de "Productos"
ulProductos.classList.add('ulVinculos');

// Se crea un arreglo con los vinculos de "Productos"
const enlacesProductos = [
    { text: 'Duolingo', href: 'https://es.duolingo.com/' },
    { text: 'Duolingo for Schools', href: 'https://schools.duolingo.com/' },
    { text: 'Duolingo English Test', href: 'https://englishtest.duolingo.com/es' },
    { text: 'Podcast', href: 'https://podcast.duolingo.com/' },
    { text: 'Duolingo for Business', href: 'https://es.duolingo.com/business' },
    { text: 'Súper Duolingo', href: 'https://es.duolingo.com/super' },
    { text: 'Regala Súper Duolingo', href: 'https://es.duolingo.com/gift' }
];

// Se usa un ciclo para crear un elemento por cada uno de los vinculos del arreglo anterior
enlacesProductos.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    li.appendChild(a);
    ulProductos.appendChild(li);
});
infoProductos.appendChild(ulProductos); // Agregar la lista de vinculos al contenedor de la seccion

const infoAplicaciones = document.createElement('div'); // Crear la sección "Aplicaciones"
infoAplicaciones.classList.add('info');

const vinculosAplicaciones = document.createElement('div'); // Titulo de la seccion
vinculosAplicaciones.classList.add('vinculos');
vinculosAplicaciones.textContent = 'Aplicaciones';

infoAplicaciones.appendChild(vinculosAplicaciones); // Agregar el contenedor de los vinculos al contenedor de la seccion

const ulAplicaciones = document.createElement('ul'); // Crear la lista de vinculos de "Aplicaciones"
ulAplicaciones.classList.add('ulVinculos');

// Se crea un arreglo con los vinculos de "Aplicaciones"
const enlacesAplicaciones = [
    { text: 'Duolingo para Android', href: 'https://play.google.com/store/apps/details?hl=es&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map' },
    { text: 'Duolingo para iOS', href: 'https://itunes.apple.com/es/app/duolingo-learn-spanish-french/id570060128?mt=8&at=1010lwpr' }
];

// Se usa un ciclo para crear un elemento por cada uno de los vinculos del arreglo anterior
enlacesAplicaciones.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    li.appendChild(a);
    ulAplicaciones.appendChild(li);
});
infoAplicaciones.appendChild(ulAplicaciones); // Agregar la lista de vinculos al contenedor de la seccion

const infoAyudaSoporte = document.createElement('div'); // Crear la sección "Ayuda y soporte"
infoAyudaSoporte.classList.add('info');

const vinculosAyudaSoporte = document.createElement('div'); // Titulo de la seccion
vinculosAyudaSoporte.classList.add('vinculos');
vinculosAyudaSoporte.textContent = 'Ayuda y soporte';

infoAyudaSoporte.appendChild(vinculosAyudaSoporte); // Agregar el contenedor de los vinculos al contenedor de la seccion

const ulAyudaSoporte = document.createElement('ul'); // Crear la lista de vinculos de "Ayuda y soporte"
ulAyudaSoporte.classList.add('ulVinculos');

// Se crea un arreglo con los vinculos de "Ayuda y soporte"
const enlacesAyudaSoporte = [
    { text: 'App de Duolingo', href: 'https://support.duolingo.com/hc/es' },
    { text: 'Schools', href: 'https://duolingoschools.zendesk.com/hc/en-us' },
    { text: 'Duolingo English Test', href: 'https://englishtest.duolingo.com/faq' },
    { text: 'Estado', href: 'https://status.duolingo.com/' }
];

// Se usa un ciclo para crear un elemento por cada uno de los vinculos del arreglo anterior
enlacesAyudaSoporte.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    li.appendChild(a);
    ulAyudaSoporte.appendChild(li);
});
infoAyudaSoporte.appendChild(ulAyudaSoporte); // Agregar la lista de vinculos al contenedor de la seccion

const ultimosVinculos = document.createElement('div'); // Crear el contenedor de los ultimos vinculos
ultimosVinculos.classList.add('info');

const ultimos1 = document.createElement('div'); // Se crea la seccion ultimos1

const vinculosTerminosPrivacidad = document.createElement('div'); // Titulo de la seccion
vinculosTerminosPrivacidad.classList.add('vinculos');
vinculosTerminosPrivacidad.textContent = 'Términos y privacidad';

ultimos1.appendChild(vinculosTerminosPrivacidad); // Agregar el contenedor a ultimos1

const ulTerminosPrivacidad = document.createElement('ul'); // Crear la lista de vinculos de "Terminos y privacidad"
ulTerminosPrivacidad.classList.add('ulVinculos');

// Se crea un arreglo con los vinculos de "Terminos y privacidad"
const enlacesTerminosPrivacidad = [
    { text: 'Normas de la comunidad', href: 'https://es.duolingo.com/guidelines' },
    { text: 'Términos', href: 'https://es.duolingo.com/terms' },
    { text: 'Privacidad', href: 'https://es.duolingo.com/privacy' }
];

// Se usa un ciclo para crear un elemento por cada uno de los vinculos del arreglo anterior
enlacesTerminosPrivacidad.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    li.appendChild(a);
    ulTerminosPrivacidad.appendChild(li);
});
ultimos1.appendChild(ulTerminosPrivacidad); // Agregar la lista de vinculos al contenedor de los ultimos1

const ultimos2 = document.createElement('div'); // Se crea la seccion ultimos2

const vinculosSocial = document.createElement('div'); // Titulo de la seccion
vinculosSocial.classList.add('vinculos');
vinculosSocial.textContent = 'Social';

ultimos2.appendChild(vinculosSocial); // Agregar el contenedor a ultimos2

const ulSocial = document.createElement('ul'); // Crear la lista de vinculos de "Social"
ulSocial.classList.add('ulVinculos');

// Se crea un arreglo con los vinculos de "Terminos y privacidad"
const enlacesTerminosPrivacidad1 = [
    { text: 'Normas de la comunidad', href: 'https://es.duolingo.com/guidelines' },
    { text: 'Términos', href: 'https://es.duolingo.com/terms' },
    { text: 'Privacidad', href: 'https://es.duolingo.com/privacy' }
];

// Se usa un ciclo para crear un elemento por cada uno de los vinculos del arreglo anterior
enlacesTerminosPrivacidad1.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    li.appendChild(a);
    ulSocial.appendChild(li);
});
ultimos2.appendChild(ulSocial); // Agregar la lista de vinculos al contenedor de los ultimos2

ultimosVinculos.appendChild(ultimos1); // Agregar la seccion ultimos1 al contenedor de los ultimos vinculos
ultimosVinculos.appendChild(ultimos2); // Agregar la seccion ultimos2 al contenedor de los ultimos vinculos

footerContainer.appendChild(infoSobreNosotros); // Agregar la seccion "Sobre nosotros" al contenedor principal
footerContainer.appendChild(infoProductos); // Agregar la seccion "Productos" al contenedor principal
footerContainer.appendChild(infoAplicaciones); // Agregar la seccion "Aplicaciones" al contenedor principal
footerContainer.appendChild(infoAyudaSoporte); // Agregar la seccion "Ayuda y soporte" al contenedor principal
footerContainer.appendChild(ultimosVinculos); // Agregar el contenedor de los ultimos vinculos al contenedor principal

const hr = document.createElement('hr'); // Crear la linea divisoria
footer.appendChild(hr); // Agregar la linea divisoria al footer

const footerFinal = document.createElement('div'); // Crear el footer final
footerFinal.classList.add('footerFinal');

const textoFooterFinal = document.createElement('div'); // Crear el texto del footer final
textoFooterFinal.classList.add('textoFooterFinal');
textoFooterFinal.textContent = 'Idioma de la página:';

footerFinal.appendChild(textoFooterFinal); // Agregar el texto al footer final

const listaIdiomasFinal = document.createElement('ul'); // Crear la lista de idiomas del footer final
listaIdiomasFinal.classList.add('listaIdiomasFinal');

// Se crea un arreglo con los idiomas del footer final
const idiomasFinal = [
    { text: 'العربية', href: 'https://ar.duolingo.com/' },
    { text: 'বাংলা', href: 'https://bn.duolingo.com/' },
    { text: 'Čeština', href: 'https://cs.duolingo.com/' },
    { text: 'Deutsch', href: 'https://de.duolingo.com/' },
    { text: 'Ελληνικά', href: 'https://el.duolingo.com/' },
    { text: 'English', href: 'https://en.duolingo.com/' },
    { text: 'Español', href: 'https://es.duolingo.com/' },
    { text: 'Français', href: 'https://fr.duolingo.com/' },
    { text: 'हिंदी', href: 'https://hi.duolingo.com/' },
    { text: 'Magyar', href: 'https://hu.duolingo.com/' },
    { text: 'Bahasa Indonesia', href: 'https://id.duolingo.com/' },
    { text: 'Italiano', href: 'https://it.duolingo.com/' },
    { text: '日本語', href: 'https://ja.duolingo.com/' },
    { text: '한국어', href: 'https://ko.duolingo.com/' },
    { text: 'Nederlands', href: 'https://dn.duolingo.com/' },
    { text: 'Polski', href: 'https://pl.duolingo.com/' },
    { text: 'Português', href: 'https://pt.duolingo.com/' },
    { text: 'Română', href: 'https://ro.duolingo.com/' },
    { text: 'Русский', href: 'https://ru.duolingo.com/' },
    { text: 'తెలుగు', href: 'https://te.duolingo.com/' },
    { text: 'ภาษาไทย', href: 'https://th.duolingo.com/' },
    { text: 'Tagalog', href: 'https://tl.duolingo.com/' },
    { text: 'Türkçe', href: 'https://tr.duolingo.com/' },
    { text: 'Українською', href: 'https://uk.duolingo.com/' },
    { text: 'Tiếng Việt', href: 'https://vi.duolingo.com/' },
    { text: '中文', href: 'https://zs.duolingo.com/' }
];

// Se usa un ciclo para crear un elemento por cada uno de los idiomas del arreglo anterior
idiomasFinal.forEach(idioma => {
    const idiomaItem = document.createElement('li');
    idiomaItem.classList.add('idiomasFinal');

    const idiomaLink = document.createElement('a');
    idiomaLink.classList.add('idiomaLink');
    idiomaLink.href = idioma.href;
    idiomaLink.textContent = idioma.text;
    idiomaItem.appendChild(idiomaLink);
    listaIdiomasFinal.appendChild(idiomaItem);
});
footerFinal.appendChild(listaIdiomasFinal); // Agregar la lista de idiomas al footer final

footer.appendChild(footerFinal); // Agregar el footer final al footer

// Agregar el footer al documento HTML
document.body.appendChild(footer);


const estilos = document.createElement('style');

estilos.innerHTML = `
a, ul, li{
    text-decoration: none;
    list-style: none;
}

a {
    color: rgb(165, 237, 110);
    background-color: transparent;
}

.encabezado{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 70px;
}

.containerBarra{
    background: rgb(255, 255, 255);
    border-bottom: 2px solid transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}

.desaparecerNav {
    transition: margin-top 0.5s;
}

.barra{
    justify-content: space-between;
    margin: 0 auto;
    max-width: 988px;
    padding: 0;
    display: flex;
    align-items: center;
    height: 70px;
}

.logo {
    height: 42px;
    width: 179px;
}

.flecha {
    height: 14px;
    margin-left: 8px;
    width: 14px;
}

.botonIdiomasHead {
    color: rgb(175, 175, 175);
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    background: none;
    border: none;
    padding: 0;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
}

.botonIdiomasHead:hover {
    color: rgb(190, 190, 190);
}



.parte1 {
    align-items: center;
    flex-direction: row;
    justify-content: end;
    margin: 0 auto;
    gap: 80px;
    width: 988px;
    height: 626px;
    display: flex;
    flex-grow: 1;
}

.containerImagen1 {
    margin-right: -65px;
    justify-content: center;
}

.imagenParte1 {
    width: 424px;
    height: 424px;
    line-height: 0;
}

.textParte1 {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0;
    width: 480px;
    height: 240px;
    font-family: 'DINNextRoundedLTW01-Regular';
}

.tituloText {
    color: rgb(75, 75, 75);
    margin: 0;
    width: 480px;
    height: 88px;
    font-family: "DIN Next Rounded LT W01 Medium";
    line-height: normal;
    text-align: center;    
}

.botonEmpezar {
    background-color: rgb(88, 204, 2);
    color: rgb(255, 255, 255);
    cursor: pointer;
    border: none;
    height: 50px;
    border-radius: 12px;
    letter-spacing: 0.8px;
    font-size: 15px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
    border-bottom: 5px solid rgb(88, 167, 0);
    width: 330px;
}

.botonEmpezar:hover {
    background-color: rgb(97, 224, 2);
    border-color:rgb(97, 184, 0);
}

.botonCuenta {
    background-color: rgb(255, 255, 255);
    color: rgb(28, 176, 246);
    cursor: pointer;
    border: 2px solid rgb(229, 229, 229);
    border-bottom: 5px solid rgb(229, 229, 229);
    height: 50px;
    border-radius: 12px;
    letter-spacing: 0.8px;
    font-size: 15px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
}

.botonCuenta:hover {
    background-color: rgb(229, 229, 229);
    border-color: rgb(206, 206, 206);
}

.botones2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    max-width: 330px;
    width: 100%;
}

.flechaIzquierda {
    height: 14px;
    width: 14px;
    transform: rotate(90deg);
    cursor: pointer;
}

.flechaDerecha {
    height: 14px;
    width: 14px;
    transform: rotate(-90deg);
    cursor: pointer;
    color: rgb(175, 175, 175);
}

.conteinerBarraIdiomas {
    align-items: center;
    border-bottom: 2px solid rgb(229, 229, 229);
    border-top: 2px solid rgb(229, 229, 229);
    display: flex;
    height: 80px;
    justify-content: center;
    padding: 0 40px;
}

.barraIdiomas {
    align-items: center;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: min-content 1fr min-content;
    height: 74px;   
}

.carIdiomas {
    overflow: hidden;
}

.listaIdiomas {
    display: flex;
    gap: 23px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.idiomasIndi {
    align-items: center;
    color: rgb(119, 119, 119);
    display: flex;
    justify-content: center;
    text-decoration: none;
}

.idiomasImg {
    height: 28px;
    width: 36px;
    margin-right: 10px;
}

.idiomasSpan {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.8px;
    font-family: "DIN Next Rounded LT W01 Medium";
    white-space: nowrap;
}

.secciones {
    flex-direction: row;
    gap: 101px;
    margin: 0 auto;
    width: 988px;
    padding: 0;
    align-items: center;
    display: flex;
}

.seccionesInverso {
    flex-direction: row-reverse;
}

.textSecciones {
    align-items: start;
    flex-shrink: 0;
    text-align: initial;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.tituloSecciones {
    font-size: 48px;
    max-width: 503px;
    font-family: "Feather Bold";
    color: rgb(88, 204, 2);
    line-height: normal;
    margin: 0;
    font-weight: 700;
}

.normalSecciones {
    max-width: 473px;
    color: rgb(119, 119, 119);
    font-size: 17px;
    line-height: 24px;
    margin: 0;
    font-family: "DIN Next Rounded LT W01 Medium";
}

.textAzul {
    color: rgb(28, 176, 246);
    font-weight: 700;
}

.imgSecciones {
    flex-shrink: 0;
    width: 530px;
    line-height: 0;
    aspect-ratio: 1/1;
}

.pad {
    padding-bottom: 96px;
}

.gradiente {
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(221, 244, 255));
    z-index: -1;
}

.seccionDif {
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.divSeccionDif {
    padding: 140px 0 96px;
    display: flex;
    flex-direction: column;
    max-width: 1728px;
}

.containerDesc {
    gap: 48px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.tituloDesc {
    font-size: 64px;
    max-width: 583px;
    color: rgb(4, 44, 96);
    font-family: "Feather Bold";
    line-height: normal;
    margin: 0;
    text-align: center;
}

.containerBotonesDesc {
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: center;
    z-index: 1;
}

.botonDesc{
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    border: 2px solid rgb(229, 229, 229);
    border-bottom: 5px solid rgb(229, 229, 229);
    width: 230px;
    height: 80px;
    border-radius: 12px;
    align-items: center;
    display: flex;
    gap: 25px;
}

.botonDesc:hover {
    background-color: rgb(229, 229, 229);
    border-color: rgb(206, 206, 206);
}

.textBotonDesc {
    color: rgb(67, 67, 67);
    font-size: 17px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
    letter-spacing: 0.8px;
    inline-size: 100%;
}

.logoBoton {
    height: 34px;
    width: 34px;
    padding: 5px;
}

.fondo {
    width: 100%;
    margin-top: -350px;
    margin-left: -75px;
    position: relative;
    z-index: 0;
}

.containerSuperDuolingo {
    background-color: rgb(16, 15, 62);

}

.superDuolingo {
    background-color: rgb(16, 15, 62);
    gap: 40px;
    margin: 0 auto;
    padding: 185px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 988px;
}

.imgSuperDuolingo {
    flex-shrink: 0;
    width: 530px;
    line-height: 0;
    aspect-ratio: 1/1;
}

.textSuperDuolingo {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 100%;
    margin-right: -150px;
}

.powerUp {
    width: 700px;
    height: 91px;
}

.botonSuperDuolingo {
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 550;
    letter-spacing: 0.8px;
    font-size: 17px;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    height: 50px;
    width: 250px;
    border: 2px solid rgb(136, 135, 159);
    border-bottom: 5px solid rgb(136, 135, 159);
    border-radius: 12px;
    align-items: center;
}

.marginUp {
    margin-top: 95px;
}

.botonSecciones {
    background-color: rgb(255, 255, 255);
    color: rgb(28, 176, 246);
    cursor: pointer;
    border: 2px solid rgb(229, 229, 229);
    border-bottom: 5px solid rgb(229, 229, 229);
    height: 50px;
    width: 300px;
    border-radius: 12px;
    letter-spacing: 0.8px;
    font-size: 12px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
}

.botonSecciones:hover {
    background-color: rgb(229, 229, 229);
    border-color: rgb(206, 206, 206);
}

.conteinerFinal {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 0 auto;
    padding: 185px 0;
    width: 988px;

}

.tituloFinal {
    font-size: 64px;
    max-width: 583px;
    color: rgb(88, 204, 2);
    font-family: "Feather Bold";
    line-height: normal;
    margin: 0;
    text-align: center;
}

.imagenFinal {
    margin-top: -500px;
}

.footer {
    background-color: rgb(88, 204, 2);
    margin-top: -5px;
}

.conteinerFooter {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(5, 178px);
    max-width: 988px;
    padding: 96px 0 64px;
    margin: 0 auto;
}

.info {
    display: grid;
    align-content: start;
    gap: 32px;
    font-family: "DIN Next Rounded LT W01 Medium";
}

.vinculos {
    color: rgb(215, 255, 184);
    font-size: 19px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 10px;
}

hr {
    border: 0;
    height: 0;
    border-top: 2px solid rgb(165, 237, 110);
}

.footerFinal {
    margin: 0 auto;
    padding: 40px 0 64px;
    max-width: 988px;
}

.textoFooterFinal {
    color: rgb(215, 255, 184);
    font-size: 15px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 16px;
}

.listaIdiomasFinal {
    margin: -8px -12px;
    display: inline-block;
}

.idiomasFinal {
    display: inline-block;
    margin: 8px 12px;
}

.idiomaLink {
    color: rgb(165, 237, 110);
    font-size: 12px;
    font-family: "DIN Next Rounded LT W01 Medium";
    font-weight: 700;
    line-height: 16px;
}

.ulVinculos {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
}`;

document.body.appendChild(estilos); // Agregar los estilos al documento HTML