const pickByDate = <T>(programs: Record<string, T>): T => {
    const today = new Date().toLocaleDateString("en-CA"); // "YYYY-MM-DD"
    const dates = Object.keys(programs).sort();
    const key = dates.filter((d) => d <= today).pop() ?? dates[0];

    return programs[key];
};

const esPrograms = {
    "2026-11-08": {
        backButton: "Go back to language selection",

        mainHeading: "Programa del Culto Dominical",

        pastor: "Roberto Rodríguez Albavera, Pastor",

        liturgy: "liturgia dominical",

        mainTitle: "Orden del Culto",

        welcome: {
            title: "Bienvenida",
            subtitle: "Cordial saludo a la congregación y a las visitas.",
        },

        reading: {
            title: "Lectura Bíblica",
            reference: "Filipenses 4:1–9",
            verses: [
                {
                    n: 1,
                    text: "Así que, hermanos míos amados y deseados, gozo y corona mía, estad así firmes en el Señor, amados.",
                },
                {
                    n: 2,
                    text: "Ruego a Evodia y a Síntique, que sean de un mismo sentir en el Señor.",
                },
                {
                    n: 3,
                    text: "Asimismo te ruego también a ti, compañero fiel, que ayudes a estas que combatieron juntamente conmigo en el evangelio, con Clemente también y los demás colaboradores míos, cuyos nombres están en el libro de la vida.",
                },
                {
                    n: 4,
                    text: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!",
                },
                {
                    n: 5,
                    text: "Vuestra gentileza sea conocida de todos los hombres. El Señor está cerca.",
                },
                {
                    n: 6,
                    text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.",
                },
                {
                    n: 7,
                    text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.",
                },
                {
                    n: 8,
                    text: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable, todo lo que es de buen nombre; si hay virtud alguna, si algo digno de alabanza, en esto pensad.",
                },
                {
                    n: 9,
                    text: "Lo que aprendisteis y recibisteis y oísteis y visteis en mí, esto haced; y el Dios de paz estará con vosotros.",
                },
            ],
        },

        worship: {
            title1: "Coros de Alabanza",
            title2: "Coro",
        },

        greeting: "Tiempo de saludarse",

        testimony: {
            title: "Testimonios",
            subtitle:
                "Espacio para compartir las maravillas y fidelidad de Dios.",
        },

        prayer: {
            intercession: "intercesión",
            title: "Oración Pastoral",
            subtitle: "Motivos y peticiones de oración.",
        },

        offering: {
            title: "Presentación de Diezmos y ofrendas",
            subtitle: "1 Corintios 16:2a",
            verses: "Cada primer día de la semana cada uno de vosotros ponga aparte algo, según haya prosperado, guardándolo, para que cuando yo llegue no se recojan entonces ofrendas.",
            parishioner: "",
        },

        reflection: {
            title: "meditación pastoral",
            paragraphs: [
                {
                    id: 1,
                    paragraph:
                        "La ofrenda no es algo que hacemos a la ligera sin meditar ante Dios. Es un acto consciente de obediencia y un acto de alabanza y adoración a Dios. Ofrendamos según lo recibido y debemos reflexionar sobre las bendiciones recibidas de parte de Dios antes de ofrendar. ",
                },
                {
                    id: 2,
                    paragraph:
                        "Cada uno debe traer su ofrenda a la reunión semanal según haya sido prosperado. Damos conforme a lo que Dios nos ha provisto y lo hacemos con gratitud por las bendiciones que hemos recibido de su mano. Llevemos nuestras ofrendas al templo y contribuyamos al crecimiento de la obra de Dios.",
                },
            ],
        },

        doxology: {
            tag: "mensaje & doxología",
            title: "Sermón",
            subtitle: "Roberto Rodríguez Albavera, Pastor",
            titleText: "doxología de bendición • 1 Pedro 5:10–11",
            text: "«10 Mas el Dios de toda gracia, que nos llamó a su gloria eterna en Jesucristo, después que hayáis padecido un poco de tiempo, él mismo os perfeccione, afirme, fortalezca y establezca. 11 A él sea la gloria y el imperio por los siglos de los siglos. Amén.»",
        },

        communion: {
            title: "Santa Cena y Bendición pastoral",
            scriptureReference: "",
            verses: "",
        },

        announcements: {
            title: "Avisos",
            text: "Vida de la Iglesia & Eventos",
        },
    },

    /* --- Programa Domingo 15 --- */

    "2026-11-15": {
        backButton: "Go back to language selection",

        mainHeading: "Programa del Culto Dominical",

        pastor: "Roberto Rodríguez Albavera, Pastor",

        liturgy: "liturgia dominical",

        mainTitle: "Orden del Culto",

        welcome: {
            title: "Bienvenida",
            subtitle: "Cordial saludo a la congregación y a las visitas.",
        },

        reading: {
            title: "Lectura Bíblica",
            reference: "Salmo 100",
            verses: [
                {
                    n: 1,
                    text: "Cantad alegres a Dios, habitantes de toda la tierra.",
                },
                {
                    n: 2,
                    text: "Servid a Jehová con alegría; Venid ante su presencia con regocijo.",
                },
                {
                    n: 3,
                    text: "Reconoced que Jehová es Dios; Él nos hizo, y no nosotros a nosotros mismos; Pueblo suyo somos, y ovejas de su prado.",
                },
                {
                    n: 4,
                    text: "Entrad por sus puertas con acción de gracias, Por sus atrios con alabanza; Alabadle, bendecid su nombre.",
                },
                {
                    n: 5,
                    text: "Porque Jehová es bueno; para siempre es su misericordia, Y su verdad por todas las generaciones.",
                },
            ],
        },

        worship: {
            title1: "Coros de Alabanza",
            title2: "Coro",
        },

        greeting: "Tiempo de saludarse",

        testimony: {
            title: "Testimonios",
            subtitle:
                "Espacio para compartir las maravillas y fidelidad de Dios.",
        },

        prayer: {
            intercession: "intercesión",
            title: "Oración Pastoral",
            subtitle: "Motivos y peticiones de oración.",
        },

        offering: {
            title: "Presentación de Diezmos y ofrendas",
            subtitle: "1 Crónicas 29:16–18",
            verses: "16 Oh Jehová Dios nuestro, toda esta abundancia que hemos preparado para edificar casa a tu santo nombre, de tu mano es, y todo es tuyo. 17 Yo sé, Dios mío, que tú escudriñas los corazones, y que la rectitud te agrada; por eso yo con rectitud de mi corazón voluntariamente te he ofrecido todo esto, y ahora he visto con alegría que tu pueblo, reunido aquí ahora, ha dado para ti espontáneamente. 18 Jehová, Dios de Abraham, de Isaac y de Israel nuestros padres, conserva perpetuamente esta voluntad del corazón de tu pueblo, y encamina su corazón a ti.",
            parishioner: "",
        },

        reflection: {
            title: "meditación pastoral",
            paragraphs: [
                {
                    id: 1,
                    paragraph:
                        "Esta es una oración de David al ver todas las ofrendas que había traído el pueblo para la construcción del templo. David reconoció que todo lo que ofrecían lo habían recibido primero de Dios. Es Dios quien nos provee todo lo que tenemos, por eso no debería ser difícil darle nuestras ofrendas. De todas formas, todo lo que tenemos le pertenece a Él.",
                },
                {
                    id: 2,
                    paragraph:
                        "Una vez más, vemos la importancia de dar de forma voluntaria y con alegría. A Dios le interesa la actitud nuestra al traer las ofrendas. Busquemos siempre dar con el corazón vuelto hacia Dios, hacia su grandeza y recordando todas las cosas maravillosas que él nos ha dado. ¡Alabemos a Dios con nuestras ofrendas!",
                },
            ],
        },

        doxology: {
            tag: "mensaje & doxología",
            title: "Sermón",
            subtitle: "Roberto Rodríguez Albavera, Pastor",
            titleText: "doxología de bendición • Judas 24– 25",
            text: "«24 Y a aquel que es poderoso para guardaros sin caída, y presentaros sin mancha delante de su gloria con gran alegría, 25 al único y sabio Dios, nuestro Salvador, sea gloria y majestad, imperio y potencia, ahora y por todos los siglos. Amén.»",
        },

        communion: {
            title: "Santa Cena y Bendición pastoral",
            scriptureReference: "",
            verses: "",
        },
    },
};

const enPrograms = {
    "2026-11-08": {
        backButton: "Volver a la selección de idioma",

        mainHeading: "Sunday Service Program",

        pastor: "Pastor Roberto Rodríguez Albavera",

        liturgy: "Sunday Liturgy",

        mainTitle: "Order of Worship",

        welcome: {
            title: "Welcome",
            subtitle: "Warm greetings to the congregation and our visitors.",
        },

        reading: {
            title: "Bible Reading",
            reference: "Philippians 4:1–9",
            verses: [
                {
                    n: 1,
                    text: "Therefore, my brothers, whom I love and long for, my joy and crown, stand firm thus in the Lord, my beloved.",
                },
                {
                    n: 2,
                    text: "I entreat Euodia and I entreat Syntyche to agree in the Lord.",
                },
                {
                    n: 3,
                    text: "Yes, I ask you also, true companion, help these women, who have labored side by side with me in the gospel together with Clement and the rest of my fellow workers, whose names are in the book of life.",
                },
                {
                    n: 4,
                    text: "Rejoice in the Lord always; again I will say, rejoice.",
                },
                {
                    n: 5,
                    text: "Let your reasonableness be known to everyone. The Lord is at hand;",
                },
                {
                    n: 6,
                    text: "do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
                },
                {
                    n: 7,
                    text: "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
                },
                {
                    n: 8,
                    text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
                },
                {
                    n: 9,
                    text: "What you have learned and received and heard and seen in me—practice these things, and the God of peace will be with you.",
                },
            ],
        },

        worship: {
            title1: "Hymns of Praise",
            title2: "Song",
        },

        greeting: "Time to greet each other",

        testimony: {
            title: "Testimonials",
            subtitle: "A space to share God's wonders and faithfulness.",
        },

        prayer: {
            intercession: "intercession",
            title: "Pastoral Prayer",
            subtitle: "Prayer requests and motives.",
        },

        offering: {
            title: "Tithes and Offerings",
            subtitle: "1 Cotinthians 16:2a",
            verses: "On the first day of every week, each of you is to put something aside and store it up, as he may prosper, so that there will be no collecting when I come.",
            parishioner: "",
        },

        reflection: {
            title: "pastoral reflection",
            paragraphs: [
                {
                    id: 1,
                    paragraph:
                        "Giving is not something we do lightly without reflecting before God. It is a conscious act of obedience and an act of praise and worship to God. Let us give according to what we have received, and we must reflect on the blessings we have received from God before giving.",
                },
                {
                    id: 2,
                    paragraph:
                        "Each of us should bring our offering to the weekly meeting according to how we have been blessed. We give according to what God has provided for us, and we do so with gratitude for the blessings we have received from His hand. Let us bring our offerings to the temple and contribute to the growth of God’s work",
                },
            ],
        },

        doxology: {
            tag: "message & doxology",
            title: "Sermon",
            subtitle: "Pastor Roberto Rodríguez Albavera",
            titleText: "doxology of blessing • 1 Peter 5:10–11",
            text: "«10 And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you. 11 To him be the dominion forever and ever. Amen.»",
        },
        communion: {
            title: "Communion and Pastoral Blessing",
            scriptureReference: "",
            verses: "",
        },

        announcements: {
            title: "Announcements",
            text: "Life of the Church & Events",
        },
    },

    /*  --- Sunday the 15th program EN --- */

    "2026-11-15": {
        backButton: "Volver a la selección de idioma",

        mainHeading: "Sunday Service Program",

        pastor: "Pastor Roberto Rodríguez Albavera",

        liturgy: "Sunday Liturgy",

        mainTitle: "Order of Worship",

        welcome: {
            title: "Welcome",
            subtitle: "Warm greetings to the congregation and our visitors.",
        },

        reading: {
            title: "Bible Reading",
            reference: "Psalm 100",
            verses: [
                {
                    n: 1,
                    text: "Make a joyful noise to the Lord, all the earth!",
                },
                {
                    n: 2,
                    text: "Serve the Lord with gladness! Come into his presence with singing!",
                },
                {
                    n: 3,
                    text: "Know that the Lord, he is God! It is he who made us, and we are his; we are his people, and the sheep of his pasture.",
                },
                {
                    n: 4,
                    text: "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!",
                },
                {
                    n: 5,
                    text: "For the Lord is good; his steadfast love endures forever, and his faithfulness to all generations.",
                },
            ],
        },

        worship: {
            title1: "Hymns of Praise",
            title2: "Song",
        },

        greeting: "Time to greet each other",

        testimony: {
            title: "Testimonials",
            subtitle: "A space to share God's wonders and faithfulness.",
        },

        prayer: {
            intercession: "intercession",
            title: "Pastoral Prayer",
            subtitle: "Prayer requests and motives.",
        },

        offering: {
            title: "Tithes and Offerings",
            subtitle: "1 Chronicles 29:16–18",
            verses: "16 O Lord our God, all this abundance that we have provided for building you a house for your holy name comes from your hand and is all your own. 17 I know, my God, that you test the heart and have pleasure in uprightness. In the uprightness of my heart I have freely offered all these things, and now I have seen your people, who are present here, offering freely and joyously to you. 18 O Lord, the God of Abraham, Isaac, and Israel, our fathers, keep forever such purposes and thoughts in the hearts of your people, and direct their hearts toward you.",
            parishioner: "",
        },

        reflection: {
            title: "pastoral reflection",
            paragraphs: [
                {
                    id: 1,
                    paragraph:
                        "This is a prayer David offered when he saw all the offerings the people had brought for the construction of the temple. David recognized that everything they were offering had first been given to them by God. It is God who provides us with everything we have, so it shouldn’t be difficult to give Him our offerings. After all, everything we have belongs to Him.",
                },
                {
                    id: 2,
                    paragraph:
                        "Once again, we see the importance of giving willingly and joyfully. God cares about our attitude when we bring our offerings. Let us always seek to give with our hearts turned toward God, toward His greatness, and remembering all the wonderful things He has given us. Let us praise God with our offerings!",
                },
            ],
        },

        doxology: {
            tag: "message & doxology",
            title: "Sermon",
            subtitle: "Pastor Roberto Rodríguez Albavera",
            titleText: "doxology of blessing • Jude 24–25",
            text: "«24 Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, 25 to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.»",
        },
        communion: {
            title: "Communion and Pastoral Blessing",
            scriptureReference: "",
            verses: "",
        },
    },
};

export const es = pickByDate(esPrograms);
export const en = pickByDate(enPrograms);

type Songs = { first: string[]; second: string[] };

export const songs = pickByDate<Songs>({
    "2026-11-08": {
        first: ["Su Amor es para Siempre", "La Canción del Espíritu"],
        second: ["Mi Alma Espera", "Fue tu Gracia"],
    },

    "2026-11-15": {
        first: ["Tu Iglesia", "Gracia Sublime es"],
        second: ["Dios Ha Sido Bueno", "Fue Tu Gracia"],
    },
});
