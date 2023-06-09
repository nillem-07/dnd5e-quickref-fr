data_environment_obscurance = [
    {
        title: "Légèrement obscurci",
        icon: "bleeding-eye",
        subtitle: "Désavantage sur la perception",
        description: "Lumière tamisée, brouillard épars, feuillage modéré",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures ont un <b>désavantage sur les jets de Sagesse (Perception)</b> qui dépendent de la vue"
        ]
    },
    {
        title: "Très obscurci",
        icon: "lightning-tear",
        subtitle: "Aveuglant",
        description: "Obscurité, brouillard opaque, feuillage dense",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une créature dans une zone fortement obscurcie souffre de la <b>condition Aveuglé</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Lumière vive",
        icon: "star-pupil",
        subtitle: "Vision normale",
        description: "La lumière vive permet à la plupart des créatures de voir normalement",
        reference: "PHB, pg. 183.",
        bullets: [
            "Même les jours sombres fournissent une lumière vive, tout comme les torches, les lanternes, les feux et autres sources d'éclairage dans un rayon spécifique."
        ]
    },
    {
        title: "Lumière faible",
        icon: "semi-closed-eye",
        subtitle: "Légèrement obscurci",
        description: "Lumière faible, également appelée ombres",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone <b>légèrement obscurcie</b>.",
            "Une zone de faible lumière est généralement une frontière entre une source de lumière vive, telle qu'une torche, et l'obscurité environnante.",
            "La douce lumière du crépuscule et de l'aube compte également comme une faible lumière. Une pleine lune particulièrement brillante pourrait baigner la terre dans une lumière faible."
        ]
    },
    {
        title: "Ténèbre",
        icon: "worried-eyes",
        subtitle: "Très obscurci",
        description: "L'obscurité crée une zone fortement obscurcie",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone <b>fortement obscurcie</b>.",
            "Les personnages font face à l'obscurité à l'extérieur la nuit (même la plupart des nuits éclairées par la lune), dans les confins d'un donjon non éclairé ou d'un caveau souterrain, ou dans une zone d'obscurité magique."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vision aveugle",
        icon: "one-eyed",
        subtitle: "Percevoir sans voir",
        description: "Percevez votre environnement sans vous fier à la vue, dans un certain rayon",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures sans yeux, comme les vases, et les créatures avec une écholocation ou des sens accrus, comme les chauves-souris et les vrais dragons, ont ce sens."
        ]
    },
    {
        title: "Vision dans le noir",
        icon: "semi-closed-eye",
        subtitle: "Vision limitée dans l'obscurité",
        description: "Une créature avec la vision dans le noir peut mieux voir dans l'obscurité ou dans des conditions de faible luminosité, dans un certain rayon",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Dans une plage spécifiée, une créature dotée de la vision dans le noir peut <b>voir dans l'obscurité comme si l'obscurité était une lumière faible</b>, de sorte que les zones d'obscurité ne sont que légèrement obscurcies en ce qui concerne cette créature.",
            "Cependant, la créature ne peut pas discerner la couleur dans l'obscurité, seulement des nuances de gris.",
            "De nombreuses créatures dans les mondes de D&D, en particulier celles qui vivent sous terre, ont une vision dans le noir."
        ]
    },
    {
        title: "Vision véritable",
        icon: "eye-shield",
        subtitle: "Vision dans les tébères",
        description: "Une créature avec une vision véritable peut tout voir sous sa vraie forme, indépendamment de l'environnement",
        reference: "PHB, pg. 184.",
        bullets: [
            "Une créature avec la vision véritable peut, à une distance spécifique, voir dans l'obscurité normale et magique, voir des créatures et des objets invisibles, détecter automatiquement des illusions visuelles et réussir des jets de sauvegarde contre elles, et percevoir la forme originale d'un métamorphe ou d'une créature qui est transformé par magie.",
            "De plus, la créature peut voir dans le plan éthéré."
        ]
    }
]

data_environment_cover = [
    {
        title: "Abri partiel",
        icon: "broken-shield",
        subtitle: "Muret, mobilier, créatures",
        description: "Une cible bénéficie d'un abri partiel si un obstacle bloque au moins la moitié de son corps",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'obstacle peut être un muret, un gros meuble, un tronc d'arbre étroit ou une créature, que cette créature soit un ennemi ou un ami.",
            "Une cible à moitié couverte bénéficie d'un <b>bonus de +2 à la CA et aux jets de sauvegarde de Dextérité</b>.",
            "Si une cible se trouve derrière plusieurs sources de couverture, seul le degré de couverture le plus protecteur s'applique."
        ]
    },
    {
        title: "Abri important",
        icon: "cracked-shield",
        subtitle: "Herse, meurtrière",
        description: "Une cible bénéficie d'un abri important si environ les trois quarts de celle-ci sont couverts par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'obstacle peut être une herse, une meurtrière ou un gros tronc d'arbre.",
            "Une cible ayant un abri important bénéficie d'un <b>bonus de +5 à la CA et aux jets de sauvegarde de Dextérité</b>.",
            "Si une cible se trouve derrière plusieurs sources de couverture, seul le degré de couverture le plus protecteur s'applique."
        ]
    },
    {
        title: "Abri total",
        icon: "shield",
        subtitle: "Complètement dissimulé",
        description: "Une cible a un abri total si elle est complètement cachée par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Une cible avec un abri total <b>ne peut pas être ciblée directement</b> par une attaque ou un sort, bien que certains sorts puissent atteindre une telle cible en l'incluant dans une zone d'effet.",
            "Si une cible se trouve derrière plusieurs sources de couverture, seul le degré de couverture le plus protecteur s'applique."
        ]
    }
]
