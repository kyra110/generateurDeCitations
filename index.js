// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi","Éclat"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg","Émerveillement"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan","Créativité"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi","Illumination"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain","Exploration"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot","Révélation"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais","Envolée"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain","Passion"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy","Renaissance"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum","Liberté"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher","Imaginaire"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick","Énergie"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson","Réflexion"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso","Rêve"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill","Épanouissement"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki","Perspective"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar","Transcendance"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy","Harmonie"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt","Éveil"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis","Transformation"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill","Enchantement"]
];
let citation = document.querySelector('.citation');
let auteur   = document.querySelector('.auteur');
let bouton   = document.querySelector('button');
let h3       = document.querySelector('h3')   ;




bouton.addEventListener('click',()=>{
   let nombreAleatoire=  Math.floor(Math.random() * citations.length);
   citation.innerHTML=citations[nombreAleatoire][0];
   auteur.innerHTML=citations[nombreAleatoire][1];
   h3.innerHTML=citations[nombreAleatoire][2];
   
    
}) ;