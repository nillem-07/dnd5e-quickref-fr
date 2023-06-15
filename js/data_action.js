data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Attaque au corps à corps ou à distance",
        description: "Effectuez une attaque au corps à corps ou à distance avec votre arme",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certaines compétences, telles que la compétence <i>Attaque supplémentaire</i>, vous permettent de faire plus d'une attaque avec cette action. Chacune de ces attaques est un jet séparé et peut cibler différentes créatures. Vous pouvez vous déplacer entre ces attaques.",
             "Lorsque vous attaquez avec une arme de mêlée légère, vous pouvez utiliser une action bonus pour attaquer avec votre autre main (voir l'action bonus <i>Attaque seconde main</i>).",
             "Vous pouvez remplacer l'une de vos attaques de mêlée par <i>Empoigner</i> ou <i>Bousculer</i>.",
             "Certaines conditions donnent un avantage à l'attaque : attaques contre des cibles aveuglées, paralysées, pétrifiées, entravées, étourdies ou inconscientes ; attaques de mêlée contre des cibles à terre ; attaques d'attaquants invisibles ou cachés.",
             "Certaines conditions donnent un désavantage à l'attaque : attaques contre des cibles invisibles ou cachées ; attaques à distance contre des cibles couchées ; attaques par des attaquants aveuglés, effrayés, empoisonnés ou retenus."
        ]
    },
    {
        title: "Jeter un sort",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation de 1 action",
        description: "Lancer un sort avec un temps d'incantation de 1 actionn",
        reference: "PHB, pg. 192.",
        bullets: [
          "Vous ne pouvez pas lancer un sort avec votre action et un sort différent avec votre action bonus dans le même tour, sauf si l'action est utilisée pour lancer un sort mineur (niveau 0).",
             "La cible d'un sort doit être dans la portée du sort. Pour cibler quelque chose, vous devez avoir un chemin clair vers lui, donc il ne peut pas être derrière une couverture totale.",
             "Les sorts avec des composants matériels ne consomment pas le matériel sauf indication explicite. À moins que le coût d'un matériel ne soit donné, vous pouvez supposer que le coût est négligeable et que le matériel est simplement disponible dans une pochette de composants.",
             "Certains sorts nécessitent que vous mainteniez la concentration afin de garder leur magie active. Si vous perdez la concentration, un tel sort prend fin. Vous perdez la concentration sur un sort si vous lancez un autre sort qui nécessite de la concentration ou lorsque vous êtes <i>incapable d'agir</i>. Chaque fois que vous prenez dégâts, vous devez effectuer un jet de sauvegarde de Constitution pour maintenir votre concentration. Le DD est égal à 10 ou à la moitié des dégâts que vous subissez, selon le nombre le plus élevé."
        ]
    },
    {
        title: "Foncer",
        icon: "sprint",
        subtitle: "Double vitesse de déplacement",
        description: "Gagnez du mouvement supplémentaire pour le tour en cours",
        reference: "PHB, pg. 192.",
        bullets: [
            "L'augmentation est égale à votre vitesse, après application des modificateurs."
        ]
    },
    {
        title: "Se désengager",
        icon: "journey",
        subtitle: "Évite les attaques d'opportunité",
        description: "Votre mouvement ne provoque pas d'attaques d'opportunité pour le reste du tour",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquiver",
        icon: "dodging",
        subtitle: "Améliore vos défenses",
        description: "Se concentrer entièrement sur la prévention des attaques",
        reference: "PHB, pg. 192.",
        bullets: [
          "Jusqu'au début de votre prochain tour, tout jet d'attaque effectué contre vous a un désavantage si vous pouvez voir l'attaquant, et vous faites des jets de sauvegarde de Dextérité avec un avantage.",
           "Vous perdez cet avantage si vous êtes <i>incapable d'agir</i> ou si votre vitesse tombe à 0."
        ]
    },
    {
        title: "Se libérer",
        icon: "manacles",
        subtitle: "Se libérer d'une empoignade",
        description: "Se libérer d'une empoignade",
        reference: "PHB, pg. 195.",
        bullets: [
          "Pour échapper à une empoignade, vous devez réussir un test de Force (Athlétisme) ou de Dextérité (Acrobatie) contesté par le test de Force (Athlétisme) de l'adversaire.",
           "Échapper à d'autres conditions qui vous retiennent (comme les menottes) peut nécessiter un test de Dextérité ou de Force, comme spécifié par la condition."
        ]
    },
    {
        title: "Aider",
        icon: "telepathy",
        subtitle: "Accorder l'avantage à un allié",
        description: "Confère un avantage à un allié lors d'un test de caractéristique ou d'une attaque",
        reference: "PHB, pg. 192.",
        bullets: [
          "La cible gagne un avantage lors du prochain test de caractéristique qu'elle effectue pour accomplir la tâche à laquelle vous participez.",
           "Alternativement, la cible gagne l'avantage au prochain jet d'attaque contre une créature à 1,50 mètre ou moins de vous.",
           "L'avantage dure jusqu'au début de votre prochain tour."
        ]
    },
    {
        title: "Utiliser un objet",
        icon: "swap-bag",
        subtitle: "Interagir, utiliser des capacités spéciales",
        description: "Interagissez avec un deuxième objet ou utilisez des capacités d'objet spéciales",
        reference: "PHB, pg. 193.",
        bullets: [
          "Vous pouvez interagir avec un objet gratuitement pendant votre tour (comme dégainer une arme ou ouvrir une porte). Si vous voulez interagir avec un deuxième objet, utilisez cette action.",
           "Lorsqu'un objet nécessite explicitement votre action pour son utilisation, vous effectuez également cette action."
        ]
    },
    {
        title: "Se cacher",
        icon: "hood",
        subtitle: "",
        description: "Tenter de se cacher",
        reference: "PHB, pg. 192.",
        bullets: [
          "Vous ne pouvez pas vous cacher d'une créature qui peut vous voir. Vous devez avoir une couverture totale, être dans une zone fortement obscurcie, être invisible ou bloquer la vision de l'ennemi.",
           "Si vous faites du bruit (comme crier un avertissement ou renverser un vase), vous trahissez votre position.",
           "Lorsque vous essayez de vous cacher, faites un test de Dextérité (Discrétion) et notez le résultat. Jusqu'à ce que vous soyez découvert ou que vous cessiez de vous cacher, le total de ce test est contesté par le test de Sagesse (Perception) de toute créature qui recherche activement des signes de votre présence.",
           "Une créature vous remarque même si elle ne cherche pas à moins que votre test de Discrétion ne soit supérieur à sa Perception passive.",
           "Hors combat, vous pouvez également utiliser un test de Dextérité (Discrétion) pour des actions telles que vous cacher des ennemis, passer les gardes, vous éclipser sans vous faire remarquer ou vous faufiler sur quelqu'un sans être vu ni entendu."
        ]
    },
    {
        title: "Chercher",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Consacrer votre attention à trouver quelque chose",
        reference: "PHB, pg. 193.",
        bullets: [
            "Selon la nature de votre recherche, le MJ peut vous demander de faire un jet de Sagesse (Perception) ou un jet d'Intelligence (Investigation)."
        ]
    },
    {
        title: "Se tenir prêt",
        icon: "stopwatch",
        subtitle: "Choisissez le déclencheur et l'action",
        description: "Choisissez un déclencheur et une réaction de réponse",
        reference: "PHB, pg. 193.",
        bullets: [
          "Tout d'abord, vous décidez quelle circonstance perceptible déclenchera votre réaction.",
           "Ensuite, vous choisissez l'action que vous allez entreprendre en réponse à ce déclencheur, ou vous choisissez d'augmenter votre vitesse en réponse.",
           "Lorsque le déclencheur se produit, vous pouvez soit prendre votre réaction juste après la fin du déclencheur, soit ignorer le déclencheur.",
           "Lorsque vous préparez un sort, vous le lancez normalement mais conservez son énergie, que vous libérez avec votre réaction lorsque le déclencheur se produit. Pour être préparé, un sort doit avoir un temps d'incantation de 1 action, et conserver la magie du sort nécessite concentration"
        ]
    },
    {
        title: "Utiliser une capacité de classe",
        icon: "embrassed-energy",
        subtitle: "Certaines capacités utilisent des actions",
        description: "Utiliser une capacité raciale ou de classe qui utilise une actionn",
        reference: "Voir la page de votre classe pour plus d'informations.",
        bullets: [

        ]
    },
    {
        title: "Stabiliser une créature",
        icon: "first-aid",
        subtitle: "Administrer les premiers soins",
        description: "Empêcher une créature mourante d'avoir à faire des jets de sauvegarde contre la mort",
        reference: "PHB, pg. 197.",
        bullets: [
          "Faire un jet de Sagesse (Médecine) avec DD 10",
           "En cas de réussite, la créature est stable et n'a plus besoin d'effectuer de jets de sauvegarde contre la mort",
           "Une créature stable regagne 1 point de vie après 1d4 heures"
        ]
    },
    {
        title: "Improviser",
        icon: "juggler",
        subtitle: "Toute action ne figurant pas sur cette liste",
        description: "Effectuez n'importe quelle action que vous pouvez imaginer",
        reference: "PHB, pg. 193.",
        bullets: [
            "Lorsque vous décrivez une action non détaillée ailleurs dans les règles, le MJ vous indique si cette action est possible et quel type de jet vous devez effectuer, le cas échéant, pour déterminer le succès ou l'échec."
        ]
    }
]

data_special_attack = [
  {
      title: "Empoigner",
      icon: "grab",
      subtitle: "Aggriper une créature",
      description: "Tenter d'aggriper une créature ou de lutter avec elle",
      reference: "PHB, pg. 195.",
      bullets: [
        "Vous pouvez utiliser l'action <i>Attaquer</i> pour effectuer une attaque spéciale au corps à corps, une empoignade. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
         "La cible de votre empoignade ne doit pas faire plus d'une taille de plus que vous, et elle doit être à votre portée.",
         "Avec au moins une main libre, vous tentez de saisir la cible en effectuant un test de Force (Athlétisme) contesté par le test de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible (la cible choisit la capacité à utiliser). ",
         "Si vous réussissez, vous soumettez la cible à la condition Aggripé (sa vitesse est réduite à 0).",
      ]
  },
  {
      title: "Bousculer",
      icon: "hand",
      subtitle: "Repousser une créature",
      description: "Pousser une créature, soit pour la mettre à terre, soit pour la repousser",
      reference: "PHB, pg. 195.",
      bullets: [
        "En utilisant l'action <i>Attaquer</i>, vous pouvez effectuer une attaque spéciale au corps à corps pour repousser une créature. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
         "La cible de votre poussée ne doit pas faire plus d'une taille de plus que vous, et elle doit être à votre portée.",
         "Vous faites un jet de Force (Athlétisme) contesté par le jet de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible (la cible choisit la capacité à utiliser).",
         "Si vous remportez l'oppposition, soit vous renversez la cible, soit vous la poussez à 1,50m de vous.",
         "Vous pouvez également tenter de pousser la cible à 1,50m dans un espace différent à portée (sur le côté, pas plus loin de vous), mais vous avez alors un désavantage à votre jet."
      ]
  },
  {
      title: "Distraire",
      icon: "distraction",
      subtitle: "Empêcher une créature d'utiliser sa réaction",
      description: "Empêcher une créature d'utiliser sa réaction",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Lorsque vous effectuez l'action <i>Attaquer</i>, vous pouvez effectuer une attaque spéciale au corps à corps pour distraire un ennemi. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
        "Effectuez un test de Dextérité (Escamotage) contre le test de Sagesse (Perception) d'une créature située à 1,50 mètre ou moins de vous.",
        "Si vous remportez l'opposition, la créature ne peut pas utiliser de réaction avant le début de son prochain tour.",
      ]
  },
  {
      title: "Assomer",
      icon: "knockout",
      subtitle: "Assomer une créature non attentive",
      description: "Rendre inconsciente une créature surprise, incapable d'agir ou entravée",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Une fois par tour, lorsque vous touchez une créature surprise, incapable d'agir ou entravée avec une attaque contondante, vous pouvez essayer de l'assommer.",
        "Lancez vos dégâts normalement mais au lieu de subir des dégâts, la créature doit réussir un jet de sauvegarde de Constitution contre un DD égal à 10 ou la moitié de votre jet de dégâts, selon le plus élevé, ou elle tombe <i>inconsciente</i> pendant 1 minute.",
        "La cible se réveille si elle subit des dégâts ou si une autre créature utilise une action pour la réveiller.",
        "Cette capacité n'a aucun effet sur les constructions et les morts-vivants"
      ]
  },
  {
      title: "Projeter",
      icon: "catapult",
      subtitle: "Lancer une créature aggripée",
      description: "Tenter de projeter une créature aggripée",
      reference: "Homebrew (The Warrior's Codex, pg. 87.)",
      bullets: [
        "Lorsque vous agrippez une créature, vous pouvez utiliser l'action <i>Attaquer</i> pour effectuer une attaque spéciale au corps à corps afin de projeter la créature agrippée. Si vous pouvez effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
        "Pour lancer une autre créature, vous devez réussir un test de Force (Athlétisme), le DD étant déterminé à la fois par votre taille et par la taille de l'autre créature, comme ci-dessous. Si vous réussissez, vous projetez la créature à une distance pouvant atteindre 1,5 fois votre modificateur de Force.",
        "Lorsqu'elle atterrit, la créature projetée subit 1d6 dégâts contondants pour chaque 3 mètres parcourus. Si vous lancez la créature sur une distance plus courte, elle subit des dégâts de chute comme si vous l'aviez lancée sur toute la distance.",
        "La créature projetée atterrit <i>à terre</i> à moins qu'elle ne réussisse un test de Dextérité (Acrobatie) avec un DD égal au test de Force (Athlétisme) utilisé pour la lancer, ou utilise une capacité ou un sort (comme <i>feuille morte</i>) pour atterrir en toute sécurité.",
        "<table><tr><th style='text-align:center'>Taille</th><th></th><th></th><th style='text-align:center'>DD</th></tr><tr><td style='text-align:center'>Minuscule</td><td></td><td></td><td style='text-align:center'>5</td></tr><tr><td style='text-align:center'>Petite</td><td></td><td></td><td style='text-align:center'>11</td></tr><tr><td style='text-align:center'>Moyenne</td><td></td><td></td><td style='text-align:center'>17</td></tr><tr><td style='text-align:center'>Grande</td><td></td><td></td><td style='text-align:center'>23</td></tr><tr><td style='text-align:center'>Très Grande</td><td></td><td></td><td style='text-align:center'>29</td></tr><tr><td style='text-align:center'>Gigantesque</td><td></td><td></td><td style='text-align:center'>35</td></tr></table>",
        "Plus vous êtes grand, plus il est facile de lancer d'autres créatures. L'inverse est vrai si vous êtes plus petit. Les DD pour lancer une autre créature augmentent de 5 si votre taille est Petite, et de 10 si votre taille est Minuscule. Ils diminuent de 5 si votre taille est Grande, de 10 si votre taille est Très Grande et de 15 si votre taille est Gigantesque."
      ]
  },
]

data_special_action = [
  {
      title: "Désarmer",
      icon: "drop-weapon",
      subtitle: "Tenter de désarmer une créature",
      description: "Tenter de désarmer une créature",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Par une action, vous essayez de faire tomber une arme ou un autre objet des mains d'une cible en effectuant un jet d'attaque contesté par le test de Force (Athlétisme) ou de Dextérité (Acrobates) de la cible.",
        "Si vous gagnez, l'attaque ne cause aucun dégâts ni autre effet néfaste, mais le défenseur laisse tomber l'objet, qui atterrit dans un espace inoccupé de votre choix à moins de 3m ou moins de celui-ci. Les objets portés ou attachés ne peuvent pas être désarmés.",
        "Vous avez un désavantage à votre jet d'attaque si la cible tient l'objet à deux mains ou plus. La cible a un avantage sur son test de capacité si elle est plus grande que vous, ou un désavantage si elle est plus petite."
      ]
  },
  {
      title: "Passer en force/finesse",
      icon: "thrust",
      subtitle: "Traverser l'espace d'une créature hostile",
      description: "Tenter de traverser l'espace d'une créature hostile en force ou en finesse",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Lorsque vous essayez de traverser l'espace d'une créature hostile, vous pouvez essayer de forcer le passage. Par une action ou une action bonus (votre choix), effectuez un test de Force (Athlétisme) contesté par le test de Force (Athlétisme) de la créature.",
        "Si vous gagnez, vous pouvez traverser (mais pas y terminer votre tour) l'espace de la créature hostile une fois durant ce tour.",
        "Vous avez un avantage sur votre jet si vous êtes plus grand que la créature, ou un désavantage si vous êtes plus petit.",
        "Alternativement, vous pouvez essayer d'esquiver et de contourner la créature hostile. Par une action ou une action bonus (votre choix), effectuez un test de Dextérité (Acrobaties) contesté par le test de Dextérité (Acrobaties) de la créature.",
        "Si vous gagnez, vous pouvez traverser (mais pas y terminer votre tour) l'espace de la créature hostile une fois durant ce tour. Si la cible gagne, elle peut utiliser sa réaction pour tenter de vous repousser ou de vous renverser."
      ]
  },
  {
      title: "Retenir",
      icon: "padlock",
      subtitle: "Immobiliser complètement une cible déjà aggripée",
      description: "Immobiliser complètement une cible déjà aggripée",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Lorsque vous agrippez une cible de votre taille ou plus petite, vous pouvez essayer de l'immobiliser avec une main libre supplémentaire. En tant qu'action spéciale au corps à corps, effectuez un autre test d'empoignage.",
        "Si vous gagnez, vous et la cible êtes entravés jusqu'à ce que l'empoignade soit brisée et vous pouvez choisir l'un des effets supplémentaires suivants :<ul><li>Vous manœuvrez vers le côté ou l'arrière de la cible. Tant qu'elle est entravée, la créature ne peut pas vous attaquer.</li><li>Vous épinglez les mains et les bras de la cible. Tant qu'elle est entravée, la créature ne peut pas lancer de sort avec une composante somatique ou matérielle, dégainer ou attaquer avec une arme non légère, ou effectuer l'action Utiliser un objet.</li><li>Vous couvrez la bouche de la cible et étouffez sa voix. Tant qu'elle est retenue, la créature ne peut pas être entendue clairement au-delà de 4,5m, ou du tout au-delà de 9 mètres. Si la créature tente de lancer un sort à composante verbale, elle doit réussir un jet de sauvegarde de Dextérité contre un DD de 8 + votre modificateur de Force ou le sort échoue mais l'emplacement de sort n'est pas perdu. Une créature plus petite que vous a un désavantage à ce jet de sauvegarde.</li></ul>",
        "Une créature ne peut être soumise qu'à un seul de ces effets par chaque créature qui l'agrippe."
      ]
  },
  {
      title: "Roquer",
      icon: "body-swapping",
      subtitle: "Échanger de position avec une créature consentante",
      subtitle: "Échanger de position avec une créature consentante",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Par une action, vous pouvez vous déplacer dans l'espace d'une créature consentante à 1,50 mètre ou moins de vous, déplaçant la créature dans l'espace que vous occupiez auparavant.",
        "Vous devez tous les deux tenir dans l'espace disponible.",
        "Ni vous ni la cible ne provoquez d'attaques d'opportunité pour ce mouvement."
      ]
  },
  {
      title: "Coup de grâce",
      icon: "grim-reaper",
      subtitle: "Achever un ennemi en vous exposant",
      description: "Achever un ennemi en vous exposant à des attaques d'opportunité",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Par une action, vous essayez d'achever un adversaire inconscient, paralysé ou autrement rendu incapable d'agir et d'utiliser un mouvement (l'état <i>incapable d'agir</i> n'est pas suffisant).",
        "Vous infligez un coup critique automatique avec une attaque de mêlée (aucun jet d'attaque n'est nécessaire).",
        "Si la créature survit aux dégâts, elle doit réussir un jet de sauvegarde de Constitution contre un DD égal à 10 ou à la moitié des dégâts infligés, selon le plus élevé. En cas d'échec, il meurt.",
        "Un roublard inflige des dégâts d'attaque sournoise lorsqu'il porte un coup de grâce.",
        "Délivrer un coup de grâce provoque des attaques d'opportunité des créatures à 1,50 mètre ou moins de vous et réduit votre vitesse à 0 jusqu'à la fin du tour."
      ]
  },
]
