const malla = [
  {
    semestre: "Semestre 1",
    materias: [
      ["Inglés I", 2],
      ["Humanidades I", 2],
      ["Problemas sociales globales", 3],
      ["Aspectos psicológicos del comportamiento humano", 2],
      ["Filosofía e historia de la psicología", 4],
      ["Psicobiología", 2],
    ]
  },
  {
    semestre: "Semestre 2",
    materias: [
      ["Inglés II", 2],
      ["Humanidades II", 2],
      ["Enfoque y tendencia en psicología dinámica", 3],
      ["Enfoque y tendencia en psicología conductual", 3],
      ["Estadística descriptiva inferencial", 3],
      ["Procesos psicológicos básicos y complejos", 4],
      ["Neurociencia cognitiva y del comportamiento", 2],
    ]
  },
  {
    semestre: "Semestre 3",
    materias: [
      ["Inglés III", 2],
      ["Humanidades III", 2],
      ["Psicología diferencial", 3],
      ["Enfoque y tendencias en psicología social", 3],
      ["Enfoque y tendencia en psicología cognitiva", 3],
      ["Enfoque y tendencia en psicología sistemática", 2],
      ["Medición y evaluación de procesos psicológicos básicos y complejos", 2],
    ]
  },
  {
    semestre: "Semestre 4",
    materias: [
      ["Inglés IV", 2],
      ["Psicopatología", 4],
      ["Procesos psicosociales de los grupos y la familia", 2],
      ["Enfoque y tendencia en psicología humanística", 3],
      ["Semiótica psicológica", 2],
      ["Psicología evolutiva", 3],
      ["Neuropsicología", 2],
    ]
  },
  {
    semestre: "Semestre 5",
    materias: [
      ["Psicología en el campo de las organizaciones", 3],
      ["Psicología en el campo social comunitario", 3],
      ["Psicología en el campo social clínico y de la salud", 3],
      ["Psicología en el campo jurídico", 3],
      ["Modelos psicodiagnósticos", 2],
      ["Psicología en el campo educativo", 3],
      ["Epistemologías de las ciencias sociales", 3],
    ]
  },
  {
    semestre: "Semestre 6",
    materias: [
      ["Metodología y técnicas de intervención psicosocial", 4],
      ["Práctica clínica", 6],
      ["Curso optativo I", 2],
      ["Diseños de investigación", 3],
      ["Informe psicológico", 3],
      ["Institucional I", 2],
    ]
  },
  {
    semestre: "Semestre 7",
    materias: [
      ["Electiva I", 2],
      ["Práctica optativa I", 6],
      ["Curso optativo II", 2],
      ["Formulación de proyectos de investigación e intervención social", 3],
      ["Institucional II", 2],
      ["Problemática social colombiana", 3],
    ]
  },
  {
    semestre: "Semestre 8",
    materias: [
      ["Electiva II", 2],
      ["Institucional III", 2],
      ["Práctica optativa II", 6],
      ["Trabajo de grado", 4],
      ["Dinámica sociocultural colombiana", 3],
      ["Curso optativo III", 2],
    ]
  },
];

const container = document.getElementById("malla-container");

malla.forEach(sem => {
  const semDiv = document.createElement("div");
  semDiv.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = sem.semestre;
  semDiv.appendChild(titulo);

  sem.materias.forEach(([nombre, creditos]) => {
    const matDiv = document.createElement("div");
    matDiv.className = "materia";
    matDiv.textContent = `${nombre} (${creditos} créditos)`;
    matDiv.onclick = () => alert(`${nombre}\nCréditos: ${creditos}`);
    semDiv.appendChild(matDiv);
  });

  container.appendChild(semDiv);
});
