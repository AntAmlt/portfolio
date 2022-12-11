var projects = [
    {
        "title": "Bobby Z Burgers",
        "picture": "assets/img/projects/bobbyzburger.png",
        "shortDescription": "Site web d'une marque fictive tirée de la bande dessinée \"Il faut flinguer Ramirez\".",
        "longDescription": "Tirée de la bande dessinée <em>Il faut flinguer Ramirez</em>, <strong>Bobby Z Burger</strong> est une chaîne de restauration rapide. J'ai décidé de concevoir le site internet de cette marque fictive en me basant sur les valeurs et la charte graphique qui ressortent à la lecture.",
        "date": "Juillet 2022",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "links": [
            {
                "title": "Démonstration",
                "link": "https://github.com" 
            },
            {
                "title": "Code source",
                "link": "https://gitlab.com" 
            }
        ]
    },
    {
        "title": "Tutorat",
        "picture": "assets/img/projects/tutorat.png",
        "shortDescription": "Application de tutorat réalisée dans le cadre d'un projet d'études.",
        "longDescription": "Dans le cadre d'un projet d'études par groupe de 3, il a été demandé de réaliser une application de gestion de tutorat. Elle bénéficie d'une interface graphique conçue à l'aide de JavaFX. La théorie des graphes constitue le coeur de l'algorithme d'affectation.",
        "date": "Avril 2022",
        "technologies": ["Java", "JavaFX"],
        "links": []
    },
    {
        "title": "Learning'Up",
        "picture": "assets/img/projects/learningup.png",
        "shortDescription": "Site web de la startup fictive Learning'Up réalisé dans le cadre d'un projet d'études.",
        "longDescription": "Dans le cadre d'un projet d'études en binôme, nous avons inventé une start-up distribuant des logiciels éducatifs d'un genre nouveau. L'enjeu était de concevoir l'ensemble des outils de communication : une brochure publicitaire, une lettre commerciale et ce site web.",
        "date": "Avril 2022",
        "technologies": ["HTML", "CSS"],
        "links": [
            {
                "title": "Démonstration",
                "link": "https://github.com" 
            }
        ]
    }
];

var projectModal = document.getElementById("project-modal");
var headerProjectModal = document.getElementById("modal-header");
var titleProjectModal = document.getElementById("project-modal-title");
var dateProjectModal = document.getElementById("project-modal-date");
var descriptionProjectModal = document.getElementById("project-modal-description");
var technologiesProjectModal = document.getElementById("project-modal-technologies");
var linksProjectModal = document.getElementById("project-modal-links");




function openProject(projectIndex) {
    if (0 <= projectIndex && projectIndex < projects.length) {
        removeAllChildNodes(technologiesProjectModal);
        removeAllChildNodes(linksProjectModal);
        var project = projects[projectIndex];
        headerProjectModal.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)),
        url(${project.picture})`;
        titleProjectModal.innerText = project.title;
        dateProjectModal.innerText = project.date;
        descriptionProjectModal.innerHTML = project.longDescription;
        project.technologies.forEach(element => {
            createTechnologyElement(element);
        });
        project.links.forEach(element => {
            createLinkElement(element);
        })
        projectModal.style.display = "block";
    }
}

function closeProject() {
    projectModal.style.display = "none";
}

function createTechnologyElement(technology) {
    const element = document.createElement("span");
    element.className = "project-modal-technology";
    element.innerText = technology;
    technologiesProjectModal.appendChild(element);
}

function createLinkElement(link) {
    const element = document.createElement("a");
    element.href = link.link;
    element.innerText = link.title;
    linksProjectModal.appendChild(element);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}