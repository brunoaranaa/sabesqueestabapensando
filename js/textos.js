// ============================================================
// ARCHIVO DE TEXTOS
// ============================================================
// Este es el único archivo que necesitas editar para publicar
// un texto nuevo. Cada entrada es un objeto con estos campos:
//
//   id           identificador único, en minúsculas, sin acentos,
//                con guiones en vez de espacios. Ejemplo: "sabor-a-hierro"
//   titulo       el título tal como debe aparecer
//   fecha        formato YYYY-MM-DD (año-mes-día con guiones)
//   constelacion "sangre", "cielo" o "humo"
//   preview      una frase corta para el listado (1-2 líneas)
//   contenido    el texto completo. Reglas de formato:
//                  · Un salto de línea = nuevo párrafo con sangría
//                  · DOS saltos de línea (línea en blanco entre
//                    párrafos) = cambio de escena/idea, agrega
//                    un separador "· · ·" y resetea la sangría
//                  · El primer párrafo nunca lleva sangría
//
// Para publicar un texto nuevo: copia un bloque entero, pégalo
// arriba (los más nuevos primero), cambia los datos.
// ============================================================

const constelaciones = {
  sangre: {
    nombre: "Sangre",
    descripcion: "Lo que arde por dentro."
  },
  cielo: {
    nombre: "Cielo",
    descripcion: "Los refugios que encontré cuando todo ardía demasiado."
  },
  humo: {
    nombre: "Humo",
    descripcion: "Todo lo que parece ser."
  }
};

const textos = [

  {
    id: "manual-del-buen-mentiroso",
    titulo: "Manual del buen mentiroso",
    fecha: "2024-06-01",
    constelacion: "humo",
    preview: "La mentira no habita en el momento en que se manifiesta. El arte de mentir está en la anticipación.",
    contenido: `La gente suele pensar que mentir radica en decir algo que no es real y mantener la cara inmóvil. Que si giran los ojos a la derecha se verían descubiertos porque en algún lugar escucharon que eso era indicio de que lo que estaban diciendo era una falsedad. Quien lo afirme está equivocado.
La mentira no habita en el momento en que se manifiesta en el mundo exterior, no; el arte de mentir está en la anticipación de la mentira misma, en la idea que se representa en el mentiroso, muchas veces semanas, incluso meses atrás, cuando sabe que eventualmente tendrá que hacerle creer a alguien algo que no es verdad.
Una mentira es consistente sólo cuando es colocada dentro de un sistema de hechos de manera congruente. Cuando no es necesario demostrarla para que sea aceptada. Cuando uno hizo bien el trabajo, su única tarea es soltar una afirmación en el lugar que ya le fue construido con antelación. Es decir, que para mentir y tener éxito, debieron haberse dicho muchísimas verdades.
Cuando el mentiroso entra a una habitación, lo hace sabiendo que es probable que tenga que mentir. No es algo seguro, ni es consciente sobre qué versaría su falsedad, pero es su trabajo prepararse el terreno en caso de tener que hacerlo.
La confianza es el primer medio que se debe conseguir. Es el agua sobre la que los barcos se desplazan de un punto a otro. Sin ella, no hay verdad ni mentira que logre mantenerse a flote. Si alguien pretende enfrentarse a quien siente desconfianza hacia él, deberá demostrar incluso que el Sol sale una vez al día. Sí, es extremista, y lo es porque la confianza es indispensable para aquel que miente. No es que la confianza sea suficiente para hacer valer una mentira, pero lubrica el engranaje donde todo lo demás sucede.
El cómo conseguirla da paso a la anticipación. Habrá ocasiones en que el mentiroso salga de la habitación sin haber pronunciado engaño alguno, pero el cien por ciento de las veces lo hará con la confianza del resto en el bolsillo. Sabe que en algún otro momento le resultará útil. El mentiroso debe aprender a ser paciente, pues quien se precipita pierde.
Si alguien llega a una reunión, y lo hace a la hora pactada, no tiene necesidad de excusarse, eso lo sabría cualquiera. Ahí es donde el mentiroso comienza el acto. Es obvio que la lluvia genera que el tráfico aumente, por lo tanto, es normal que alguien se retrase a consecuencia de ello. Si esa persona fue puntual, ya es un avance, si encima se recalca que lo fue a pesar de la lluvia y del caos, se refuerza la idea de la confiabilidad. Dos a cero.
Luego se sientan las bases, se entrega cierta información, normalmente de carácter personal, que pueda ser verificable, quizá mostrando una foto en el teléfono, o incluso dejando que algún factor externo lo verifique por él. Hasta este momento, la constante es la verdad.
Luego viene la aceptación. La mayoría de las personas entrega su confianza a quien le haga sentir honesto. La validación ajena es quizá la parte más importante para ganarse a la gente. Por ello, se debe ser muy cuidadoso. Hay una delgada línea entre validar a alguien y resultar siendo un adulador. Se le debe hacer saber a la otra persona que también debe ganarse tu confianza, encontrando alguna forma de cuestionarle y ponerle en un lugar donde deba encontrar la manera de explicar tal o cual cosa, por insignificante que esta sea. Cuando le dejas convencerte, ya saben que la honestidad se pone a prueba. ¿Qué mentiroso pone sobre la mesa la posibilidad de ser cuestionado?
Ahora dos personas sinceras conversan de frente. Nadie quiere sacar provecho del otro y las defensas están en el suelo. El terreno está preparado para la mentira.
Aquí dos puertas se colocan frente al mentiroso: detrás de la primera, la verdad tiene peso suficiente para que el engranaje se mantenga girando. La mejor mentira es la que no necesita pronunciarse.
La segunda puerta le entrega la falsedad en la mano. Lo único que resta es ponerla en su lugar.`
  },

  {
    id: "sabor-a-hierro",
    titulo: "Sabor a hierro",
    fecha: "2024-11-15",
    constelacion: "sangre",
    preview: "Se había quedado ahí parado, mirando fijamente los hilos de sangre que avanzaban sobre el concreto.",
    contenido: `Se había quedado ahí parado, mirando fijamente los hilos de sangre que avanzaban sobre el concreto. El insesante tránsito de los autos y la deficiencia en la pavimentación propicia que cada vez se formen más baches; no le sorprendió que la cabeza cayera justo en un pequeño socavón, y a la altura de la frente, un balazo. Hoyo en uno. No, hoyo en dos.
Alcanzó a ver el par de ojos que, de llegar unos minutos antes, hubieran mostrado un tono café; ahora, se veían grises, percudidos, carentes de soplo vital. Ahí, una voz lo trajo de nuevo a la realidad.
—Son ciento tres pesos, joven —, dijo un viejo canoso y sudoroso que estaba metiendo una caja de cigarros, unas papas grandes y unos chicles en una bolsa.
—¿Usted vio cuando pasó? —respondió, agarrando con una mano la bolsa y con la otra dándole un billete de doscientos.
—Uy, joven. Si supiera lo que le toca ver a uno. La cosa está cada vez más cabrona. Ese estaba platicando con otros dos, muy tranquilitos todos. Y, en una de esas, empezaron a gritar y a empujarse, y uno saca el cuete y que se lo quiebra. Los dos que venían juntos se pelaron rápido en una moto y ahí lo dejaron tirado —le explicó mientras observaba el billete a contraluz—. ¿Tiene tres pesos para darle cien? ¿No? Bueno, luego me los pasa.
Guardó el cambio y se fue caminando sin quitar la mirada de la sábana blanca que se extendía en el aire, cayendo sobre el bulto cada vez más frío. Estuvo a punto de chocar dos veces con personas que estaban detenidas en la banqueta, quienes contemplaban los ríos colorados formados sobre el asfalto. Alguna cualidad hipnótica tiene la sangre. Tal vez es el hierro el que la dota de ese magnetismo. O, como dicen, será que la sangre llama.

Cuando llegó a su departamento dejó la bolsa en la mesa del comedor y fue a lavarse las manos a la cocina. A lo lejos alguien gritó:
—Te marqué para decirte que trajeras un refresco, pero no me contestaste —reclamó desde el sillón de la sala un tipo cachetón y con cara de niño. De esos que se ven bonachones desde lejos—. Memo, ¿para qué tienes celular si no lo vas a contestar? ¿Y si me estuviera dando un ataque cardiaco?
—Si te estuviera dando un paro, estarías muy pendejo llamándome a mí en vez de a una ambulancia —replicó secándose las manos con una toalla—. Dejé el celular en el cuarto, y aunque hubiera contestado, no me alcanzaba para el refresco.
Los dos quedaron sentados de frente a la televisión, con los pies sobre la mesa de centro y sosteniendo un plato con papas fritas.
—¿Viste que mataron a un vato en frente de la tienda de Don Luis? Dice que vio cuando le dispararon, pero ya ves que luego es bien chismoso ese pinche viejo. ¿Te acuerdas cuando por su culpa casi linchan al hijo de doña Mari? Ahorita ya había un buen de patrullas, pero sirven para poco. Esos güeyes nada más llegan cuando ya está el muertito todo mosqueado.
—¿Y te quedaste viendo? Me sorprende que no te hayas desmayado. Con eso de que eres bien chillón para todo. En una de esas se te baja la presión y quedas como Gasparín. Memín Gasparín.
Era un chiste malo, pero la imagen de pensarse como un fantasma le removió las tripas. Después de todo, existía la posibilidad, sólo si eres ese tipo de creyente, de que en eso se convirtiera aquel pobre fallecido: en un fantasma penante para el resto de la eternidad. Porque, a decir verdad, quien quiera que haya sido, o lo que sea que haya hecho, terminar con una bala en el lóbulo frontal del cerebro no es consecuencia lógica de ser un pan de dios. Si había algo más después de la muerte, a este no le iba a salir el boleto para ir a dar al cielo.
Tenía grabada en la mente esa mirada perdida. Aquellos ojos enlodados, era como si le hablaran: "Guillermo…", "Guillermo…"
—¡Guillermo! —repitió por tercera vez el monigote que estaba sentado al lado de él y que se le había quedado viendo con los ojos bien abiertos.
—¿Qué quieres?
—Tu celular está sonando —masculló con una papa a medio masticar.
Ah, sí. El celular. No había pensado en él desde que salió a la tienda. Lo había dejado arriba de la almohada en su cama. Caminó con pasos largos y apenas logró contestar antes de que la llamada se cortara. Del otro lado de la línea se escuchó una voz de mujer:
—¿Estás solo?
—Manuel está en la sala. —Cerró la puerta, girando la perilla con la palma de la mano completa para absorver el ruido.
—Pensé que sólo se iba a quedar dos días contigo —respondió tajante aquella voz.
—Es mi hermano, no podía decirle que no se quedara, ni lo iba a correr. No sabe nada. Te aseguro que no va a ser un problema —susurró, pero no hubo respuesta—. ¿Cuándo quieres que lo haga?
—Mañana a las doce. Ya está todo arreglado. No la vayas a cagar, Guillermo—. Sentenció la voz, y luego colgó.

En cuanto terminaron de hablar apareció una alerta de batería baja. Conectó el celular y se quedó parado frente a la ventana. A esa hora, y a pesar de todas las luces urbanas, sólo se podía obsservar oscuridad. Qué triste es vivir en una ciudad donde el cielo no se atreve a mostrar sus estrellas. El frío de la noche le caló en los huesos y se sintió mareado. Con sabor a metal en la boca. Todo en el aire tenía un amargo olor a hierro.
Manuel estaba prendiendo un cigarro en el balcón de la sala cuando Memo salió con un cenicero en una mano y en la otra un par de cervezas. Le dio una a su hermano y después puso el cenicero en el barandal.
—Mañana voy a salir como a las once. Voy a ver a unas personas para ver si me conectan para un trabajo nuevo. No sé bien a qué hora vaya a regresar. De todas formas, tú come temprano y no me esperes.
—¡Ay, padrino! Ponte algo bonito —. Desde que eran adolescentes, a Manuel se le hizo costumbre decir eso cada que se presentara la ocasión. Cuando Memo le preguntó por qué lo hacía, la respuesta lo aturdió. "Porque nunca sabes si esa va a ser la ropa con la que te vas a morir. Qué pena si te mueres con tu playera del Cruz Azul y con un short todo feo. Directito al Gráfico", le dijo aquella vez.
—Obvio. Me voy a llevar mi traje gris. El mamalón—dijo, guiñándole el ojo—. ¿Me pasas el encendedor?

De nada le sirvió el consejo. El día que sepultaron a Guillermo, no pudieron ponerle su traje gris. Le habían quedado los siete agujeros de bala que no pudieron remendar.`
  },

  {
    id: "petricor",
    titulo: "Petricor",
    fecha: "2026-02-04",
    constelacion: "sangre",
    preview: "Prometí dejar el cigarro cuando ya no hubiera más por lo que fumar. El problema es que siempre hay algo.",
    contenido: `Prometí dejar el cigarro cuando ya no hubiera más por lo que fumar. El problema es que siempre hay algo. Hoy me permito un par al día, solo cuando las circunstancias lo ameritan, aunque, siendo honesto, siempre lo hacen. Aquella fue una de esas veces.
Eran alrededor de las seis de la tarde cuando el teléfono sonó. El sol comenzaba a ocultarse detrás de algunas nubes distraídas y, aunque el calor había disminuido y la lluvia estaba por llegar, aún sobrevivía el bochorno de las tardes de verano. Yo estaba a punto de servirme un trago cuando sucedió. Supuse que era alguien de la oficina: los días habían sido especialmente estresantes y toda mi tranquilidad descansaba en la esperanza de que no se materializara un escenario concreto que pondría en peligro cada una de las cosas por las que habíamos trabajado durante tanto tiempo. No me equivoqué.
Cuando colgué, dejé el celular sobre la barra de la cocina. Todo se convirtió en silencio, en una resignación disfrazada de calma. Fue como quedar suspendido dentro del ojo del huracán. Con plena conciencia de mis actos terminé de mezclar lo que había servido en el vaso y lo bebí de un trago; tomé mi cajetilla y salí a la calle.
Al poner un pie afuera me recorrió el calor que había entibiado el pasto durante el día. La humedad de la lluvia comenzaba a caer sobre los arbustos, impregnando el aire de un olor a libertad que sabía que no tendría, al menos no a partir de ese momento. Hubo tanta confusión y tanta soledad que mi mente no encontró refugio fuera de sí misma. Terminé en la banca de un parque vacío por el presagio de la tormenta. No me importó. Dejé que la cabeza hiciera las veces de guarida y comencé a recordar.

Elegimos la fecha con cuidado para que nadie tuviera la mínima excusa para ausentarse. El viernes, cerca de las nueve de la noche, llegamos a la casa que nos prestó la familia de Eric. Nos instalamos, nos cambiamos y nos metimos a la alberca. Fue una cena tranquila: nos pusimos al corriente de lo importante y acordamos dormir bien para descansar del viaje.
A la mañana siguiente desperté por el sol que se escabullía entre las persianas y abandoné todo intento de volver a dormir. Me quedé acariciando su cabello mientras ella seguía dormida sobre mi pecho. Pocas cosas me daban tanta calma como amanecer junto a Mónica. Era el único momento en que el tiempo parecía detenerse debajo de nosotros. Habrán pasado cuarenta minutos hasta que se estiró y me besó. Le pregunté si quería desayunar; me dijo que bajara primero a ver si los demás ya estaban despiertos.
No encontré a nadie en las áreas comunes, así que aproveché para bañarme y arreglarme. Cuando bajé de nuevo, Simón y Andrea preparaban café. Al poco rato aparecieron José, Alexis y Emmanuel —habían compartido habitación— y después Eric y Pamela. Subí a buscar a Mónica, que ya se estaba maquillando, y la esperé mientras terminaba.
Pasamos el día bailando, jugando y hablando de cualquier cosa, como lo habíamos hecho durante más de quince años. Con el tiempo se volvió difícil empatar nuestras agendas; por eso planeamos el viaje con seis meses de anticipación. Curiosamente, coincidió con un momento en el que todos teníamos algo que celebrar.
Eric había conseguido un ascenso importante; Simón cerró su primera venta por un millón de pesos; Andrea se titulaba de la maestría; José y Alexis habían obtenido la patente necesaria para vender su marca afuera de Latinoamérica; Emmanuel ganó el concurso para dar clases en la facultad; y a mí me habían hecho socio en la firma donde entré un año antes. La vida nos sonreía. Además, por primera vez en mucho tiempo, tres de nosotros estábamos perdidamente enamorados.
Crecimos juntos. Simón y Eric fueron vecinos desde el kínder y después coincidimos todos en la secundaria. A partir de ahí no nos separamos. Nuestra relación traspasó los confines de una amistad y se instaló en el territorio de la familia. Yo no tuve hermanos y ellos se convirtieron en algo que ningún vínculo de sangre habría podido igualar.
Estábamos en el despertar de la vida adulta, en ese punto donde uno empieza a entender que sus decisiones marcarán el rumbo de lo que viene. Eso nos permitió disfrutar cada segundo. Bastaba una mirada para reconocernos: sabíamos que ese momento no se repetiría. Lo estábamos logrando y lo estábamos haciendo juntos, como lo imaginamos tantos años antes.
En algún punto de la tarde me recosté en un camastro junto a la alberca y me quedé mirando lo que tenía enfrente. Simón y Andrea estaban apoyados en el barandal; ella le rodeaba el cuello con los brazos y se sonreían con el alma. Pamela jugaba cartas con Alexis y José en la mesa del jardín, y Eric recogía la carne que había sobrado del asador.
¿Cómo había pasado tanto tiempo sin darnos cuenta? Hicimos toda clase de tonterías, nos vimos enamorarnos y nos acompañamos cuando nos rompieron el corazón. Forjamos nuestro propio criterio, aprendimos a hacerlos convivir. Y sí, allá afuera podíamos ser exitosos, pero ahí, juntos, volvíamos a ser adolescentes de quince años dispuestos a ridiculizarnos con tal de hacernos reír.
En medio de mi reflexión, Mónica salió de la casa. Se había puesto algo más ligero; el calor había aumentado. Al verla confirmé que estaba viviendo la mejor vida que pude imaginar. Se sentó sobre mis piernas, me rodeó con los brazos y me dio un beso capaz de detener mil guerras. Recuerdo oler la mezcla del bloqueador solar con su perfume y, aun así, reconocer el olor de su piel. Me preguntó si la estaba pasando bien, pero no pude responder. La felicidad me desbordó. Asentí con los ojos llenos de lágrimas. Ella lo entendió y me abrazó más fuerte. Ese abrazo fue mi combustible muchos años después.
Yo intentaba guardar cada segundo en la memoria cuando Pamela, tras ganar todo el dinero que Alexis y José habían apostado, llamó a Mónica para hacer algo que ya no recuerdo. Mónica me besó y fue tras ella.
Apenas me recuperaba cuando la voz de Emmanuel me sacó del trance. Había estado sentado en el camastro contiguo todo ese tiempo.
—Nacieron para estar juntos —me dijo.
Le pregunté qué hacía ahí.
—Observando. Grabándome esto —respondió—. Porque sé que lo que estamos viviendo ya se está convirtiendo en un recuerdo. Y después, cuando estemos lejos, cuando la realidad se nos atore en la garganta, vamos a volver aquí. Hoy me siento más vivo que nunca.
El nudo se volvió a tensar y mis ojos volvieron a recuperar su exceso de humedad. Le extendí la mano y él la tomó con firmeza.
—Te amo, amigo. No lo olvides —dijo.
El resto de la tarde pasó entre juegos, risas y las mismas anécdotas de siempre. Escuchamos a Eric imitar a nuestros maestros de la secundaria y recreamos la coreografía de la ceremonia de egreso. Nunca me dolió tanto el estómago por reír. Entre los tragos, Simón colocó su cámara en un tripié y tomó la única foto que obtuvimos de ese viaje.
Por la noche, las chicas se adelantaron a los cuartos y nos quedamos nosotros, sentados en círculo en medio del jardín. No hubo mucho que decir: bastaron los cigarros, las botellas y las miradas.
—Estas son las historias que quiero que les cuenten a mis hijos cuando me visiten —dijo Emmanuel.
—Tú vas a hablar el día de mi boda —respondió José.
—Primero encuentra a alguien que te quiera —dijo Alexis.
—Que te aguante —añadió Eric.
Entre las risas encontré la mirada de Emmanuel, orgulloso de tener el cariño de sus hermanos.
—Brindo por seguirnos aguantando —sentenció Simón.
Levantamos los vasos.

Después de todo, José sí encontró a alguien que aceptó casarse con él, pero fue Eric quien habló el día de su boda. Tres meses antes de la ceremonia, Emmanuel regresaba a casa tras dar su última clase del turno vespertino. Había intentado dejar de fumar semanas atrás, pero esa noche se detuvo en la tienda frente a su casa a comprar un cigarro suelto. Su vecino, un drogadicto sin dinero, decidió asaltar el único local abierto. En su delirio no reconoció la piel de Emmanuel cuando la atravesó con una navaja oxidada. No hubo nada que hacer.
En el funeral volví a ver a Mónica. Se veía distinta. Ya no usaba el mismo perfume y ahora alguien más despertaba a su lado. Aun así, me pareció un lindo detalle su presencia.

Recordarlo todo me llevó a llorar en silencio en la banca de aquel parque vacío. Como pude regresé a casa y pasé la noche trabajando en el escritorio, buscando una solución a mi problema, mirando de cuando en cuando el marco con la única foto de aquella tarde.
La tarde en la que fuimos felices juntos, por última vez.`
  },

  {
    id: "pascua",
    titulo: "Pascua",
    fecha: "2026-04-04",
    constelacion: "sangre",
    preview: "Recuerdo la tarde en que me enteré. Su heraldo tomó mi mano, me miró a los ojos y colocó sus labios sobre los míos.",
    contenido: `1. LA CAIDA

Recuerdo la tarde en que me enteré. Su heraldo tomó mi mano, me miró a los ojos y colocó sus labios sobre los míos, tan dulces como siempre. Anunció con un beso que se acercaba el día de mi muerte. Secó mis lágrimas y, con una disculpa escondida entre su media sonrisa, se levantó y se fue.
Un par de días ocurrieron sin ninguna novedad. Esperé dejar de respirar mientras dormía, atravesarme en el trayecto de una bala perdida e incluso intenté, debajo de los árboles, que algún rayo me descubriera. Nada pasaba más que las horas. Sin sentir mucho, entendiendo menos.
Me encontró al fin una noche, mientras preparaba mis cosas para el día siguiente. «Eso no será necesario», me dijo. Le pregunté si podría despedirme, pero me miró como si ella supiera que ya no había nadie de quién hacerlo. Tampoco respondió cuando le pregunté si iba a ser doloroso. Yo no lograba comprender nada.
Resulta que uno va muriéndose de a poco, como las flores se van rindiendo a la gravedad. La vida sigue fluyendo, solo que ya no permanece en su sitio.
Me llevó frente a una puerta y me ordenó entrar. Al interior solo había una silla frente a un espejo. «Siéntate y mantén los ojos abiertos» y cerró la puerta dejándome solo. Yo obedecí y tomé mi lugar.
Observé mi reflejo con toda la tranquilidad de quien sabe que es la última vez que será mirado. De pronto, mi reflejo comenzó a deformarse y toda esa calma se vio arrebatada por un dolor intenso proveniente de mi interior. Un grito desgarró mi garganta y se me entumecieron las manos. Podía sentir que mil espinas me atravesaban la lengua, y cómo mis huesos se fracturaban debajo de mi piel. La sangre brotó de mi frente en pequeñas pero profusas gotas de sudor que recorrieron mis mejillas hasta llegar a mis labios. Un sabor a sal quemada y hierro fundido.
Frente a mí, el espejo comenzó a contar una historia: la mía. Aparecieron todos los dolores que me pertenecieron, incluso aquellos que no me correspondía adoptar. Vi mis carencias y mis heridas abiertas. Todas las veces en que alguien profirió un insulto en mi contra y todas aquellas en que fui yo quien acertó alguno en contra de alguien más. Pude ver mi necesidad de atención y aprobación, la falsa empatía que enmascaraba el miedo a que me abandonaran. Atestigüé todos los castigos que pronuncié en ejercicio de mi soberana y autoritaria inconsciencia; vi a mi soberbia arrebatarme tesoros que yo mismo pedí descubrir. Las trampas colocadas por mi orgullo y mi ego herido en las que fui cayendo cada vez que alguien endulzaba mi oído con el veneno de la pertenencia. Las mentiras que me vendí para no enfrentarme a mis propias consecuencias.
Lo recuerdo bien. Mientras consumía el último aliento que me perteneció, pude verme a los ojos y mirar una realidad que nunca quise ver.
Hora de la muerte: la prevista.

2. EL ECO

Aquí el tiempo transcurre distinto. A fin de cuentas es algo que solo le importa a los vivos, incluyendo a aquellos que no están muy interesados en vivir.
Uno piensa que cuando morimos todo el dolor desaparece. Creemos que los fallecidos están mejor que los que nos quedamos. Bueno, mejor dicho, eso era algo que yo pensaba. Pero resultó una mentira, construida para hacer más llevadero el duelo. La realidad es que todo sigue doliendo, pero duele diferente. Es un dolor casi susurrado, que te habla al oído mientras te acaricia la piel nada más con la punta de los dedos.
Desde que llegué creí ser el único en este lugar. Tan oscuro como si tuviera los ojos cerrados, pero supe por el perfume del aire que se trataba de una especie de campo abierto, sin un horizonte visible, como intentar ver el mar durante la noche. Esa ansiedad causada por la incertidumbre, por la falta de finitud.
No sentí hambre ni sueño, ninguna necesidad fisiológica porque, para rematar, no podía ver mi cuerpo. Solo sabía que estaba ahí. Por primera vez, el silencio no me abrumó, terminé por entregarme a él.
En un determinado momento comenzaron las voces. Pertenecían a personas que conocí a lo largo de mi vida, diciendo cosas que se parecían a los recuerdos que algún día poseí, pero eran distintos. En unos casos variaba alguna palabra, en otros el mensaje era completamente distinto. Supongo en algún punto mi memoria comenzó a tomarse demasiadas libertades creativas. Debo ser honesto y señalar que nunca sentí tristeza o nostalgia; entendía que esa había sido mi vida, pero no se sentía como si fuera parte de mí. Sin embargo, no significa que no sintiera nada. El dolor me acariciaba muy por encima. Sutil pero presente.
Observé aquella vida con una frialdad absoluta, con distancia y con cierto hartazgo. Como si ahora me pareciera obvio el resultado al que me llevaron mis decisiones. Permanecía inmutable ante lo que veía.
Pasó mucho, mucho tiempo. Me aprendí de memoria cada escena, cada conversación, cada coincidencia. Y ahí hubiera permanecido, si no fuera porque en una ocasión, mientras observaba una mañana de navidad, una voz desconocida me sacudió. «¿Terminaste?», me preguntó. Yo intenté ubicar el lugar desde el cual provenía esa voz casi sepulcral, pero no tuve éxito. «¿Qué se supone que debo hacer con esto? Ya sé lo que pasa después, no hay nada que pueda cambiar, ya lo intenté». «¿Y por qué piensas que tu trabajo es cambiarlo? ¿Qué sentido tendría?». Yo comenzaba a irritarme; no es como que yo hubiera decidido entrar en un limbo interminable de recuerdos. «¿Sentido? ¿Qué me vas a decir tu del sentido? Nada aquí lo tiene, me la paso como un imbécil reviviendo cada momento de una vida que ya no es mía. Ni siquiera siento algo parecido a la añoranza de volver a vivirlo. Esto no me sirve ni para sentirme miserable por todo lo que se fue».
No hubo respuesta por lo que fácilmente pudo equivaler a treinta minutos de los vivos. De repente, por primera vez el cielo se iluminó. Me encontraba en un enorme prado, a lo lejos alcanzaban a asomarse algunos valles, todo pintado de verde y amarillo. Supuse que era el inframundo de los griegos. En vida no le atiné ni a la religión que era la buena. «Estos no son los Campos Elíseos», me respondió la voz como si supiera lo que pensaba. «¡Vaya! Entonces tú eres Dios. Bueno, tan equivocado no estaba», refunfuñé. «Piensa lo que quieras, no es mi trabajo hacer que lo entiendas. Eso depende de ti», me dijo. Eso me puso a pensar, no era ni un cielo, ni un infierno, tampoco era un paisaje especialmente bello, tal vez no estaba muerto, pero tampoco me sentía ni tantito vivo. Recordé que hasta ese momento todo había sido oscuridad, y miré hacia abajo para ver si reconocía mi cuerpo. Nada. Solo pasto. O era una cabeza flotante o ni siquiera estaba ahí. Nada tenía sentido alguno.
Todo volvió a oscurecerse. Al menos ya sabía que no había hacia dónde ir. Pasó más tiempo sin rastro de aquella voz, hasta que por fin se me ocurrió preguntar en voz alta: «¿Por qué estoy aquí?». «Fue tu decisión. Aquí sólo se puede llegar voluntariamente», me respondió. Tardé un poco para procesar esa verdad. Recordé todas las veces que olvidé el sonido del silencio, cuando mis pensamientos se me salían de las manos y me llevaban a experimentar las angustias más despiadadas. Tanto pedí yo por vivir la calma, tan poco pude ver que siempre estuvo a mi alcance. Y ahora, que todo aquello me era ajeno, que no había nada más que la nada, acepté que mi única labor era rendirme a mis circunstancias.
No hubo ninguna valoración moral, solo causas y resultados. Lo que estando vivos duele, dolerá. Las lágrimas se ofrendan a la posibilidad de amar, de la misma forma en que se ofrendaron sobre nuestra piel las caricias y las miradas. Nada se repite nunca. Incluso cuando nos aferramos a cometer los mismos errores, nunca la prueba será la misma.
La necedad me orientó a mi muerte. El cansancio me llevó al silencio y mi falsedad resultó ser mi verdad. Viví una vida digna de ser vivida. Que ya no me pertenece y no me pertenecerá, pero que, aún así, viví al límite. Entregué todo lo que fue mío hasta el último momento, dejé semillas sembradas en quienes me acompañaron. Hay palabras que quedaron sin pronunciarse, historias que no serán contadas. Pero hubo mucha vida en las verdades que sí nacieron, hubo tanto amor en aquellos momentos en que se amó. Porque viví la vida en la única forma en que logré entenderla.
Entonces, la tierra se sacudió.

3. EL DESCANSO

Cuando abrí los ojos, sólo había silencio. Mi primer instinto fue estirarme debajo de las sábanas y mover los dedos de los pies. A diferencia de antes, la luz entraba a través de la ventana con una intensidad que sólo se encuentra al nacer el día. Me mantuve quieto por unos minutos, sólo para asegurarme que se trataba de mi estado de vigilia y no de otra ensoñación. Cuando reuní el valor suficiente, me incorporé sobre mi cama y me detuve a observar la habitación. Todo estaba en su lugar, tal cual como solía encontrarse. Hice el intento pero no logré recordar lo que había sucedido la noche anterior; busqué algún indicio que denotara algo, una botella vacía, un porro a medio fumar. Nada. Solamente esa voz, retumbándome en la cabeza. Yo esperaba sentirme distinto, pero no hubo ninguna diferencia. Al menos no como lo pintan en las películas. No hubo un éxtasis, una urgencia por vivir, por disfrutar cada momento como si fuera el último. Fue cuando llegué a la cocina para hacer el desayuno que por fin lo escuché: el silencio. La absoluta ausencia del escándalo en mi mente.
Dejé el sartén sobre la hornilla y apagué la estufa. Salí al balcón de la habitación y fui recibido por el viento fresco del amanecer. Mis sentidos se habían vuelto más perceptivos. Podía escucharlo todo, podía olerlo todo. Nada se veía diferente, sólo se veía más claro. Feliz no estaba, únicamente estaba tranquilo. Recordé todo lo que viví antes de sentarme frente a aquel espejo ante el que mi cuerpo se fue descomponiendo, todas las personas, todo mi pasado, seguían ahí. La soledad, la nostalgia, la tristeza y el dolor, ahí estaban, sólo que esta vez tomaron su distancia. Fue como ser consciente de una herida que ya no estaba abierta, pero que se había vuelto indeleble. Entendí que era yo el que decidía qué tanto presionarla para saber que seguía estando ahí. Espero no se me haga costumbre.`
  },

  {
    id: "boloncho",
    titulo: "Boloncho",
    fecha: "2025-06-10",
    constelacion: "cielo",
    preview: "Por las tardes en que me siento triste, cuando he perdido la esperanza de lograrlo, vengo a la nevería de siempre.",
    contenido: `Por las tardes en que me siento triste, cuando he perdido la esperanza de lograrlo, o incluso cuando he tenido un gran día, vengo a la nevería de siempre, la de la esquina, la que descubrimos juntos.
Primero, me acerco al mostrador y busco con la mirada al señor que siempre nos atiende. Ya me reconoce y le caigo bien, aunque me da vergüenza confesarle que no recuerdo su nombre. Tú y yo, en secreto, le decimos Don Boloncho.
Él me pregunta cómo estoy, si ya salí de trabajar o si solo voy de paso, pero mi parte favorita es cuando me pregunta por ti. Y yo me contengo, sé que si empiezo a hablar la noche podría encontrarme y yo apenas iría por la mitad.
Luego, le pido lo mismo: un capuchino sin azúcar. No importa el calor o el bochorno, la temperatura adentro siempre es perfecta. Cuando entro, examino las mesas, reparo en cuáles están ocupadas y cuáles vacías, pero siempre elijo una en especial.
Tú y yo solemos ocupar dos: la más grande, la que se volvió nuestra mesa, y la de repuesto. La primera no la ocupo cuando voy solo. Es demasiado amplia y si no vas conmigo siento que me sobra espacio; hacer el intento me llevaría a sentir que me haces falta. Siempre me haces falta. Aunque te sepa mía, aunque te lleve en mí. Nunca será suficiente.
Mejor me siento en la segunda. Es más pequeña y está pegada al barandal. Y la silla que elijo es la que mira al semáforo. A esa esquina que ha sido nuestro punto de encuentro desde el inicio de esta historia.
Después, amable y sonriente, mi amigo me lleva el café hasta mi lugar, y ahí, con el primer sorbo de espuma comienza mi ensoñación.
Me permito entrar en un espacio idílico, donde nadie más existe, solo tú y yo. Sin juicios ni reproches imagino, recuerdo y sueño. Observo mi vida desde el primer día. Miro mis logros y mis proyectos. Mis decisiones y todas las veces que tuve que caerme, levantándome más a fuerza que de ganas. Entonces, me agradezco, porque sin todo aquello, no hubiera llegado a encontrarte.
Luego, observo tu vida, la parte de ella que he podido conocer, y la que no, la imagino, me la invento. Hay tanto que aún no conozco de ti, ¡qué fascinante! Porque eres como el cielo; desafiante y misterioso, siempre superando la belleza del día anterior. Jamás lo adornarán las mismas nubes, ni mostrará los mismos colores, pero siempre será el lugar de quien necesita refugiarse. Un inacabable espejo donde uno se descubre. Siempre iluminándolo todo.
A veces, quisiera vivir en él. Pero, por más que lo desee con todas mis fuerzas, jamás tendré la certeza de cómo era el cielo antes de yo poder mirarlo por primera vez. Así que me dedico a admirar el que viene con cada día, es el único que importa.
Y así como al cielo, te admiro a ti. Admiro tus atardeceres y tus tormentas, tan intensas y puras. Soy testigo de cómo el mundo sucede a tus pies y no dejo de asombrarme. Porque sí, eres como el cielo, abarcando todo lo que existe. El tiempo corre, la vida pasa y tú, como la luz, permaneces. Siguiéndome a donde vaya, mirándome desde dentro.
Luego mi atención regresa a la espuma del café y recuerdo nuestras risas. La forma en que entrelazas tu brazo con el mío y cómo envuelves mi pie debajo de la mesa.
Sueño que cruzas la calle y te sonrojas al verme. Que nos encontramos para ir a casa. Para que, recostados en el sillón, con tu cabeza en mi pecho y mis dedos en tu cabello, me cuentes de tu día. Reviviendo cómo resolviste el problema que nadie más pudo, la discusión a la hora de la salida y el sabor del jugo que bebiste en la comida.
Finalmente, pago la cuenta y me retiro con un saludo diplomático. Y salgo de la nevería sabiendo que soy el hombre más afortunado del mundo. El que logró robarse las estrellas, subir al cielo y colocarlas de vuelta. El único que fue capaz de conquistar aquello que uno voltea a ver cuando necesita recordar que lo puede todo.`
  },

  {
    id: "caminantes",
    titulo: "Caminantes",
    fecha: "2025-09-20",
    constelacion: "cielo",
    preview: "Escribo para ti porque sé que en mis palabras podré encontrarte cuando mi amor no sea suficiente para hacer que te quedes.",
    contenido: `Escribo para ti porque sé que en mis palabras podré encontrarte cuando mi amor no sea suficiente para hacer que te quedes.
Si he de mirar atrás podré ver un camino recorrido sobre las más frescas hierbas, un sendero rodeado de aquellas flores con el perfume más exquisito jamás concebido. Y el cielo, ¡oh, el cielo! Días azules teñidos de violeta, rosa y naranja, en ocasiones de un gris cargado de incertidumbres. Pero, al final, siempre cielo, con esa calma inexorable que invita a las almas más inquietas a sosegarse. Toneladas de nubes me sobrevolaron, trayendo claridades precedidas de leves lloviznas, tormentas y, una que otra tarde, algún huracán que arrasó con todo a su paso.
Si he de mirar atrás podré ser testigo del gran amor que me proporcionó el aliento vital para no rendirme. Un amor que me acompañó a lo largo de todos esos pasos que me han traído hasta aquí. Y, muy a mi pesar, contra cualquier intento desesperado por contravenir esta determinación inevitable, el amor, como la materia, no se destruye sino que estará sujeto a transformarse para siempre.
He sido testigo de lo que el amor más puro puede gestar en el alma de la gente. Lágrimas que sanan y en las que se reflejan vidas y heridas compartidas, que comulgan y se funden con el único propósito de dar a luz a la flor más bella: la flor de la otredad. Lo dijo aquel autor cuyo nombre no logro evocar, la otredad es vernos a nosotros mismos, a través del reflejo de la mirada del otro. Yo creo que ahí está el fin más íntimo de la compañía.
He sentido sobre cada rincón de mi cuerpo el cálido recorrido de una ternura dulce y aterciopelada, que apaciguó tantas ansiedades y proyecciones fatales sobre un futuro improbable. He acariciado la piel bronceada y templada por veinticuatro primaveras que moldearon el carácter valiente y arrojado de las personas destinadas al triunfo. He sido mirado por la comprensión más humana, y resguardado por el corazón más compasivo.
He besado los labios que desprendieron los temores de mis poros, y escuchado la melodía capaz de terminar todas las guerras que azotan al mundo. He dormido en las piernas y los hombros que han sido refugio de batallas entre pensamientos sangrientos. He reído, llorado, soñado y aprendido. He vivido.
Dos caminos unidos por tramos trazados desde arriba, con orden de bifurcarse al ser ahora más fértiles; la tierra de ambos está aireada y mullida, preparada para que en ella sean sembradas las flores que adornarán el resto del camino. Un camino de inagotables riquezas, destinadas a ser cosechadas por las manos que alguna vez curaron mis heridas, y que ahora tendrán la misión de curar las propias.
Si hoy me encuentro aquí, es porque he logrado entender que hay situaciones que escapan de mis dominios como mortal que soy. Incluso siendo un co-constructor de mi devenir, no tengo la habilidad que me permita forjar y amoldar destinos (ajenos) a voluntad. Lo que alguna vez Montaigne me susurró, y que no logré comprender como ahora lo hago, aparece de nuevo, reclamando su título de verdad irrefutable: no tenemos en las cosas futuras más poder que en las cosas pasadas.
Si he de mirar atrás, podré encontrarte en cada huella, olerte en cada gerbera. Podré escucharnos y sentirnos. El pasado, como el camino, se anda, mas no se deja atrás.
Hoy soy. Agradezco. Recuerdo. Amo. Porque fuimos y, por siempre, seremos.
Bruno.`
  },

  {
    id: "donde-habita-la-certeza",
    titulo: "Donde habita la certeza",
    fecha: "2026-02-14",
    constelacion: "cielo",
    preview: "Se me perdió la certeza. Llevaba rato buscando, empeñado en intentos infructuosos.",
    contenido: `Se me perdió la certeza. Llevaba rato buscando, empeñado en intentos infructuosos. Todo porque una tarde, cuando acepté que ya no me serviría de mucho, decidí arrancarla de mi pecho y lanzarla tan lejos como pude. Resignado a las consecuencias de mis caprichos, decidí dejarlo por la paz. Así ocurrió un buen tiempo hasta que, anoche, aquella certeza abandonada se cruzó de nuevo conmigo.
La encontré escabullida detrás de una mirada ajena que avivó la flama huérfana que habitaba dentro de mí. De pronto, me reconocí en los ojos que se posaron sobre los míos, curiosos, preguntando por la razón de mi sorpresa; de los ojos a los labios, luego de vuelta a los ojos, sin saber dónde colocar mi eternidad. Todo mientras me fluía la vida por las avenidas debajo de mi piel, como si su sangre llamara a mi sangre.
Luego mi certeza se fue con ella. Tuve oportunidad de arrebatársela mientras bailábamos la última canción; en su lugar preferí tomar prestado un poco de la tersura de su piel. Ya se la regresaré cuando traiga de vuelta lo que se llevó; y si no vuelve, podré vivir con ello.`
  },

  {
    id: "multitud",
    titulo: "Multitud",
    fecha: "2025-08-05",
    constelacion: "cielo",
    preview: "Hoy te encontré de camino a la oficina. Te subiste al mismo vagón que yo y te sentaste en silencio sin alertar a nadie.",
    contenido: `Hoy te encontré de camino a la oficina. Te subiste al mismo vagón que yo y te sentaste en silencio sin alertar a nadie. Creo que me quedé dormido, porque cuando abrí los ojos ya no estabas.
Apareciste otra vez cuando me detuve a comprar mi café; sentada en las mesas del fondo, con los audífonos puestos y mirando por la ventana. Creo que saliste mientras contaba el cambio que me dio la cajera, porque cuando te busqué de nuevo, la mesa estaba vacía.
Escuché tu risa cuando esperaba que la luz del semáforo cambiara, pero se perdió detrás del rugido de los autos que pasaron frente a mí. Después caminaste a mi lado, y aunque no te vi, no tengo ninguna duda de que fue tu perfume el que me acompañó esas dos o tres cuadras, hasta que te metiste en alguna de las calles que dejé atrás.
Hoy fuiste parte del cúmulo de extraños que cruzaron su camino con el mío, y estoy seguro de que te fijaste en mí en la misma medida en que los demás lo hicieron. Porque perteneces a todos los lugares donde te fui encontrando, y sé que te encontré porque yo también pertenezco a ellos.
Y es que siempre estás ahí, a la distancia. Sin mirarme ni reconocerme. Y si mañana vuelvo a la cafetería yo seré un cliente más que fingirá distraerse contando el cambio que le den, para no estar seguro del momento en que te levantes de la mesa. Y así, sin reconocernos, perdidos entre la multitud, estaremos bien.`
  },

  {
    id: "urgencia",
    titulo: "Urgencia",
    fecha: "2026-02-07",
    constelacion: "cielo",
    preview: "A las amistades, la familia y los amores. ¿Y si digo que te quiero ver?",
    contenido: `A las amistades, la familia y los amores.
¿Y si digo que te quiero ver?
Antes de que pase cualquier cosa, antes de que sea la vida la que se nos pase.
¿Y si digo que te quiero?
Ahorita que tengo una voz para decirlo, ahorita que puedes escucharme.
¿Por qué esperar a que te vayas? ¿Por qué irme antes de decirlo?
Es mejor aprovechar el tiempo que tenemos; hacernos saber aquello que hemos sido juntos. Así sea una vida entera, así haya sido un ratito.
No estoy dispuesto a probar mi suerte. Me evito el arrepentimiento.
Y si digo que te quiero ver, decírtelo todo de una vez, ¿vendrías con la misma prisa que tengo yo?`
  },

  {
    id: "oracion",
    titulo: "Oración",
    fecha: "2026-04-26",
    constelacion: "cielo",
    preview: "Me jacto de tener la capacidad de convivir con cualquier cosa que me recuerde a lo que solía ser mi vida.",
    contenido: `Me jacto de tener la capacidad de convivir con cualquier cosa que me recuerde a lo que solía ser mi vida.
Pero en tardes como esta, donde el cuarto se llena con el aroma de la tarde, mientras mi cuerpo se sigue recuperando de la batalla que libramos anoche, cuando el silencio cobra dominio encima de cualquier esperanza, es que comienzo a preguntarme:
¿Ha tenido mi existencia, algún efecto en la vida de la gente? ¿Cuánto ha valido mi cariño para el resto? ¿Qué represento en el pasado de las personas que he querido? ¿Será que me extrañan aquellos a quienes extraño? Algo habrán de recordar sobre mi. Espero que no sean solo las cosas malas.
Porque cuando soy solo yo, sentado en la banca del parque, yendo por el tercer cigarro, hay toda una serie de momentos donde preferiría estar. No ya por ataduras, sino por el simple hecho de poder hacerlo.
Es cruel la noción de recordarlo absolutamente todo y que se quede solo en eso. Ser incapaz de sentir una vez más los poros de la piel, la calidez de aquellos besos. Qué injusta la vida por no permitirnos mantener lo que nos hace sentir vivos. Aun cuando nos estuviéramos muriendo de a poquito.
Vida, déjame sentir que me muero de amor otra vez, pero no hagas caso a mis caprichos. Sálvame de entregarlo todo sin que se me entreguen a mí, entibia mi cara con manos tiernas y gentiles.
Y si no han de llegar, apacíguame en las veces donde solo me reste revivir para saciar el silencio. Hazme entender que la mejor forma de ordenar el camino es desordenando lo que no funciona.
Ayúdame a aceptar que las despedidas rompen en la misma medida en que curan. Que los vacíos no necesitan ser rellenados, sino entendidos.
Y si alguien, cuando la tarde de domingo le azote de imprevisto, se pone a recordar a quien alguna vez le entregó todo el amor del mundo, dale la oportunidad de encontrar en el recuerdo de mis caricias el sosiego para su corazón distraido. Que mis brazos le brinden descanso cuando el agobio le arrebate el sueño. Y que, pese a mi ausencia, al evocar la reminiscencia de mi voz, sea eso suficiente como remedio temporal. Mañana nos encargaremos de seguir andando.`
  },

  {
    id: "la-historia-mal-contada",
    titulo: "La historia mal contada",
    fecha: "2026-03-16",
    constelacion: "humo",
    preview: "Algunos dicen que recordar es la perpetua reconstrucción de lo que nos acontece.",
    contenido: `Algunos dicen que recordar es la perpetua reconstrucción de lo que nos acontece. Esto implica que, con cada representación de esos sucesos, el porcentaje de realidad y objetividad se reduce, mostrándose como una verdad casi irrefutable que lo sucedido lo hizo tal como lo recordamos por última vez.
Recordamos con la mente, con la piel, con la nariz. Recordamos cuando estamos solos; cuando la memoria nos encuentra distraídos y con la guardia baja. Recordamos risas y miradas, las caricias, abrazos y besos. Recordamos los silencios, las náuseas y el miedo. Recordamos aquello que pudo ser y no fue, lo que evitamos que pasara, aquello de lo que quisimos ser parte. Aquello que no se nos concedió, lo que se terminó antes de que empezara. Habitamos una piel que se quemó con el sol. Recorremos las calles y avenidas que ahora desembocan en sitios ignotos e intrascendentes. Saboreamos la añoranza en cada mordisco, en cada trago. Revivimos las melodías que tarareamos, las voces que junto a nosotros cantaron, los cuerpos que nos contuvieron y nos refugiaron.
Del abuelo los chistes, sus ronquidos. El refrán que se transformó en lección de vida cuando estábamos listos para entenderlo. De la abuela la calidez en las manos; unas manos y un corazón lastimados por un tiempo que no le ofreció lo que se merecía, por una vida que no le permitió algo más. El perfume que brotaba de las paredes de la cocina, el sabor a amor en cada pieza de arte a la que dio vida.
De mamá son los besos en las rodillas raspadas, los labios que resultaban una suerte de termómetro infalible en las noches de fiebre. Las discusiones banales por la ropa desdoblada, las tardes de consuelo por un corazón roto. La vida misma. A papá le corresponden los golpes de los que nos protegió, los miedos que fueron superados, el arrojo y el coraje.
Recordamos la traición, los errores, los autosabotajes. Disolvemos las expectativas que se frustraron. Las promesas rotas, los compromisos que no logramos mantener. Las veces en que lastimamos a quienes quisimos.
Reinventamos los amores, las amistades. La familia que nos construimos. Elegimos a partir de cuándo comenzar a contar una historia mal contada y todas aquellas que nunca más serán evocadas. Protegemos los secretos que deben mantenerse bajo llave, las mentiras piadosas que se mantienen vigentes y aquellas que deben nacer para que todo esto tenga algo de sentido.
Somos nosotros los que decidimos la vida que recordamos, la que mejor se nos acomoda para ser quien nos gustaría ser. Y, entonces, ¿qué de lo que recordamos en realidad pasó? Ya se nos olvidó.`
  },

  {
    id: "como-se-llamo-la-obra",
    titulo: "¿Cómo se llamó la obra?",
    fecha: "2026-04-24",
    constelacion: "humo",
    preview: "No es más feliz aquel que representa el papel con una técnica más pulida.",
    contenido: `No es más feliz aquel que representa el papel con una técnica más pulida. Ni es más sabio el que pregona la inferioridad de aquellos que piensan diferente.
Permitirse embriagar por la apariencia que los demás reconocen en nosotros lleva a pensar que, invariablemente, seremos eso que nos dicen que somos. Tan gruesa es la máscara que nos colocamos después de haber sido heridos en el alma; dos o tres centímetros de un hierro oxidado, lacerante al contacto con la piel, que termina anhelando que le miren. Solo así tendría sentido tenerla puesta. Aquel que pone sobre aviso a los demás de que su carácter es fuerte, muy probablemente solo lo haga para no volver a salir lastimado.
Tan agotadora es, en esencia, la tarea de mostrarnos más atrevidos, más valientes, que apenas resta espacio para hallar algo de congruencia. Nos esforzamos tanto en los triunfos, la influencia, las relaciones, que terminamos convirtiéndonos sólo en eso.
Sería soberbia no valorar todas esas cosas, pero suelen valer menos de lo que en realidad creemos. Cuando las adulaciones dejan de distraernos con el ruido de la falsa admiración, nos percatamos de que no somos capaces de enfrentarnos a las mentiras que nos contamos. Preferimos excusarnos en una supuesta voluntad férrea para seguir adelante, pero eso no es otra cosa que huir.
Encima a la gente no le importa lo suficiente como para dar una opinión al respecto. Su silencio hace parecer que les engañamos, la verdad es que están ocupados haciendo lo mismo. Todos sabemos cuando alguien aparenta porque nos hemos vuelto especialistas en la materia. Entre todos nos compramos el humo que vendemos.
Perdemos vidas a costa de llevar a escena el guión que nos inventamos, todo para no admitir que elegimos mal. Actuamos a la perfección la vida que nos escribimos.
Pero el tercer acto ha de terminar, y cuando baje el telón y creamos que hicimos un buen trabajo, recordaremos que detrás de los aplausos hubo una mirada que sabía que nada era real. Solo quiso venir a ver nuestra ficción para olvidarse un ratito de tener que vivir la suya.`
  }

];
