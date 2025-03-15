import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"


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
            text: 'Based in Paris, France'
        },
        {
            emoji: "👨‍💻", // 👨‍💻
            text: "Student at Lycée Parc de Vilgénis"
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
            link: "https://drive.google.com/file/d/1JS3_LtOTLO6fKu5aNTWnk0KpBMhGAR_t/view",
            icon: "fa fa-clipboard",
            label: 'clipboard'
        }

    ],
    bio: "Hello! I'm Romain Pereira. I'm a Full Stack Student Developer. I enjoy building web applications and learning new technologies. I'm currently studying at Lycée Parc de Vilgénis. I love to travel and explore new places. I'm currently based in Paris, France.",
    skills:
        {
            languages: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Go', 'HTML', 'CSS'],
            frameworks: ['React', 'Express', 'Flask', 'Django', 'Bootstrap', 'Tailwind'],
            databases: ['MySQL', 'SQLite', 'MongoDB', 'Firebase'],
            cloudServices: ['AWS EC2', 'GCP', 'Heroku'],
            tools: ['Git', 'Postman', 'Insomnia', 'npm', 'pip', 'Swagger']
        }
    ,
    hobbies: [
        {
            label: 'Traveling',
            emoji: '✈️'
        },
        {
            label: 'Video Games',
            emoji: '🎮'
        },
        {
            label: 'Soccer',
            emoji: '⚽️'
        },
        {
            label: 'Padel',
            emoji: '🎾'
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
            live: "http://romainp12-zoo.fwh.is/login.php",
            source: "",
            image: mock2
        },
        {
            title: "News API",
            live: "",
            source: "https://github.com/romainp12/news-api",
            image: mock3
        }
    ]
}
