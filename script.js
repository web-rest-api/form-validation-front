// user's data
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

last_name.addEventListener("input", (e) => {
	formData.lastName = e.target.value
	console.log(formData)
})

email.addEventListener("input", (e) => {
	formData.email = e.target.value
})

mon_form.addEventListener("submit", (e) => {
	e.preventDefault()
	//const dataSend = new formData()
	console.log(formData)
	// ajouter de validation
	// IF EMPTY
	if (!formData.firstName) {
		error_name.style.display = "block"
		first_name.classList.add("error")
		return (error_name.innerText = "ça c'est vide !!!")
	}
})
