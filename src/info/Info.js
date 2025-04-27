import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Romain",
    lastName: "Pereira",
    initials: "RP",
    position: "Full Stack Student Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🇫🇷',
            text: 'Basé à Paris, France'
        },
        {
            emoji: "👨‍💻", // 👨‍💻
            text: "Étudiant au Lycée Parc de Vilgénis"
        },
        {
            emoji: "📧",
            text: (<a href="mailto:rpereira.pro@gmail.com">rpereira.pro@gmail.com</a>)
        }
    ],
    socials: [
        {
            link: "https://linkedin.com/in/romain-pereira-233418206/",
            icon: 'fa fa-linkedin',
            label: 'linkedin'
        },
        {
            link: "https://github.com/romainp12",
            icon: 'fa fa-github',
            label: 'github'
        },
        {
            link: "https://twitter.com/footpatrolfr",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://drive.google.com/file/d/1fCwWG2x74ECGr2L28pLXNke7cr_NAWkc/view",
            icon: "fa fa-clipboard",
            label: 'clipboard'
        }

    ],
    bio: "Bonjour ! Je suis Romain Pereira. Je suis un étudiant Développeur Full Stack en BTS SIO Option SLAM. J'aime développer des applications web et apprendre de nouvelles technologies. J'étudie actuellement au Lycée Parc de Vilgénis. J'adore voyager et explorer de nouveaux endroits. Je suis actuellement basé à Paris, France.",
    skills:
        {
            languages: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Go', 'HTML', 'CSS'],
            frameworks: ['React', 'Express', 'Flask', 'Django', 'Bootstrap', 'Tailwind'],
            databases: ['MySQL', 'SQLite', 'MongoDB', 'Firebase'],
            cloudServices: ['AWS EC2', 'GCP', 'Heroku'],
            tools: ['Git', 'Postman', 'Insomnia', 'npm', 'pip']
        }
    ,
    hobbies: [
        {
            label: 'Voyages',
            emoji: '✈️'
        },
        {
            label: 'Jeux vidéo',
            emoji: '🎮'
        },
        {
            label: 'Football',
            emoji: '⚽️'
        },
        {
            label: 'Padel',
            emoji: '🎾'
        }
        
    ],
stages: [
    {
        company: "DS Pièces Auto",
        date: "Novembre - Décembre 2024",
        missions: [
            "Automatisation de tâches via scripts Python",
            "Export des données de commandes aux formats CSV/JSON"
        ]
    },
    {
        company: "Montagrues",
        date: "Mai - Juillet 2024",
        missions: [
            "Mise à jour, maintenance et ajout de fonctionnalités du site sous WordPress",
            "Développement de scripts VBA pour les estimations du chiffre d’affaires"
        ]
    }
],
    portfolio: [
        {
            title: "Gestion d'un zoo",
            live: "http://romainp12-zoo.fwh.is/login.php",
            source: "",
            image: mock1
        },
        {
            title: "Gestion d'activités",
            live: "http://romainp12-vva.fwh.is/index.php",
            source: "",
            image: mock2
        },
        {
            title: "News API",
            live: "",
            source: "https://github.com/romainp12/news-api",
            image: mock3
        },
        {
            title: "Atmos Executive",
            live: "",
            source: "https://github.com/romainp12/atmos-executive",
            image: mock4
        }
    ],
    techwatch: [
        {
            title: "Gestion d'un zoo",
            live: "http://romainp12-zoo.fwh.is/login.php",
            source: "",
            image: mock1
        },
        {
            title: "Gestion d'activités",
            live: "http://romainp12-vva.fwh.is/index.php",
            source: "",
            image: mock2
        },
        {
            title: "News API",
            live: "",
            source: "https://github.com/romainp12/news-api",
            image: mock3
        },
        {
            title: "Atmos Executive",
            live: "",
            source: "https://github.com/romainp12/atmos-executive",
            image: mock4
        }
    ]
}
