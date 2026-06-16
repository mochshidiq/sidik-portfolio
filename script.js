const projectDetails = {
  cortex: {
    domain: "Government-scale tax platform",
    title: "Cortex / PSIAP",
    body: "A government-scale tax platform involving complex business rules, dynamic validation, approval workflows, notification/message features, and microservices-oriented delivery.",
    contribution: "Delivered full-stack features, analyzed requirements, implemented frontend/backend changes, supported frontend direction, and performed pre-QA testing before handover.",
    tech: ".NET Core, Angular, TypeScript, REST API, Tibero, Docker, Jira, Microservices"
  },
  his: {
    domain: "Healthcare administration",
    title: "Healthcare Administrative Information System",
    body: "A remote healthcare administrative system focused on operational and administrative workflows rather than clinical functions.",
    contribution: "Developed modules, supported development standards, joined daily Scrum routines, and coordinated with business analysts, testers, developers, and senior stakeholders.",
    tech: ".NET Core, REST API, Azure, SQL Server, GitHub, Microservices, Scrum"
  },
  binus: {
    domain: "University management system",
    title: "BINUS Enrichment Management System",
    body: "A student-program management system for enrichment tracks such as internship, research, study abroad, bootcamp, community development, and entrepreneurship.",
    contribution: "Handled registration, program selection, logbook, monthly/final reporting, validation workflows, tickets, user coordination, and team guidance.",
    tech: ".NET Core, ASP.NET MVC, JavaScript, Web API, SQL Server, PHP"
  },
  spisy: {
    domain: "ERP / HRIS product",
    title: "Spisy 10 ERP/HRIS",
    body: "An ERP/HRIS product requiring client-specific customization, feature enhancement, and bug fixing in a busy product environment.",
    contribution: "Built an organization structure module with Excel export and position-mapping logic, plus enhancements and bug fixes with no formal onboarding.",
    tech: "ASP.NET MVC, JavaScript, SQL Server, GitHub, API integration"
  },
  rds: {
    domain: "Document automation",
    title: "RDS Document Generation & Sanity Check",
    body: "A document-production workflow for banking and insurance clients, including policy books, billing statements, invoices, delivery orders, and email blast outputs.",
    contribution: "Built scheduled processing logic to download FTP/cloud input data, generate print-ready PDFs, log failed records, and notify clients after processing.",
    tech: "C# Windows Forms, SQL Server, HP/OpenText Exstream, FTP/cloud processing, TXT/Excel processing"
  },
  auto: {
    domain: "Automotive enterprise client",
    title: "Automotive Promotional & Operational Web Modules",
    body: "Web modules for automotive promotional campaigns, service events, and operational workflows.",
    contribution: "Developed web modules and adapted to separated repositories, short-cycle requests, and client-driven requirements.",
    tech: ".NET Core, HTML, JavaScript, SQL Server, Agile/Scrum"
  },
  research: {
    domain: "Master's thesis research",
    title: "AI/NLP-Based Enterprise Knowledge Search",
    body: "A master’s thesis prototype and architecture concept for enterprise knowledge search to support knowledge management and reuse.",
    contribution: "Designed an architecture covering semantic search, metadata filtering, access control, traceability, and application-layer enterprise flow.",
    tech: "Python/FastAPI concept, semantic search, metadata, access control, traceability, enterprise architecture"
  },
  cbt: {
    domain: "College final project",
    title: "Computer-Based Test System",
    body: "A final project built to transform paper-based tests into computer-based tests for a school environment.",
    contribution: "Built the system as part of graduation requirements using web technologies and database-backed test workflows.",
    tech: "PHP CodeIgniter, HTML, MySQL"
  },
  knowlens: {
    domain: "Master's thesis prototype",
    title: "KnowLens — AI/NLP Knowledge Search",
    body: "A static public demo for an AI/NLP-based enterprise knowledge search prototype. The original thesis prototype uses backend processing, semantic retrieval, metadata, access control, and traceability concepts.",
    contribution: "Designed the architecture and prototype flow, including context-aware search, answer generation, knowledge upload metadata, access scope, and traceable source behavior. The public demo uses safe dummy responses for GitHub Pages.",
    tech: "HTML, CSS, JavaScript static demo; original concept includes Python/FastAPI, semantic search, metadata, access control, and traceability.",
    images: ["assets/img/projects/knowlens-real.png", "assets/img/prototype/knowlens-screen-2.png"]
  }
};

document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  document.querySelector(".nav-links")?.classList.toggle("open");
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      if (filter === "all" || card.dataset.category.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const modal = document.getElementById("projectModal");
const closeButton = document.querySelector(".modal-close");

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = projectDetails[button.dataset.modal];
    if (!data || !modal) return;

    modal.querySelector(".modal-domain").textContent = data.domain;
    modal.querySelector(".modal-title").textContent = data.title;
    modal.querySelector(".modal-body").textContent = data.body;
    modal.querySelector(".modal-contribution").textContent = data.contribution;
    modal.querySelector(".modal-tech").textContent = data.tech;
    const imageMap = {
      cortex: ["assets/img/projects/cortex-psiap-1.png", "assets/img/projects/cortex-psiap-1.png"],
      his: ["assets/img/projects/healthcare-his-real.png", "assets/img/projects/healthcare-his-real.png"],
      binus: ["assets/img/projects/binus-enrichment-real.png", "assets/img/projects/binus-enrichment-real.png"],
      spisy: ["assets/img/projects/spisy10-real.png", "assets/img/projects/spisy10-real.png"],
      rds: ["assets/img/projects/rds-automation-real.png", "assets/img/projects/cortex-psiap-2.png"],
      auto: ["assets/img/projects/automotive-modules-real.png", "assets/img/projects/automotive-modules-real.png"],
      research: ["assets/img/projects/ai-nlp-prototype.svg", "assets/img/projects/ai-nlp-prototype.svg"],
      cbt: ["assets/img/projects/college-final-project.svg", "assets/img/projects/college-final-project.svg"]
    };
    const imgs = imageMap[button.dataset.modal] || ["assets/img/projects/cortex-psiap-1.png", "assets/img/projects/cortex-psiap-1.png"];
    modal.querySelector(".modal-image-one").src = imgs[0];
    modal.querySelector(".modal-image-two").src = imgs[1];

    document.body.classList.add("modal-open");
    modal.showModal();
  });
});

closeButton?.addEventListener("click", () => {
  modal?.close();
  document.body.classList.remove("modal-open");
});

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
    document.body.classList.remove("modal-open");
  }
});


const answerSamples = [
  { title: "Onboarding knowledge recommendation", text: "For a new project team, onboarding knowledge should be organized by project context, validated documents, role-based access, and a clear handover checklist. The system would prioritize recent validated knowledge and show traceable source documents." },
  { title: "Project handover summary", text: "The retrieved knowledge suggests that handover should include business rules, technical architecture, known issues, deployment notes, and contact points. Each answer should remain connected to the original source for verification." },
  { title: "Access-controlled search response", text: "The sample response is generated only from documents available to the user's role. Restricted knowledge is excluded, while public/internal validated documents are ranked using semantic similarity and metadata relevance." }
];

document.getElementById("generateAnswer")?.addEventListener("click", () => {
  const sample = answerSamples[Math.floor(Math.random() * answerSamples.length)];
  document.getElementById("answerTitle").textContent = sample.title;
  document.getElementById("answerText").textContent = sample.text;
});
