"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineasDelMetro = void 0;
var controller_1 = require("./controler/controller");
var linaDelMetro_entity_1 = require("./entytis/linaDelMetro-entity");
//linea cafe 9 
var tacubaya = new linaDelMetro_entity_1.Linea("Tacubaya");
var patriotismo = new linaDelMetro_entity_1.Linea("Patriotismo");
var chilpancingo = new linaDelMetro_entity_1.Linea("Chilpancingo");
var centroMedico = new linaDelMetro_entity_1.Linea("Centro Médico");
var lazaroCardenas = new linaDelMetro_entity_1.Linea("Lázaro Cárdenas");
var chabacano = new linaDelMetro_entity_1.Linea("Chabacano");
var jamaica = new linaDelMetro_entity_1.Linea("Jamaica");
var mixiuhca = new linaDelMetro_entity_1.Linea("Mixiuhca");
var velodromo = new linaDelMetro_entity_1.Linea("Velódromo");
var ciudadDeportiva = new linaDelMetro_entity_1.Linea("Ciudad Deportiva");
var puebla = new linaDelMetro_entity_1.Linea("Puebla");
var pantitlan = new linaDelMetro_entity_1.Linea("Pantitlán");
// linea azul 2
var cuatroCaminos = new linaDelMetro_entity_1.Linea("Cuatro Caminos");
var panteones = new linaDelMetro_entity_1.Linea("Panteones");
var tacuba = new linaDelMetro_entity_1.Linea("Tacuba");
var cuitlahuac = new linaDelMetro_entity_1.Linea("Cuitláhuac");
var popotla = new linaDelMetro_entity_1.Linea("Popotla");
var colegioMilitar = new linaDelMetro_entity_1.Linea("Colegio Militar");
var normal = new linaDelMetro_entity_1.Linea("Normal");
var sanCosme = new linaDelMetro_entity_1.Linea("San Cosme");
var revolucion = new linaDelMetro_entity_1.Linea("Revolución");
var hidalgo = new linaDelMetro_entity_1.Linea("Hidalgo");
var bellasArtes = new linaDelMetro_entity_1.Linea("Bellas Artes");
var allende = new linaDelMetro_entity_1.Linea("Allende");
var zocalo = new linaDelMetro_entity_1.Linea("Zócalo");
var pinoSuarez = new linaDelMetro_entity_1.Linea("Pino Suárez");
var sanAntonioAbad = new linaDelMetro_entity_1.Linea("San Antonio Abad");
var viaducto = new linaDelMetro_entity_1.Linea("Viaducto");
var xola = new linaDelMetro_entity_1.Linea("Xola");
var villaCortes = new linaDelMetro_entity_1.Linea("Villa de Cortés");
var nativitas = new linaDelMetro_entity_1.Linea("Nativitas");
var portales = new linaDelMetro_entity_1.Linea("Portales");
var ermita = new linaDelMetro_entity_1.Linea("Ermita");
var generalAnaya = new linaDelMetro_entity_1.Linea("General Anaya");
var taxquena = new linaDelMetro_entity_1.Linea("Taxqueña");
// linea dorada 12
var tlahuac = new linaDelMetro_entity_1.Linea("Tláhuac");
var tlaltenco = new linaDelMetro_entity_1.Linea("Tlaltenco");
var zapotitlan = new linaDelMetro_entity_1.Linea("Zapotitlán");
var nopalera = new linaDelMetro_entity_1.Linea("Nopalera");
var olivos = new linaDelMetro_entity_1.Linea("Olivos");
var tezonco = new linaDelMetro_entity_1.Linea("Tezonco");
var perifericoOriente = new linaDelMetro_entity_1.Linea("Periférico Oriente");
var calle11 = new linaDelMetro_entity_1.Linea("Calle 11");
var lomasEstrella = new linaDelMetro_entity_1.Linea("Lomas Estrella");
var sanAndresTomatlan = new linaDelMetro_entity_1.Linea("San Andrés Tomatlán");
var culhuacan = new linaDelMetro_entity_1.Linea("Culhuacán");
var atlalilco = new linaDelMetro_entity_1.Linea("Atlalilco");
var ejeCentral = new linaDelMetro_entity_1.Linea("Eje Central");
var mexicaltzingo = new linaDelMetro_entity_1.Linea("Mexicaltzingo");
var parqueDeLosVenados = new linaDelMetro_entity_1.Linea("Parque de los Venados");
var zapata = new linaDelMetro_entity_1.Linea("Zapata");
var hospital20Nov = new linaDelMetro_entity_1.Linea("Hospital 20 de Noviembre");
var insurgentesSur = new linaDelMetro_entity_1.Linea("Insurgentes Sur");
var mixcoac = new linaDelMetro_entity_1.Linea("Mixcoac");
// linea rosa 1
var observatorio = new linaDelMetro_entity_1.Linea("Observatorio");
var tacubaya1 = new linaDelMetro_entity_1.Linea("Tacubaya");
var juanacatlan = new linaDelMetro_entity_1.Linea("Juanacatlán");
var chapultepec = new linaDelMetro_entity_1.Linea("Chapultepec");
var sevilla = new linaDelMetro_entity_1.Linea("Sevilla");
var insurgentes1 = new linaDelMetro_entity_1.Linea("Insurgentes");
var cuauhtemoc = new linaDelMetro_entity_1.Linea("Cuauhtémoc");
var balderas1 = new linaDelMetro_entity_1.Linea("Balderas");
var saltoDelAgua1 = new linaDelMetro_entity_1.Linea("Salto del Agua");
var isabelLaCatolica = new linaDelMetro_entity_1.Linea("Isabel la Católica");
var pinoSuarez1 = new linaDelMetro_entity_1.Linea("Pino Suárez");
var merced = new linaDelMetro_entity_1.Linea("Merced");
var candelaria1 = new linaDelMetro_entity_1.Linea("Candelaria");
var sanLazaro1 = new linaDelMetro_entity_1.Linea("San Lázaro");
var moctezuma = new linaDelMetro_entity_1.Linea("Moctezuma");
var balbuena = new linaDelMetro_entity_1.Linea("Balbuena");
var boulevardPuertoAereo = new linaDelMetro_entity_1.Linea("Boulevard Puerto Aéreo");
var gomezFarias = new linaDelMetro_entity_1.Linea("Gómez Farías");
var zaragoza = new linaDelMetro_entity_1.Linea("Zaragoza");
var pantitlan1 = new linaDelMetro_entity_1.Linea("Pantitlán L1");
// linea arena 3
var indiosVerdes = new linaDelMetro_entity_1.Linea("Indios Verdes");
var deportivo18Marzo3 = new linaDelMetro_entity_1.Linea("Deportivo 18 de Marzo L3");
var potrero = new linaDelMetro_entity_1.Linea("Potrero");
var laRaza3 = new linaDelMetro_entity_1.Linea("La Raza L3");
var tlatelolco = new linaDelMetro_entity_1.Linea("Tlatelolco");
var guerrero3 = new linaDelMetro_entity_1.Linea("Guerrero L3");
var hidalgo3 = new linaDelMetro_entity_1.Linea("Hidalgo L3");
var juarez = new linaDelMetro_entity_1.Linea("Juárez");
var balderas3 = new linaDelMetro_entity_1.Linea("Balderas L3");
var ninosHeroes = new linaDelMetro_entity_1.Linea("Niños Héroes");
var hospitalGeneral = new linaDelMetro_entity_1.Linea("Hospital General");
var centroMedico3 = new linaDelMetro_entity_1.Linea("Centro Médico L3");
var etiopia = new linaDelMetro_entity_1.Linea("Etiopía");
var eugenia = new linaDelMetro_entity_1.Linea("Eugenia");
var divisionDelNorte = new linaDelMetro_entity_1.Linea("División del Norte");
var zapata3 = new linaDelMetro_entity_1.Linea("Zapata");
var coyoacan = new linaDelMetro_entity_1.Linea("Coyoacán");
var viveros = new linaDelMetro_entity_1.Linea("Viveros");
var miguelAngelDeQuevedo = new linaDelMetro_entity_1.Linea("Miguel Ángel de Quevedo");
var copilco = new linaDelMetro_entity_1.Linea("Copilco");
var universidad = new linaDelMetro_entity_1.Linea("Universidad");
// linea turqueza 4 
var martinCarrera4 = new linaDelMetro_entity_1.Linea("Martín Carrera L4");
var talisman = new linaDelMetro_entity_1.Linea("Talisman");
var bondojito = new linaDelMetro_entity_1.Linea("Bondojito");
var consulado4 = new linaDelMetro_entity_1.Linea("Consulado L4");
var canalDelNorte = new linaDelMetro_entity_1.Linea("Canal del Norte");
var morelos4 = new linaDelMetro_entity_1.Linea("Morelos L4");
var candelaria4 = new linaDelMetro_entity_1.Linea("Candelaria L4");
var frayServando = new linaDelMetro_entity_1.Linea("Fray Servando");
var jamaica4 = new linaDelMetro_entity_1.Linea("Jamaica L4");
var santaAnita4 = new linaDelMetro_entity_1.Linea("Santa Anita L4");
//
var politecnico = new linaDelMetro_entity_1.Linea("Politécnico");
var institutoDelPetroleo5 = new linaDelMetro_entity_1.Linea("Instituto del Petróleo L5");
var autobusesNorte = new linaDelMetro_entity_1.Linea("Autobuses del Norte");
var laRaza5 = new linaDelMetro_entity_1.Linea("La Raza L5");
var misterios = new linaDelMetro_entity_1.Linea("Misterios");
var valleGomez = new linaDelMetro_entity_1.Linea("Valle Gómez");
var consulado5 = new linaDelMetro_entity_1.Linea("Consulado L5");
var eduardoMolina = new linaDelMetro_entity_1.Linea("Eduardo Molina");
var aragon = new linaDelMetro_entity_1.Linea("Aragón");
var oceanía5 = new linaDelMetro_entity_1.Linea("Oceanía L5");
var terminalAerea = new linaDelMetro_entity_1.Linea("Terminal Aérea");
var hangares = new linaDelMetro_entity_1.Linea("Hangares");
var pantitlan5 = new linaDelMetro_entity_1.Linea("Pantitlán L5");
//
var elRosario6 = new linaDelMetro_entity_1.Linea("El Rosario L6");
var tezozomoc = new linaDelMetro_entity_1.Linea("Tezozómoc");
var azcapotzalco6 = new linaDelMetro_entity_1.Linea("Azcapotzalco");
var ferreria = new linaDelMetro_entity_1.Linea("Ferrería");
var norte45 = new linaDelMetro_entity_1.Linea("Norte 45");
var vallejo = new linaDelMetro_entity_1.Linea("Vallejo");
var institutoDelPetroleo6 = new linaDelMetro_entity_1.Linea("Instituto del Petróleo L6");
var lindavista = new linaDelMetro_entity_1.Linea("Lindavista");
var deportivo18Marzo6 = new linaDelMetro_entity_1.Linea("Deportivo 18 de Marzo L6");
var laVillaBasílica = new linaDelMetro_entity_1.Linea("La Villa–Basílica");
var martinCarrera6 = new linaDelMetro_entity_1.Linea("Martín Carrera L6");
//
var elRosario7 = new linaDelMetro_entity_1.Linea("El Rosario L7");
var aquilesSerdan = new linaDelMetro_entity_1.Linea("Aquiles Serdán");
var camarones = new linaDelMetro_entity_1.Linea("Camarones");
var refineria = new linaDelMetro_entity_1.Linea("Refinería");
var tacuba7 = new linaDelMetro_entity_1.Linea("Tacuba L7");
var sanJoaquin = new linaDelMetro_entity_1.Linea("San Joaquín");
var polanco = new linaDelMetro_entity_1.Linea("Polanco");
var auditorio = new linaDelMetro_entity_1.Linea("Auditorio");
var constituyentes = new linaDelMetro_entity_1.Linea("Constituyentes");
var tacubaya7 = new linaDelMetro_entity_1.Linea("Tacubaya L7");
var sanPedroDeLosPinos = new linaDelMetro_entity_1.Linea("San Pedro de los Pinos");
var sanAntonio = new linaDelMetro_entity_1.Linea("San Antonio");
var mixcoac7 = new linaDelMetro_entity_1.Linea("Mixcoac L7");
var barrancaDelMuerto = new linaDelMetro_entity_1.Linea("Barranca del Muerto");
//
var garibaldi8 = new linaDelMetro_entity_1.Linea("Garibaldi L8");
var bellasArtes8 = new linaDelMetro_entity_1.Linea("Bellas Artes L8");
var sanJuanDeLetran = new linaDelMetro_entity_1.Linea("San Juan de Letrán");
var saltoDelAgua8 = new linaDelMetro_entity_1.Linea("Salto del Agua L8");
var doctores = new linaDelMetro_entity_1.Linea("Doctores");
var obrera = new linaDelMetro_entity_1.Linea("Obrera");
var chabacano8 = new linaDelMetro_entity_1.Linea("Chabacano L8");
var laViga = new linaDelMetro_entity_1.Linea("La Viga");
var santaAnita8 = new linaDelMetro_entity_1.Linea("Santa Anita L8");
var coyuya = new linaDelMetro_entity_1.Linea("Coyuya");
var iztacalco = new linaDelMetro_entity_1.Linea("Iztacalco");
var apatlalco = new linaDelMetro_entity_1.Linea("Apatlaco");
var aculco = new linaDelMetro_entity_1.Linea("Aculco");
var escuadron201 = new linaDelMetro_entity_1.Linea("Escuadrón 201");
var atlalilco8 = new linaDelMetro_entity_1.Linea("Atlalilco L8");
var iztapalapa = new linaDelMetro_entity_1.Linea("Iztapalapa");
var cerroDeLaEstrella = new linaDelMetro_entity_1.Linea("Cerro de la Estrella");
var uamI = new linaDelMetro_entity_1.Linea("UAM-I");
var constitucion1917 = new linaDelMetro_entity_1.Linea("Constitución de 1917");
// vecinos lina cafe
tacubaya.agregarEstacion(patriotismo);
patriotismo.agregarEstacion(tacubaya);
patriotismo.agregarEstacion(chilpancingo);
chilpancingo.agregarEstacion(patriotismo);
chilpancingo.agregarEstacion(centroMedico);
centroMedico.agregarEstacion(chilpancingo);
centroMedico.agregarEstacion(lazaroCardenas);
lazaroCardenas.agregarEstacion(centroMedico);
lazaroCardenas.agregarEstacion(chabacano);
chabacano.agregarEstacion(sanAntonioAbad);
chabacano.agregarEstacion(viaducto);
chabacano.agregarEstacion(lazaroCardenas);
chabacano.agregarEstacion(jamaica);
chabacano.agregarEstacion(obrera);
chabacano.agregarEstacion(laViga);
jamaica.agregarEstacion(chabacano);
jamaica.agregarEstacion(mixiuhca);
mixiuhca.agregarEstacion(jamaica);
mixiuhca.agregarEstacion(velodromo);
velodromo.agregarEstacion(mixiuhca);
velodromo.agregarEstacion(ciudadDeportiva);
ciudadDeportiva.agregarEstacion(velodromo);
ciudadDeportiva.agregarEstacion(puebla);
puebla.agregarEstacion(ciudadDeportiva);
puebla.agregarEstacion(pantitlan);
pantitlan.agregarEstacion(puebla);
// vecinos linea azul 
cuatroCaminos.agregarEstacion(panteones);
panteones.agregarEstacion(cuatroCaminos);
panteones.agregarEstacion(tacuba);
tacuba.agregarEstacion(panteones);
tacuba.agregarEstacion(cuitlahuac);
cuitlahuac.agregarEstacion(tacuba);
cuitlahuac.agregarEstacion(popotla);
popotla.agregarEstacion(cuitlahuac);
popotla.agregarEstacion(colegioMilitar);
colegioMilitar.agregarEstacion(popotla);
colegioMilitar.agregarEstacion(normal);
normal.agregarEstacion(colegioMilitar);
normal.agregarEstacion(sanCosme);
sanCosme.agregarEstacion(normal);
sanCosme.agregarEstacion(revolucion);
revolucion.agregarEstacion(sanCosme);
revolucion.agregarEstacion(hidalgo);
hidalgo.agregarEstacion(revolucion);
hidalgo.agregarEstacion(bellasArtes);
bellasArtes.agregarEstacion(hidalgo);
bellasArtes.agregarEstacion(allende);
allende.agregarEstacion(bellasArtes);
allende.agregarEstacion(zocalo);
zocalo.agregarEstacion(allende);
zocalo.agregarEstacion(pinoSuarez);
pinoSuarez.agregarEstacion(zocalo);
pinoSuarez.agregarEstacion(sanAntonioAbad);
sanAntonioAbad.agregarEstacion(pinoSuarez);
sanAntonioAbad.agregarEstacion(chabacano);
viaducto.agregarEstacion(chabacano);
viaducto.agregarEstacion(xola);
xola.agregarEstacion(viaducto);
xola.agregarEstacion(villaCortes);
villaCortes.agregarEstacion(xola);
villaCortes.agregarEstacion(nativitas);
nativitas.agregarEstacion(villaCortes);
nativitas.agregarEstacion(portales);
portales.agregarEstacion(nativitas);
portales.agregarEstacion(ermita);
ermita.agregarEstacion(portales);
ermita.agregarEstacion(generalAnaya);
generalAnaya.agregarEstacion(ermita);
generalAnaya.agregarEstacion(taxquena);
taxquena.agregarEstacion(generalAnaya);
// --- LÍNEA 12 (DORADA) ---
tlahuac.agregarEstacion(tlaltenco);
tlaltenco.agregarEstacion(tlahuac);
tlaltenco.agregarEstacion(zapotitlan);
zapotitlan.agregarEstacion(tlaltenco);
zapotitlan.agregarEstacion(nopalera);
nopalera.agregarEstacion(zapotitlan);
nopalera.agregarEstacion(olivos);
olivos.agregarEstacion(nopalera);
olivos.agregarEstacion(tezonco);
tezonco.agregarEstacion(olivos);
tezonco.agregarEstacion(perifericoOriente);
perifericoOriente.agregarEstacion(tezonco);
perifericoOriente.agregarEstacion(calle11);
calle11.agregarEstacion(perifericoOriente);
calle11.agregarEstacion(lomasEstrella);
lomasEstrella.agregarEstacion(calle11);
lomasEstrella.agregarEstacion(sanAndresTomatlan);
sanAndresTomatlan.agregarEstacion(lomasEstrella);
sanAndresTomatlan.agregarEstacion(culhuacan);
culhuacan.agregarEstacion(sanAndresTomatlan);
culhuacan.agregarEstacion(atlalilco);
atlalilco.agregarEstacion(culhuacan);
atlalilco.agregarEstacion(mexicaltzingo);
mexicaltzingo.agregarEstacion(atlalilco);
mexicaltzingo.agregarEstacion(ermita);
ermita.agregarEstacion(mexicaltzingo);
ermita.agregarEstacion(ejeCentral);
ejeCentral.agregarEstacion(ermita);
ejeCentral.agregarEstacion(parqueDeLosVenados);
parqueDeLosVenados.agregarEstacion(ejeCentral);
parqueDeLosVenados.agregarEstacion(zapata);
zapata.agregarEstacion(parqueDeLosVenados);
zapata.agregarEstacion(hospital20Nov);
hospital20Nov.agregarEstacion(zapata);
hospital20Nov.agregarEstacion(insurgentesSur);
insurgentesSur.agregarEstacion(hospital20Nov);
insurgentesSur.agregarEstacion(mixcoac);
mixcoac.agregarEstacion(insurgentesSur);
/// linea 8
garibaldi8.agregarEstacion(bellasArtes);
bellasArtes.agregarEstacion(garibaldi8);
bellasArtes.agregarEstacion(sanJuanDeLetran),
    sanJuanDeLetran.agregarEstacion(bellasArtes),
    sanJuanDeLetran.agregarEstacion(saltoDelAgua8);
saltoDelAgua8.agregarEstacion(sanJuanDeLetran);
saltoDelAgua8.agregarEstacion(doctores);
doctores.agregarEstacion(saltoDelAgua8);
doctores.agregarEstacion(obrera);
obrera.agregarEstacion(chabacano);
laViga.agregarEstacion(chabacano);
laViga.agregarEstacion(santaAnita8);
santaAnita8.agregarEstacion(laViga);
santaAnita8.agregarEstacion(jamaica);
santaAnita8.agregarEstacion(coyuya),
    coyuya.agregarEstacion(iztacalco),
    coyuya.agregarEstacion(santaAnita8);
iztacalco.agregarEstacion(coyuya);
iztacalco.agregarEstacion(apatlalco),
    apatlalco.agregarEstacion(iztacalco);
apatlalco.agregarEstacion(aculco),
    aculco.agregarEstacion(apatlalco);
aculco.agregarEstacion(escuadron201),
    escuadron201.agregarEstacion(aculco);
escuadron201.agregarEstacion(atlalilco),
    atlalilco.agregarEstacion(escuadron201);
atlalilco.agregarEstacion(iztapalapa),
    iztapalapa.agregarEstacion(cerroDeLaEstrella),
    iztapalapa.agregarEstacion(atlalilco);
cerroDeLaEstrella.agregarEstacion(iztapalapa);
cerroDeLaEstrella.agregarEstacion(uamI),
    uamI.agregarEstacion(cerroDeLaEstrella);
uamI.agregarEstacion(constitucion1917),
    constitucion1917.agregarEstacion(uamI);
exports.lineasDelMetro = new Map();
exports.lineasDelMetro.set(2, [
    cuatroCaminos, panteones, tacuba, cuitlahuac, popotla,
    colegioMilitar, normal, sanCosme, revolucion, hidalgo,
    bellasArtes, allende, zocalo, pinoSuarez, sanAntonioAbad, chabacano,
    viaducto, xola, villaCortes, nativitas, portales,
    ermita, generalAnaya, taxquena
]);
exports.lineasDelMetro.set(9, [
    tacubaya, patriotismo, chilpancingo, centroMedico,
    lazaroCardenas, chabacano, jamaica, mixiuhca,
    velodromo, ciudadDeportiva, puebla, pantitlan,
]);
exports.lineasDelMetro.set(12, [
    tlahuac, tlaltenco, zapotitlan, nopalera, olivos, tezonco, perifericoOriente, calle11, lomasEstrella, sanAndresTomatlan,
    culhuacan, atlalilco, ejeCentral, ermita, mexicaltzingo, parqueDeLosVenados, zapata, hospital20Nov, insurgentesSur, mixcoac
]);
exports.lineasDelMetro.set(8, [
    garibaldi8, bellasArtes, sanJuanDeLetran, saltoDelAgua8, doctores, obrera, chabacano, laViga,
    santaAnita8, coyuya, iztacalco, apatlalco, aculco, escuadron201, atlalilco, iztapalapa, cerroDeLaEstrella,
    uamI, constitucion1917
]);
exports.lineasDelMetro.set(1, [
    pantitlan1, zaragoza, gomezFarias, boulevardPuertoAereo, balbuena, moctezuma, sanLazaro1, candelaria1,
    merced, pinoSuarez1, saltoDelAgua1, isabelLaCatolica, balderas1, cuauhtemoc, insurgentes1, sevilla, chapultepec,
    juanacatlan, tacubaya1, observatorio
]);
var control = new controller_1.Control(exports.lineasDelMetro);
control.iniciar();
/*
const lineasMetro = {
    L1: ["Observatorio", "Tacubaya", "Juanacatlán", "Chapultepec", "Sevilla", "Insurgentes", "Cuauhtémoc", "Balderas", "Salto del Agua", "Isabel la Católica", "Pino Suárez", "Merced", "Candelaria", "San Lázaro", "Moctezuma", "Balbuena", "Boulevard Puerto Aéreo", "Gómez Farías", "Zaragoza", "Pantitlán"],
    L2: ["Cuatro Caminos", "Panteones", "Tacuba", "Cuitláhuac", "Popotla", "Colegio Militar", "Normal", "San Cosme", "Revolución", "Hidalgo", "Bellas Artes", "Allende", "Zócalo", "Pino Suárez", "San Antonio Abad", "Chabacano", "Viaducto", "Xola", "Villa de Cortés", "Nativitas", "Portales", "Ermita", "General Anaya", "Taxqueña"],
    L3: ["Indios Verdes", "Deportivo 18 de Marzo", "Potrero", "La Raza", "Tlatelolco", "Guerrero", "Hidalgo", "Juárez", "Balderas", "Niños Héroes", "Hospital General", "Centro Médico", "Etiopía", "Eugenia", "División del Norte", "Zapata", "Coyoacán", "Viveros", "Miguel Ángel de Quevedo", "Copilco", "Universidad"],
    L4: ["Martín Carrera", "Talismán", "Bondojito", "Consulado", "Canal del Norte", "Morelos", "Candelaria", "Fray Servando", "Jamaica", "Santa Anita"],
    L5: ["Politécnico", "Instituto del Petróleo", "Autobuses del Norte", "La Raza", "Misterios", "Valle Gómez", "Consulado", "Eduardo Molina", "Aragón", "Oceanía", "Terminal Aérea", "Hangares", "Pantitlán"],
    L6: ["El Rosario", "Tezozómoc", "Azcapotzalco", "Ferrería", "Norte 45", "Vallejo", "Instituto del Petróleo", "Lindavista", "Deportivo 18 de Marzo", "La Villa-Basílica", "Martín Carrera"],
    L7: ["El Rosario", "Aquiles Serdán", "Camarones", "Refinería", "Tacuba", "San Joaquín", "Polanco", "Auditorio", "Constituyentes", "Tacubaya", "San Pedro de los Pinos", "San Antonio", "Mixcoac", "Barranca del Muerto"],
    L8: ["Garibaldi", "Bellas Artes", "San Juan de Letrán", "Salto del Agua", "Doctores", "Obrera", "Chabacano", "La Viga", "Santa Anita", "Coyuya", "Iztacalco", "Apatlaco", "Aculco", "Escuadrón 201", "Atlalilco", "Iztapalapa", "Cerro de la Estrella", "UAM-I", "Constitución de 1917"],
    L9: ["Tacubaya", "Patriotismo", "Chilpancingo", "Centro Médico", "Lázaro Cárdenas", "Chabacano", "Jamaica", "Mixiuhca", "Velódromo", "Ciudad Deportiva", "Puebla", "Pantitlán"],
    LA: ["Pantitlán", "Agrícola Oriental", "Canal de San Juan", "Tepalcates", "Guelatao", "Peñón Viejo", "Acatitla", "Santa Marta", "Los Reyes", "La Paz"],
    LB: ["Buenavista", "Guerrero", "Garibaldi", "Lagunilla", "Tepito", "Morelos", "San Lázaro", "Ricardo Flores Magón", "Romero Rubio", "Oceanía", "Deportivo Oceanía", "Bosque de Aragón", "Villa de Aragón", "Nezahualcóyotl", "Impulsora", "Río de los Remedios", "Múzquiz", "Ecatepec", "Olímpica", "Plaza Aragón", "Ciudad Azteca"],
    L12: ["Mixcoac", "Insurgentes Sur", "Hospital 20 de Noviembre", "Zapata", "Parque de los Venados", "Eje Central", "Ermita", "Mexicaltzingo", "Atlalilco", "Culhuacán", "San Andrés Tomatlán", "Lomas Estrella", "Calle 11", "Periférico Oriente", "Tezonco", "Olivos", "Nopalera", "Zapotitlán", "Tlaltenco", "Tláhuac"]
};

const redMetro = new Map<string, Linea>();

function generarRedCompleta() {
    Object.values(lineasMetro).forEach(estaciones => {
        estaciones.forEach((nombre, i) => {
            if (!redMetro.has(nombre)) {
                redMetro.set(nombre, new Linea(nombre));
            }
            if (i > 0) {
                const actual = redMetro.get(nombre)!;
                const anterior = redMetro.get(estaciones[i - 1])!;
                actual.agregarEstacion(anterior);
                anterior.agregarEstacion(actual);
            }
        });
    });
}

*/ 
