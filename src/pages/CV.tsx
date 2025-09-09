export default function CVPage() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center mb-4">Curriculum Vitae</h1>
          <div className="text-center mb-5">
            <a 
              href="/Fichier.CV.pdf" 
              download="CV_Aziz_AVERIBOU.pdf"
              className="btn btn-outline-primary btn-lg download-btn"
            >
              <i className="fas fa-download me-2"></i>
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center text-primary">
            <span className="border-bottom border-3 border-primary pb-2 d-inline-block">Formation</span>
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card mb-2">
            <div className="card-body py-2">
              <h6 className="card-title mb-1">Baccalauréat en Informatique</h6>
              <small className="text-muted d-block mb-1">2023 – en cours</small>
              <small className="text-muted">Université du Québec à Rimouski, Campus de Lévis, Lévis</small>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body py-2">
              <h6 className="card-title mb-1">Classe Préparatoire d'Entrée dans les Grandes Écoles</h6>
              <small className="text-muted d-block mb-1">2021 – 2023</small>
              <small className="text-muted">Ministère de l'Éducation, Ouagadougou, Burkina Faso</small>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body py-2">
              <h6 className="card-title mb-1">Diplôme d'Étude Collégiale en Mathématiques et Sciences de la Vie et de la Terre</h6>
              <small className="text-muted d-block mb-1">2018 – 2021</small>
              <small className="text-muted">Collège Privé Moderne de Toussiana, Toussiana, Burkina Faso</small>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body py-2">
              <h6 className="card-title mb-1">Brevet d'Étude Collégiale</h6>
              <small className="text-muted d-block mb-1">2013 – 2018</small>
              <small className="text-muted">Collège Lassallien de Kongoussi, Kongoussi, Burkina Faso (2021)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center text-primary">
            <span className="border-bottom border-3 border-primary pb-2 d-inline-block">Compétences</span>
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Linguistiques</h6>
                  <small className="text-muted">Français (avancé), Anglais (intermédiaire-équivalent à 10/20)</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Bureautiques</h6>
                  <small className="text-muted">Word, Excel, OneDrive</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Développement logiciel</h6>
                  <small className="text-muted">C#, Python, Java Script, PHP, Django, React JS, Assembleur (ASM)</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Bases de données</h6>
                  <small className="text-muted">MySQL, SQL Server (intégré à Visual Studio)</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Outils et environnements de développement</h6>
                  <small className="text-muted">Visual Studio, Visual Studio Code, Eclipse, GitHub, Git</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Technologies Cloud</h6>
                  <small className="text-muted">Intégration avec des plateformes Cloud</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Outils multimédia</h6>
                  <small className="text-muted">OBS Studio</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-body py-2">
                  <h6 className="card-title mb-1">Outils d'apprentissage en ligne</h6>
                  <small className="text-muted">Moodle</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center text-primary">
            <span className="border-bottom border-3 border-primary pb-2 d-inline-block">Expérience Professionnelle</span>
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">CISSS Chaudière Appalache</h5>
              <h6 className="card-subtitle mb-2 text-muted">Intervenant(e) en Soutien et Sécurité / Agent(e) d'intervention</h6>
              <p className="text-muted mb-3">07/2024 – en cours</p>
              <ul className="mb-0">
                <li>Support et surveillance : Assurer un soutien constant et une surveillance auprès des usagers référés, en particulier en situation de crise ou de désorganisation.</li>
                <li>Accompagnement et animation : Accueillir et accompagner les usagers des différents services, tout en animant des activités en fonction des besoins spécifiques.</li>
                <li>Intervention en situation de crise : Intervenir physiquement pour gérer des situations critiques et assurer la sécurité des usagers et des lieux.</li>
                <li>Support aux intervenants : Apporter une assistance dans divers services en fonction des besoins, y compris des rondes de sécurité et des fouilles lorsque requis.</li>
                <li>Observation et rapport : Observer les comportements des usagers et rédiger des rapports détaillés pour contribuer à leur processus de réadaptation.</li>
                <li>Rondes de sécurité : Effectuer des rondes régulières pour garantir la sécurité au sein de l'établissement.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">TEKNION</h5>
              <h6 className="card-subtitle mb-2 text-muted">Agent de production et de conditionnement</h6>
              <p className="text-muted mb-3">05/2024 – 08/2024 | Saint Romuald, Lévis, QC</p>
              <ul className="mb-0">
                <li>Emballage des colis : Préparation des produits pour expédition en les emballant soigneusement selon les spécifications.</li>
                <li>Transport des pièces : Déplacement des pièces des convoyeurs vers les palettes correspondantes en respectant les consignes de sécurité.</li>
                <li>Strapping des palettes : Sécurisation des palettes pleines avec du strap pour le stockage ou l'expédition.</li>
                <li>Décompte et gestion des stocks : Vérification des quantités et mise à jour des inventaires.</li>
                <li>Nettoyage et entretien : Maintien de la propreté et de l'ordre dans l'aire de travail après chaque quart.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">MAXI (Service à la Clientèle)</h5>
              <h6 className="card-subtitle mb-2 text-muted">Caissier</h6>
              <p className="text-muted mb-3">09/2023 – 05/2024 | Lévis, QC (rue : président Kennedy)</p>
              <ul className="mb-0">
                <li>Accueil et assistance aux clients à la caisse.</li>
                <li>Répondre aux appels téléphoniques et fournir des informations aux clients.</li>
                <li>Gestion des transactions et traitement des paiements.</li>
                <li>Autres tâches assignées liées au service à la clientèle.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">DYLANE SERVICE</h5>
              <h6 className="card-subtitle mb-2 text-muted">Commis d'entrepôt</h6>
              <p className="text-muted mb-3">07/2019-09/2022 | Ouagadougou, Burkina-Faso (Ouaga 2000)</p>
              <ul className="mb-0">
                <li>Chargement et déchargement des marchandises.</li>
                <li>Aménagement des produits dans l'entrepôt pour une organisation optimale.</li>
                <li>Participation aux opérations de livraison et de réception des marchandises.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center text-primary">
            <span className="border-bottom border-3 border-primary pb-2 d-inline-block">Qualités Personnelles</span>
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <ul className="mb-0 list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Sens de l'organisation
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Courtoisie et loyauté
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Aptitude au travail en équipe
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Patience
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Adaptabilité
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Engagement envers l'excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center text-primary">
            <span className="border-bottom border-3 border-primary pb-2 d-inline-block">Intérêts et Loisirs</span>
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <ul className="mb-0 list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-gamepad text-primary me-2"></i>
                  Jeux vidéo et de stratégies
                </li>
                <li className="mb-2">
                  <i className="fas fa-futbol text-primary me-2"></i>
                  Sports d'équipe : Soccer, Basketball
                </li>
                <li className="mb-2">
                  <i className="fas fa-book text-primary me-2"></i>
                  Lecture de romans et de science-fiction
                </li>
                <li className="mb-2">
                  <i className="fas fa-hiking text-primary me-2"></i>
                  Randonnée en plein air
                </li>
                <li className="mb-2">
                  <i className="fas fa-language text-primary me-2"></i>
                  Apprentissage de nouvelles langues
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


