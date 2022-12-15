/**
 * Project information
 */
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

/**
 * Add project items
 */

 var projectItem;
 var projectPicture;
 var projectInfo;
 var projectInfoContent;
 var projectTitle;
 var projectDate;
 var projectShowMore;

 var projectsList = document.getElementById("projects").getElementsByClassName("section-content");

 projects.forEach((element, idx) => {
    // Create HTML elements
    projectItem = document.createElement("div");
    projectPicture = document.createElement("img");
    projectInfo = document.createElement("div");
    projectInfoContent = document.createElement("div");
    projectTitle = document.createElement("h3");
    projectCaption = document.createElement("p");
    projectShowMore = document.createElement("button");
    // Add properties
    projectItem.className = "project-item";
    projectItem.addEventListener('click', () => openProject(idx));
    projectPicture.src = element.picture;
    projectPicture.alt = element.title;
    projectInfo.className = "project-info";
    projectInfoContent.className = "project-info-content";
    projectTitle.innerHTML = `${element.title} <small>(${element.date})</small>`; 
    projectCaption.innerText = element.shortDescription;
    projectShowMore.addEventListener('click', () => openProject(idx));
    projectShowMore.innerText = "Voir plus";
    // Nest elements into each other
    projectInfoContent.appendChild(projectTitle);
    projectInfoContent.appendChild(projectCaption);
    projectInfo.appendChild(projectInfoContent);
    projectInfo.appendChild(projectShowMore);
    projectItem.appendChild(projectPicture);
    projectItem.appendChild(projectInfo);
    // Add the project item in the page
    projectsList[0].appendChild(projectItem);
 });



var projectModal = document.getElementById("project-modal");
var headerProjectModal = document.getElementById("modal-header");
var titleProjectModal = document.getElementById("project-modal-title");
var dateProjectModal = document.getElementById("project-modal-date");
var descriptionProjectModal = document.getElementById("project-modal-description");
var technologiesProjectModal = document.getElementById("project-modal-technologies");
var linksProjectModal = document.getElementById("project-modal-links");



/**
 * Open a modal with project informations since its index.
 * @param {*} projectIndex The project index
 */
function openProject(projectIndex) {
    if (0 <= projectIndex && projectIndex < projects.length) {
        removeAllChildNodes(technologiesProjectModal);
        removeAllChildNodes(linksProjectModal);
        var project = projects[projectIndex];
        headerProjectModal.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)),
        url(${project.picture})`;
        headerProjectModal.style.backgroundSize = "contain";
        headerProjectModal.style.backgroundRepeat = "no-repeat";
        headerProjectModal.style.backgroundPosition = "center";
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
    } else console.log("Test");
}

/**
 * Close the project modal.
 */
function closeProject() {
    projectModal.style.display = "none";
}

/**
 * Create and insert the technology tag used in a project.
 * @param {*} technology The technology used in the project.
 */
function createTechnologyElement(technology) {
    const element = document.createElement("span");
    element.className = "project-modal-technology";
    element.innerText = technology;
    technologiesProjectModal.appendChild(element);
}

/**
 * Create and insert a link for a project.
 * @param {*} link The link (title and URL) to add.
 */
function createLinkElement(link) {
    const element = document.createElement("a");
    element.href = link.link;
    element.innerText = link.title;
    linksProjectModal.appendChild(element);
}

/**
 * Remove all children from a parent.
 * @param {*} parent The parent of which the children have to be deleted.
 */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}