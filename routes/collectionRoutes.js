const express = require("express");

// Task 8: Create an instance of an express router. Complete Task 26 before moving on to Task 8.

const router = express.Router();

const itemsList = [
  {
    name: "Tu Foto",
    album: "Odisea",
    lyrics:
      "Ni una llamada, como si nada de nada Y no quiere saber de mí, Que me perdonara, Yo pensaba que tú solamente eras para mí, (Tengo tu foto, pa' volverme loco, Pensando en ti solamente en ti mi corazón roto, x2) Tengo tu foto con el corazón roto, Siento que me estoy volviendo loco, Y si ya no te veo, me miro al espejo y no lo creo, Tú no sabes lo que te deseo, (Y déjate llevar de mí, pa' que vea como e' que vivimo' Cómo es que lo hacemo', cómo repetimo' Pero se me hace tan difícil encontrarte, Que tengo que conformarme x2) (Tengo tu foto, pa' volverme loco, Pensando en ti solamente en ti mi corazón roto, x2) A veces me canso, pero sigo esperando Y me pregunto hasta cuándo y te mando, Un par de cartas a ver si contestas, Y sigo esperando respuesta dime qué te cuesta, Responderme pa'yo poder hablarte Si me dejara'amarte y tratarte, Baby te lo juro vas a ser feliz, Tú no sabes cómo es que me gusta a mí, Y déjate llevar de mí, pa' que vea como e' que vivimo' Cómo es que lo hacemo', cómo repetimo' Pero se me hace tan difícil encontrarte, Que tengo que conformarme, Ni una llamada como si nada de nada Y no quiere saber nada de mí, Que me perdonara Yo pensaba que tú solamente eras para mí, (Tengo tu foto, pa' volverme loco, Pensando en ti solamente en ti mi corazón roto, x2)",
    image: "/images/tufoto.png",
    video: "https://www.youtube.com/embed/afUx6AIG3Tg?si=ntQ6N5cKHHJcRRAT",
    checked: true,
  },
  {
    name: "Dile Que Tu Me Quieres",
    album: "Odisea",
    lyrics:
      "Yo sé que tus padres, No te quieren conmigo, No sé si será por mis tatuajes O la forma en que yo vivo, (Dile que tú me quieres, Que no le haga caso a lo que le digan, Nos vivimos enamorando día a día, Dile que yo soy el que te quiere, Explícale lo que sucedió, Entre tú y yo la llama se encendió No sé cómo pasó, Dile que tú me quieres, Que no le haga caso a lo que le digan, Nos vivimos enamorando día a día Vida mía,) (Ozuna) Ya no quiero ocultarlo, quiero tenerte cerca Hablo con tu madre aunque sé que es difícil de convencerla, Que no se deje llevar por las apariencias, Porque mi corazón siempre te trata con decencia, (Tú más que nadie sabe, Como yo soy contigo, No importa mi estilo de vida Tú me quieres así, x2), (Dile que tú me quieres, Que no le haga caso a lo que le digan, Nos vivimos enamorando día a día, Dile que yo soy el que te quiere, Explícale lo que sucedió, Entre tú y yo la llama se encendió No sé cómo pasó, Dile que tú me quieres, Que no le haga caso a lo que le digan, Nos vivimos enamorando día a día Vida mía,) Siempre que estamos juntos se hace bueno el momento, No me quieren contigo porque nadie sabe lo que por ti siento, Cómo hacer que callen dicen que yo no soy fiel, Te he demostrado que mis ojos son para ti mujer, (No soportan que nos vaya bien, Amigas comentan cuando nos ven felices, Vete y diles que yo te trato bien, Y que le están mintiendo de lo que de mí le dicen x2) (Dile que tú me quieres, Que no le haga caso a lo que le digan, Nos vivimos enamorando día a día, Dile que yo soy el que te quiere, Explícale lo que sucedió, Entre tú y yo la llama se encendió No sé cómo pasó, Dile que tú me quieres, Que no le haga caso a lo que le digan, Nos vivimos enamorando día a día Vida mía,)",
    image: "/images/dileque.png",
    video: "https://www.youtube.com/embed/WAcnWtZjDWE?si=kfSmSrfKg_RXUobt",
    checked: true,
  },
  {
    name: "El Farsante Remix",
    album: "Odisea",
    lyrics:
      "Extraño tu aroma en la cama, De ese que dejas cuando entras y sales, Dónde quedaron los besos y todos los planes, No sé si vivir o morir, Me encuentro en un limbo desde que te fuiste de aquí, Eres la única persona que yo quiero que se venga encima de mí, Mi libertad no la quiero, Tampoco la vida e' soltero, Yo lo que quiero es que quieras lo mismo que todos queremos, Tener una cuenta de banco con dígitos y muchos ceros, Hacer el amor a diario y de paso gastar el dinero, Hey bebé (Si todavía me amas como antes, Ya nada me parece interesante, Yo sé que en el amor soy un farsante, Yo sin ti no vuelvo a enamorarme bebé x2) Sin ti yo no me vuelvo a enamorar, No sé ni qué pensar, Ya sé por qué todo me sale mal, Mentí diciéndote que era leal, Siento un amor real, Le pido a Dios me pueda perdonar No, quiero que te vayas Vamos a intentarlo ¿Por qué no salvamos nuestra relación?, Tú sabes bebé, perdona bebé, Hey bebé (Si todavía me amas como antes, Ya nada me parece interesante, Yo sé que en el amor soy un farsante, Yo sin ti no vuelvo a enamorarme bebé x2) Extraño tu aroma en la cama, De ese que dejas cuando entras y sales, Dónde quedaron los besos y todos los planes, No sé si vivir o morir, Me encuentro en un limbo desde que te fuiste de aquí, Eres la única persona que yo quiero que se venga encima de mí, Mi libertad no la quiero, Tampoco la vida e' soltero, Yo lo que quiero es que quieras lo mismo que todos queremos, Tener una cuenta de banco con dígitos y muchos ceros, Hacer el amor a diario y de paso gastar el dinero, Hey bebé (Si todavía me amas como antes, Ya nada me parece interesante, Yo sé que en el amor soy un farsante, Yo sin ti no vuelvo a enamorarme bebé x2)",
    image: "/images/farsante.png",
    video: "https://www.youtube.com/embed/wfWkmURBNv8?si=rBXPB6pZhms61pZl",
    checked: false,
  },
  {
    name: "Te Sone De Nuevo",
    album: "Nibiru ",
    lyrics:
      "Tú está' en mi pensamiento, Aunque yo no quiera te pienso, Soy persona de ignorar sentimientos, Pero tú eres la excepción, Mi mente dice sí, pero mi corazón dice no, Y aunque todo sale a la luz solo te quería decir, (Anoche te soñé de nuevo Y quiero que se repita otra vez, pero en persona En mi mente tienes un enredo Dime si visitarte puedo Y es que anoche te soñé de nuevo Y quiero que se repita otra vez, pero en persona En mi mente tienes un enredo Dime si visitarte puedo) (Oh oh oh) Es que anoche yo soñé contigo, Era real yo te tocaba, Y tú decía que tu cuerpo es mío Que somos amigos, pero que me deseabas, Lo noto cuando a ella yo la miro, Rápido como rafagazo de una cuarentona, Se moja desde que alguna bebé mi nombre menciona, Tiene sed quiere beber de mi río de Amazona', Tiene un Digger rosado que nunca lo tiene en hora, (Oh oh, oh oh) (Mi bebé, Lo que soñé lo quiero hacer Tú bésame, Y recordemos aquella vez x2) (Anoche te soñé de nuevo Y quiero que se repita otra vez, pero en persona En mi mente tienes un enredo Dime si visitarte puedo Y es que anoche te soñé de nuevo Y quiero que se repita otra vez, pero en persona En mi mente tienes un enredo Dime si visitarte puedo) (Oh oh oh) Tú está' en mi pensamiento, Aunque yo no quiera te pienso, (Oh oh, oh oh) Soy persona de ignorar sentimientos, Pero tú eres la excepción, Mi mente dice sí, pero mi corazón dice no, (No, dice no) Y aunque todo sale a la luz solo te quería decir, (Anoche te soñé de nuevo Y quiero que se repita otra vez, pero en persona En mi mente tienes un enredo Dime si visitarte puedo Y es que anoche te soñé de nuevo Y quiero que se repita otra vez, pero en persona En mi mente tienes un enredo Dime si visitarte puedo)",
    image: "/images/sone.png",
    video: "https://www.youtube.com/embed/eKaD_-Tl544?si=nYooKOI3_QfQpxtY",
    checked: false,
  },
  {
    name: "No la mires",
    album: "ENOC",
    description:
      "No la mires la tengo de este lado ya la coloqué, Le tiré solamente una guiñada y coroné Ella sabe que lo que, Que no ni la cuqué, Y aquí la esperé, (la esperé) Ella me invitó le llegué, Siempre Louis nunca Macy's todo Gucci Fendi Prada, Ya coroné con una mirada, No fue amor a primera vista, Sino cómo se verá cuando se desvista, Estamos en high, mucho Blackie con Sprite, Compramos todas las Dom Peri, no pides ya no hay. Llegamos y la disco se inunda, Digan su flow y nunca hundo, Ustedes tienen ticket y yo tengo funda, (Y ella mueve el booty con la batidora, Le doy contacto como a cien por ahora, Un selfie conmigo y le da pa Insta, Pa frontearle a todas sus amiguitas, x2) Ella está soltera, se dejó del gato Solo quiere un buen rato y nada de amor, Si no tiene' cartera, suéltala novato Que yo gané hace rato y le metí un gol, (Hey Ella sabe a quien tirarle pa hacerle el favor (pa hacerle el favor) Hey Baby pégate un poquito más antes que salga el sol x2) Sí, dale calor, gatita pide calor, Esta es una Murakami no un girasol, Ella se suelta de por sí imagínate con licor, Sale con gafas de noche como si hiciera sol, Y tiene ese DM explotao, Estás tirándole piedras a la luna Sabes que vas pichao sí, Tú eres un foul Eso allá atrás ya está hackeao, Ese culo me patea como si estuviera armao, Estoy aquí, Chica baja de ella tu trabajas, Tienes el body kit que está 9K, La cinturita curveadita sin usar la faja, Yo le llego donde sea aunque tú vives en Lajas Sí, le llegué a su apartamiento A su foto siempre le doy like y comento, Me la quiero comer pero aquí no es el momento, Si fuera por mí baby yo te lo dejo adentro, Me sigues, Ella está soltera, se dejó del gato Solo quiere un buen rato y nada de amor, Si no tiene' cartera, suéltala novato Que yo gané hace rato y le metí un gol, (Hey Ella sabe a quien tirarle pa hacerle el favor (pa hacerle el favor) Hey Baby pégate un poquito más antes que salga el sol x2) ",
    image: "/images/nolamire.png",
    video: "https://www.youtube.com/embed/Bnbaj3kTGrk?si=wkQ0PxUItuN9wO5j",
    checked: true,
  },
  {
    name: "Nena Buena",
    album: "Los dioses ",
    lyrics:
      "Lleva una vida normal, No se suele enamorar, (oh, oh) De esa' que no falta a clase', (clase') Pero no tarda en llamar, (no tarda en llamar) Cuando está solita, Sin ropa, con gana', (con gana') Lo malo la excita, Su cuerpo, me llama, (ay, me llama) (Le dicen: la nena buena Pero conmigo e' lo contrario Y to' lo hace callao Pa' evitar comentario' x2 ) Todo' lo' comentario' ella evita Dice que el negro la excita (la excita) Quiere ir a cien en el pista (eh, eh) Que le hable malo, masoquista Un gecko en la muñeca, como la' princesa' (oh-oh) Me luce de siempre oliendo a realeza (realeza) Si otra me mira, ella me besa (ella me besa) No quiere amore', pero pa' hacerlo ella empieza (ah, ah) Y así (y así) Así yo la quiero (la quiero) Vamo' a hacerlo de nuevo (de nuevo) Y pa' serte sincero (woh-oh-oh-oh) Yo te quiero así Fuma escondíá, pero en los ojo' se le ve (en los ojo' se le ve) El amor la tiene aborrecíá (la tiene aborrecíá) 'Tá amanecía' y lo que quiere e' joder (y lo que quiere e' joder) No quiere champaña, ella quiere Whiskey (eoh) Ella e' tímida, pero e' freaky (woh-oh) Enrolaba, pero ella prendía (brr) El arrebato está en otro nivel (oh-oh) (Le dicen: la nena buena Pero conmigo e' lo contrario Y to' lo hace callao Pa' evitar comentario' x2 ) Ese cuerpo e' legendario, moja como acuario (acuario) Ella e' lo má' cabrón que salió del barrio (uah) La sacó del estadio, Louis Vuitton su vestuario Contigo hago cien año' preso, en solitario (uah) Es leyenda en mi cama Ese culo es del salón de la fama, la' babie' se muerden y la difaman (brr) Postea una foto en Instagram y toa' dicen que la aman De espalda hablan mierda, pero de frente se la maman (brr) La cintura e' chiquita, bien rica, perreando la aplica Le corre mi clika y al doble D (doble D) El booty bien grande, que Dios se lo guarde Ella guarda el gelato en la doble C (en la doble C) Fuma escondiá, pero en los ojo' se le ve (en los ojo' se le ve) El amor la tiene aborrecía' (la tiene aborrecía') 'Tá amanecía' y lo que quiere e' joder (Y lo que quiere e' joder; oh-oh-oh) No quiere champaña, quiere Whiskey (Whiskey) Ella e' tímida, pero freaky (woh-oh) Enrolaba, pero ella prendía (brr) El arrebato está en otro nivel (oh-oh, oh-oh) (Le dicen: la nena buena Pero conmigo e' lo contrario Y to' lo hace callao Pa' evitar comentario' x2 )",
    image: "/images/nenabuena.png",
    video: "https://www.youtube.com/embed/M-N8zr7_UWM?si=nUaJG4t4viaac1ZT",
    checked: false,
  },
  {
    name: "Favorita",
    album: "Ozutochi",
    lyrics:
      "No me llame', yo te llamo Así la mantenemo', a ese acuerdo llegamo' En ocasione' nos cruzamo' Cuando te veo pasar ni siquiera nos miramo' Y ella, ella se pinta de inocente Delante de la gente me trata indiferente, ey Eso la hace interesante Después, tras bastidores, se me pone indecente (Se hace la que no me conoce Pero me aprendí tus diferente' pose' Favorita', tú sabe' que yo sé Hacértelo, te gusta que yo te roce Tú abajo, yo arriba, toma pa' que goce' Baby, tú sabe' que pa' mí es normal Me encantó tenerte en diferente' pose' Hacértelo, te gusta que yo te roce Tú abajo, yo arriba, bebé) (Ozuna) Dime, bebé, cómo se siente Báilame, que no es suficiente ¿Por qué delante de la gente Te hace' la nena inocente? Bebé, yo no voy a mentirte Yo no quiero amore', yo nunca voy a fingirte Mi mente quiere desvestirte Solamente a mí me fascina cómo tú me lo hace' Y yo soy claro, pase lo que pase Me gustas porque ere' mujer con clase Independiente, aunque venga del case Shortycita, sola se complace Sus amiguita' toas son de case Real, no le gustan los difrace' Independiente, aunque venga del case (Se hace la que no me conoce Pero me aprendí tus diferente' pose' Favorita', tú sabe' que yo sé Hacértelo, te gusta que yo te roce Tú abajo, yo arriba, toma pa' que goce' Baby, tú sabe' que pa' mí es normal Me encantó tenerte en diferente' pose' Hacértelo, te gusta que yo te roce Tú abajo, yo arriba, bebé) Te gusta, ma, que yo te roce ¿Te la calqué? Él no te conoce Conmigo prueba setecienta' pose' Tú abajo, yo arriba, suavecito pa' que goce' (Despacio, este perreo es del espacio Me gusta que digas mi nombre Mientra' me agarro 'e tu pelo lacio x2) (Se hace la que no me conoce Pero me aprendí tus diferente' pose' Favorita', tú sabe' que yo sé Hacértelo, te gusta que yo te roce Tú abajo, yo arriba, toma pa' que goce' Baby, tú sabe' que pa' mí es normal Me encantó tenerte en diferente' pose' Hacértelo, te gusta que yo te roce Tú abajo, yo arriba, bebé)",
    image: "/images/favorita.png",
    video: "https://www.youtube.com/embed/E4aDNt-1RvM?si=Oc9GgOaZmQXiyZOq",
    checked: false,
  },
  {
    name: "Te Peinso",
    album: "Ozutochi",
    lyrics:
      "Creo que ya bebí Más de lo que debí Pa' olvidarme que tú Ya te olvidaste de mí Todo tiene tu nombre Se me parece a ti Una vo' en mi mente Dice Te lo advertí La foto que subiste ya la vi Te quisiera llamar Pero me acuerdo que cambiaste hasta de celular Ojalá todo fuera un sueño para despertar Nunca te pienso cuando estoy en el bar (So aquí estoy otra noche más Esperando que sea de día Todavía te pienso Ya van a cerrar No me quiero ir todavía x2 ) Ya van a cerrar la' puerta' de la barra Pero yo quiero pedir mi último trago A ver qué puñeta má' con mi vida yo le hago Cuatro de la mañana Y yo ando solo dando vuelta' por Condado Es que olvidarte a ti Parece no acabar Como a Pique le gritan Shaki hasta en 'el medio mar Parece que tu nombre mi cora se va a tatuar Bueno' momento' que no puedo borrar No sé qué día No te quise No está la herida Pero hay cicatrice' Creo que ya bebí Más de lo que debí Pa' olvidarme que tú Ya te olvidaste de mí Todo tiene tu nombre Se me parece a ti Una vo' en mi mente Dice Te lo advertí La foto que subiste ya la vi Te quisiera llamar Pero me acuerdo que cambiaste hasta de celular Ojalá todo fuera un sueño para despertar Nunca te pienso cuando estoy en el bar (So aquí estoy otra noche más Esperando que sea de día Todavía te pienso Ya van a cerrar No me quiero ir todavía x2 )",
    image: "/images/pienso.png",
    video: "https://www.youtube.com/embed/YXrNok2wKS4?si=wcIMD3brGdmPddJI",
    checked: true,
  },
  {
    name: "Hey Mor",
    album: "Ozutochi",
    lyrics:
      "Dime ¿qué carajo fue lo que me hiciste? Son las 6 a.m. y quiero dormirme ya Pero no he podido desde que te fuiste ¿Qué tú me hiciste? (Hey ma' ¿cómo te saco de aquí? Llego a la disco y solo pienso en ti Lo que hicimo' yo lo quiero olvidar Con otra, pero no sabe igual (no) ¿Pa' qué te voy a mentir? (te voy a mentir) Ando con culo', pero pienso en ti Lo que hicimo' no lo quiero olvidar, lo quiero repetir, baby,)  Estás perdida ¿qué vas a hacer hoy? Te vi puesta pa'l gym o para el vacilón Baby, tú eras real, las otras, plástico Pusiste a esta liendra a hablar romántico (uy) Te pienso todo' los día' Uno no cambia un Mercede' por un Kia Sé que cagué la relación, mala mía Baby, no sé pa' qué peleamo', si podemo' estar haciendo groserías, Condado, vista al mar, amanecimos ese día Nos fuimo' 'e fifty eight pa' la playa Pero nunca pensé que iba a ser el último día Baby ¿dónde estás? Que yo paso por ti Ando activo con los títeres en las motoras, a ver si te veo por ahí (Hey ma' ¿cómo te saco de aquí? Si llego a la disco y pienso en ti Lo que hicimo' lo he querido borrar Con otra chimba, pero no sabe igual (no) No te voy a mentir (te voy a mentir) Si no hay trago' solo pienso en ti Lo que hicimo' no lo quiero olvidar, lo quiero repetir) Baby Un culo como el tuyo, cualquiera peca (cualquiera peca) Tú solo dime cuándo quiere' que te meta Que hoy ando con el combo, los rompediscoteca Es que, bebé, tú ere' la neta, pero Solo quiero que te decida' pa' irte a buscar (pa' irte a buscar) Un perreíto lento y adentro terminar Solo falta que te decidas pa' irte a buscar (pa' irte a buscar) Un perreíto lento y adentro terminar, Dame lu', que no sé Dame agua, que tengo sed Hoy quiero invertir lo que me gasté (me gasté) Con toa' las sustancia' son más de las tre' (eh-eh) Dime ¿qué putas fue lo que me hiciste? (oh, no) Son las 6 a.m. y no puedo dormirme ya Pero no he podido desde que te fuiste ¿Qué tú me hiciste? Hey, ma, ¿cómo te saco de aquí? (¿cómo te saco de aquí?) Si llego a la disco y pienso en ti Lo que hicimo' lo he querido borrar Con otra, pero no sabe igual (no) ¿Pa' qué te voy a mentir? (te voy a mentir) Ando con culo', pero pienso en ti Lo que hicimo' no lo quiero olvidar, lo quiero repetir, baby",
    image: "/images/heymor.png",
    checked: true,
    video: "https://www.youtube.com/embed/7ouFkoU8Ap8?si=yoxGwqEkTKwf4cpv",
  },
  {
    name: "Una Perla En San Juan",
    album: "Afro",
    lyrics:
      "Con la mano doblá', la cintura apretá' No vio que salió el sol, va en un día pegá' Una perla en San Juan, vista Viña del Mar No sé ni cómo actuar, de mi mente el portal, mami No me discuta porque estoy a punto de coger ruta Feliz vi la vida porque viene otra y me disfruta Y si suena el estéreo, yo empiezo a bailar y gastamo' toa' las luca' Baila, maluca, baja pa' PR, que a perrear se te educa (Delirando, mi mente está Analizando bien, no quiero llegar ¿Será que la disco está buena, buena? ¿O será por toa' tus pelea'? Otra mujer me chequea y también me gusta cómo lo menea, ma x2)  Con la mano doblá', la cintura apretá' No vio que salió el sol, va en un día pegá' Una perla en San Juan, vista Viña del Mar No sé ni cómo actuar, de mi mente el portal, mami No me discuta porque estoy a punto de coger ruta Feliz vi la vida porque viene otra y me disfruta Y si suena el estéreo, yo empiezo a bailar y gastamo' toa' las luca' Baila, maluca, baja pa' PR, que a perrear se te educa (escucha) Uh, nena, dale Que el castigo en esto no tiene modale' Y no soy un santo, ¿qué quiere' que te aclare? Y booty me prende y el negro lo sabe Una última, ma Para yo llevarte al bote Afuera sin ropa 'e noche fumando y bebiendo wine, Una musa que no se cae De PR, La Romana, mami, yo vivo rulay Ay, qué rico, si quieres te repito En el sexo te lo explico Porque me tienen (Delirando, mi mente está Analizando bien, no quiero llegar ¿Será que la disco está buena, buena? ¿O será por toa' tus pelea'? Otra mujer me chequea y también me gusta cómo lo menea, ma x2) (Con la mano doblá', la cintura apretá' No vio que salió el sol, va en un día pegá' Una perla en San Juan, vista Viña del Mar No sé ni cómo actuar, de mi mente el portal x2)",
    image: "/images/perla.png",
    video: "https://www.youtube.com/embed/Mp0d3xnNeok?si=oiMnNMx1T5l3Y-gm",
    checked: true,
  },
  {
    name: "Brabus",
    album: "Cosmo",
    lyrics:
      "No es lo mismo llamarla que tú verla Y yo que estoy pa' conocerla Si no la pongo a quemar, se me rebela (woh, oh, oh) Con las ojitos rojo', nunca se me detuvo Se me trepó y se me movió como que está en el tubo Ella traía su nota y yo que se la subo En la Brabus chingando, tú y yo hacemo' un dúo (Bebé, no tiene' que roncar Si anda' conmigo a nadie tiene' que explicar Difícil poderle llegar Pero inventó conmigo y se la tuve que aplicar A-a-a-ahora no se quiere despegar Desde que vivió la movie a to' les quiere pichar Vino sin panty pa' facilitar Desde que perreó conmigo siento que quiero tenerla) Yo-yo-yo-yo soy el capítulo que prende ese peliculón No le he puesto título, pero tenemo' vínculo Cantamos cancione' cuando quemamo' en el vehículo Me dice que suena rico, que pa'l sexo soy su ídolo No tienes que roncar, conmigo aprendió a frontear Vive sola, sola enrola y sola se puede costear No estamo' en sentimiento, solo estamo' pa' bellaquear Sabe que no me sobra tiempo, solo hay sexo pa' negociar Bebesuki, indícame, que pa' verte te llamé Vamo' pa'l toma y dame, champaña pa'l que gane Tú cancela to' los plane' aunque tu amiga te reclame Si te reclama, cúlpame, pero las gana', ven, quítame Resolvemo' la bellaquera Y tú sabe' cómo lo hacemo' Hacemo' historia cuando nos vemo' Nos comemo' de desayuno, almuerzo y cena No escondemos lo que tenemo' Y le roncamo' cuando queremo' Y si queremo' nos ponemo' pa'l problema (Bebé, no tiene' que roncar Si anda' conmigo a nadie tiene' que explicar Difícil poderle llegar Pero inventó conmigo y se la tuve que aplicar A-a-a-ahora no se quiere despegar Desde que vivió la movie a to' les quiere pichar Vino sin panty pa' facilitar (jaja) Desde que perreó conmigo siento que quiero tenerla)",
    image: "/images/brabus.png",
    video: "https://www.youtube.com/embed/I6PEgBNT-wA?si=yqHXslk636M-ZDU-",
    checked: false,
  },
  {
    name: "Fenti",
    album: "Cosmo",
    lyrics:
      "Parece que se dejó Le pasé por el lado, la toqué y se dejó La reconocí, ahora me quiere conocer A oscuras, pero cuando miré bien está ricota Traje see-through, se le nota Y la real, me la explota, nos reímos en la nota (Diablo, qué pichaera La baby quiere que me la coma entera, sí Dice que la quiere adentro, no la quiere afuera Hoy la quiere adentro, no la quiere afuera El carro en parking, le di en el valet Y si vuelve a llamar, yo se lo vuelvo a meter Si vuelve a llamar, yo se lo vuelvo a meter, sí Diablo, qué pichaera La baby quiere que me la coma entera, sí Dice que la quiere adentro, no la quiere afuera Hoy la quiere adentro, no la quiere afuera Casi nos botan del hotel Si vuelve a llamar, yo se lo vuelvo a meter Si vuelve a llamar, yo se lo vuelvo a meter) (Ozuna) Pusimos la guagua en parking Chingamos, mami, en lo que bajó la nota Tú sí que la parte De rosita y una rola, ella está bien ricota Ella escucha Young Miko Una fuente cuando yo le estrujo todo ese clito', ey Del chupop ella es adicta, le metí en Barcelona Pero nos grabamos chingando en la playa en Puerto Rico Ay, qué rica Hasta adentro, de frente ella es adicta Como un Ferro', pega duro en la pista Le viré los ojos como El Exorcista Dale, ma', bellaca La quiere adentro, me mata si se escapa Bebe vino, solo poured de Napa Es extrema, me pide que sea sin capa (Diablo, qué pichaera La baby quiere que me la coma entera, sí Dice que la quiere adentro, no la quiere afuera Hoy la quiere adentro, no la quiere afuera El carro en parking, le di en el valet Y si vuelve a llamar, yo se lo vuelvo a meter Si vuelve a llamar, yo se lo vuelvo a meter, sí Diablo, qué pichaera La baby quiere que me la coma entera, sí Dice que la quiere adentro, no la quiere afuera Hoy la quiere adentro, no la quiere afuera Casi nos botan del hotel Si vuelve a llamar, yo se lo vuelvo a meter Si vuelve a llamar, yo se lo vuelvo a meter) A meter, sí Sí, a meter, a fumar, a pasear, a salir, a beber Sé que hay mucho baboso que te quiere comer Regálame una noche y vamos a amanecer Nos conocimos hoy, pero parece que fue ayer Tú no pesas mucho, yo te quiero coger Extendí el hotel, compré otra botella Porque yo no sé si te vuelvo a ver En el mall, en la playa En San Juan o en Baya' Que se acabe el mundo, como dicen los mayas En la arena y sin toalla, ese papel que tú tienes no lo ensayas Diablos, mami, bebió y está puesta pa mí Te lo pongo y te lo dejo ahí Te lo vuelvo a meter si te veo por ahí",
    image: "/images/fenti.png",
    video: "https://www.youtube.com/embed/FfTaIh8CDp4?si=OtrwY9ld5bCHaky1",
    checked: true,
  },
];

//Task 9: Create a routehandler to '/'. Inside create an object and make the following key-value pairs:
// title as a key with the title of your collection as the value.
// items as a key with itemsList as the value
// Use the appropriate response method to inject your data into the collection.ejs template.

router.get("/", (req, res) => {
  const data = {
    title: "Ozuna Songs",
    items: itemsList,
  };
  res.render("collection.ejs", data);
});

// Task 10 - 18... (CONTINUE IN collection.ejs)

// Task 19: Create a dynamic route handler. It should take in the index as the dynamic parameter (/:index). Use this index (from the request object) to acess a specifc element from the itemsList.
// Use the appropriate response method to inject that element into the item.ejs template.

router.get("/:id", (req, res) => {
  const i = req.params.id;
  console.log(i);
  res.render("item.ejs", itemsList[i]);                              
});

// Task 20 - 25... (CONTINUE IN item.ejs)

// Task 26: Export your router as a module.

module.exports = router;

// Task 28: Create an api with the same data. You need to use modular routes, and have two routes. "/api/all" returns all the items and "/api/:index" returns a specfic item. (In a new routes file, not this one)

// EXTRA CREDIT: Create pagination buttons in item.ejs before the <footer>. Using the index and itemsList length add conditionals for a Prev and Next button to only appear if there is a previous item and/or there is a next item. Use the following buttons:

// <a href="/collection/..." class="back-button">Prev</a>
// <a href="</collection/...>" class="back-button">Next</a>
