# Deuxième projet react

//notions:
//Passage de valeurs entre composants à l'aide de 'props', qui sont les arguments de composants
//A state is private to a component that defines it,
//setter permettent de dire a react que le state d'un composant a change et donc le reafficher
// props Square:
// {null} value
// {event} onSquareClick   //les deux sont des props
// i : index de la case
// la fonction fléchee (fonction() => ) évite les boucles infinies et va associer une fonction a notre evenement et evite de créer une fonction pour chaque index
// toutes les données sont gérées par Board
//par convention on met en argument (props) les evenements avec onSomething et les fonctions
// qui gèrent ces evenements avec handleSomething
// pour gérer les tours, on attribue une valeur true au X qui va changer alternativement a
// chaque fois qu'on va clicker et donc changer la valeur a 'O'
