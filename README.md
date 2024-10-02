# form-validation-front

## EN ![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom")

Frontend form validation project using JavaScript to ensure user input accuracy and enhance user experience. This project includes various validation techniques, such as checking for required fields, correct data formats, and input length constraints

## FR ![France](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/fr.png "France")

Projet de validation de formulaires côté frontend utilisant JavaScript pour garantir l'exactitude des saisies utilisateur et améliorer l'expérience utilisateur. Ce projet inclut diverses techniques de validation, telles que la vérification des champs obligatoires, des formats de données corrects et des contraintes de longueur des saisies.

```javascript
const formData = {
	firstName: null,
	lastName: null,
	email: null,
}

first_name.addEventListener("input", (e) => {
	// console.log(e.target.value)
	formData.firstName = e.target.value
	// console.log(formData)
})
```

## Explanation ![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom")

- Initialization of formData object:

  - An object `formData` is created with properties: `firstName`, `lastName`, and `email`, all initially set to `null`

- Event listener for `first_name` input:

  - An event listener is added to an element with the ID first_name to listen for "input" events (user typing in the input field).
  - Whenever a user types in the first_name input field, the function is triggered, updating formData.firstName with the current value of the input (e.target.value).

- Code in action:

  - This allows the `formData` object to dynamically store the latest value entered into the `first_name` input field.

## Explication ![France](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/fr.png "France")

- Initialisation de l'objet formData :

  - Un objet formData est créé avec les propriétés : firstName, lastName et email, toutes initialisées à null.

- Écouteur d'événement pour l'entrée `first_name` :

  - Un écouteur d'événement est ajouté à un élément avec l'ID `first_name` pour écouter les événements "input" (saisie de l'utilisateur dans le champ de texte).

  - Chaque fois que l'utilisateur saisit quelque chose dans le champ `first_name`, la fonction est déclenchée et met à jour `formData.firstName` avec la valeur actuelle de l'entrée (e.target.value).

- Fonctionnement du code :

  - Cela permet à l'objet `formData` de stocker dynamiquement la dernière valeur entrée dans le champ de saisie `first_name`.
