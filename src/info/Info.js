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
    
autonomousCars: {
  title: "Veille Technologique : Voitures Autonomes",
  introduction: "Les voitures autonomes représentent l'un des développements technologiques les plus révolutionnaires de notre époque. Cette veille explore les avancées récentes, les défis et les perspectives d'avenir de cette technologie transformative.",
  sections: [
    {
      title: "Niveaux d'Autonomie",
      content: "La classification standard des véhicules autonomes comporte 6 niveaux (de 0 à 5). Actuellement, la plupart des véhicules commercialisés se situent entre les niveaux 2 et 3, avec des fonctionnalités comme l'assistance au maintien de voie et le régulateur de vitesse adaptatif.",
      image: "https://images.frandroid.com/wp-content/uploads/2022/08/conduite-autonome-light.png",
      imageAlt: "Niveaux d'autonomie des véhicules",
      tags: ["Classification", "SAE", "Niveaux 0-5"]
    },
    {
      title: "Technologies Clés",
      content: "Les voitures autonomes s'appuient sur un ensemble de capteurs sophistiqués (LiDAR, caméras, radar), des systèmes de cartographie HD et des algorithmes d'intelligence artificielle pour percevoir leur environnement et prendre des décisions en temps réel.",
      image: "https://images.caradisiac.com/images/3/9/4/9/183949/S0-ou-en-est-waymo-la-puissante-machine-de-guerre-de-google-pour-la-voiture-autonome-634202.jpg",
      imageAlt: "Capteurs de voitures autonomes",
      tags: ["LiDAR", "Intelligence Artificielle", "Computer Vision"]
    },
    {
      title: "Acteurs Majeurs",
      content: "Waymo (Google), Tesla, GM Cruise et Baidu sont parmi les leaders du secteur, chacun poursuivant des approches technologiques distinctes. Tesla mise sur la vision par caméra, tandis que Waymo privilégie le LiDAR pour une perception plus précise.",
      image: "https://www.shop4tesla.com/cdn/shop/articles/tesla-vs-waymo-der-wettlauf-um-robotaxis-in-den-usa-921196.jpg?v=1728515227",
      imageAlt: "Entreprises de voitures autonomes",
      tags: ["Waymo", "Tesla", "Baidu", "GM Cruise"]
    },
    {
      title: "Défis Actuels",
      content: "Malgré les progrès considérables, des obstacles significatifs demeurent : fiabilité dans des conditions météorologiques difficiles, compréhension des situations complexes en zone urbaine, cadres réglementaires et questions de responsabilité en cas d'accident.",
      image: "https://res.cloudinary.com/dzszhtctg/image/upload/v1714347687/autonomous_challenges_eswn3j.jpg",
      imageAlt: "Défis des voitures autonomes",
      tags: ["Régulation", "Sécurité", "Éthique"]
    },
    {
      title: "Perspectives d'Avenir",
      content: "Les analystes prévoient que les taxis autonomes seront la première application commerciale à grande échelle, suivis par le transport de marchandises. L'adoption généralisée des véhicules particuliers entièrement autonomes pourrait prendre encore 5 à 10 ans.",
      image: "https://images.manouvellevoiture.com/data/image/v/o/voiture-autonome3.jpg?tr=pr-true",
      imageAlt: "Futur des voitures autonomes",
      tags: ["Prévisions", "Robotaxis", "Transport"]
    }
  ],
  conclusion: "La technologie des véhicules autonomes continue d'évoluer rapidement, promettant de transformer fondamentalement nos modes de transport, nos villes et notre société. Cette révolution apportera des bénéfices significatifs en termes de sécurité, d'efficacité et d'accessibilité, tout en soulevant des questions importantes sur l'emploi, la vie privée et l'éthique.",
  resources: [
    {
      name: "SAE International",
      link: "https://www.sae.org/standards/content/j3016_202104/"
    },
    {
      name: "Waymo Technology",
      link: "https://waymo.com/tech/"
    },
    {
      name: "Tesla AI Day Presentation",
      link: "https://www.tesla.com/AI"
    }
  ]
},
}
