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
        title: "Empoigner",
        icon: "grab",
        subtitle: "Attaque spéciale au corps à corps",
        description: "Tenter d'attraper une créature ou de lutter avec elle",
        reference: "PHB, pg. 195.",
        bullets: [
          "Vous pouvez utiliser l'action <i>Attaquer</i> pour effectuer une attaque spéciale au corps à corps, une empoignade. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
           "La cible de votre empoignade ne doit pas faire plus d'une taille de plus que vous, et elle doit être à votre portée.",
           "Avec au moins une main libre, vous tentez de saisir la cible en effectuant un test de Force (Athlétisme) contesté par le test de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible (la cible choisit la capacité à utiliser). ",
           "Si vous réussissez, vous soumettez la cible à la condition Aggripé (sa vitesse est réduite à 0)."
        ]
    },
    {
        title: "Bousculer",
        icon: "hand",
        subtitle: "Attaque spéciale au corps à corps",
        description: "Poussez une créature, soit pour la mettre à terre, soit pour la repousser",
        reference: "PHB, pg. 195.",
        bullets: [
          "En utilisant l'action <i>Attaquer</i>, vous pouvez effectuer une attaque spéciale au corps à corps pour repousser une créature. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
           "La cible de votre poussée ne doit pas être plus grande d'une taille que vous et elle doit être à votre portée.",
           "Vous faites un jet de Force (Athlétisme) contesté par le jet de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible (la cible choisit la capacité à utiliser).",
           "Si vous remportez l'oppposition, soit vous renversez la cible, soit vous la poussez à 1,50m de vous."
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
        title: "Sprinter",
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
        icon: "aura",
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
        icon: "snatch",
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
        description: "Consacrez votre attention à trouver quelque chose",
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
