const tagListSearch = (e, ul, inputField) => {
    if (e.key == 8 && searchTagListFromInput !== []) {
        searchTagListFromInput.pop()
    } else if (e.key == 8 && searchTagListFromInput == []) {
        console.log('Afficheles bon ingrédients MERDE !')
    }
    if (e.key >= 65 && e.key <= 90)
        var buffer;
    buffer = inputField.value
    searchTagListFromInput.push(buffer)
        // console.log(searchTagListFromInput);
    var final_words = []
    final_words.push(searchTagListFromInput[searchTagListFromInput.length - 1]);
    console.log(final_words)
    let newArrayIngredients = [];
    let newArrayUstensils = [];
    let newArrayAppareils = [];
    let parentInput = ul.closest('div').id
    let idDiv = parentInput.replace('sub-search__', '');



    if (buffer.length >= 3) {
        switch (idDiv) {
            case "Ingrédient":
                for (let i = 0; final_words.length > i; i++) {
                    let searchTagIngredient = uniqueIngredientsClone.filter(ingredient => ingredient.toLocaleLowerCase().includes(final_words[i].toLocaleLowerCase()))


                    // newArrayIngredients = [...new Set(searchTagIngredient)];
                    cleanTagListDOM(idDiv)
                    newArrayIngredients = [...new Set(searchTagIngredient.map(element => {
                        return element.toLowerCase();
                    }))]

                    // console.log(newArrayIngredients, 'newArrayIngredients')
                }
                // console.log("New Array from ingredient:", newArrayIngredients)

                buildTagArrayDOM(inputField, newArrayIngredients, idDiv)

                break;
            case "Appareils":

                for (let j = 0; final_words.length > j; j++) {

                    let searchTagAppareils = uniqueAppliancesClone.filter(appliance => appliance.toLocaleLowerCase().includes(final_words[j].toLocaleLowerCase()))
                    newArrayAppareils = [...new Set(searchTagAppareils)];
                    cleanTagListDOM(idDiv)

                    newArrayAppareils = [...new Set(newArrayAppareils.map(element => {
                        return element.toLowerCase();
                    }))]
                }

                buildTagArrayDOM(inputField, newArrayAppareils, idDiv)

                // console.log("New Array from appareils :", newArrayAppareils)
                break;
            case "Ustensiles":
                for (let k = 0; final_words.length > k; k++) {
                    let searchTagUstensils = uniqueUstensilesClone.filter(ustensil => ustensil.toLocaleLowerCase().includes(final_words[k].toLocaleLowerCase()))
                    newArrayUstensils = [...new Set(searchTagUstensils)];
                    // console.log("Search trought ingredients", searchTagIngredient)
                    cleanTagListDOM(idDiv)
                    newArrayUstensils = [...new Set(newArrayUstensils.map(element => {
                        return element.toLowerCase();
                    }))]
                }

                buildTagArrayDOM(inputField, newArrayUstensils, idDiv)

                // console.log("New Array from ustensils:", newArrayUstensils)
                break;

        }
        // console.log(buffer)
        if (buffer == "Ingrédient" || buffer == 'Appareils' || buffer == 'Ustensiles' && searchTagListFromInput == []) {
            // toggleList(ul, filterArrow, false);

        } else {
            // toggleList(ul, filterArrow, true);

        }

    } else {
        // toggleList(ul, filterArrow, false)
        cleanTagListDOM(idDiv)

        switch (idDiv) {

            case "Ingrédient":
                // uniqueIngredients = [...new Set(uniqueIngredients.map(element => {
                //     return element.toLowerCase();
                // }))]
                buildTagArrayDOM(inputField, uniqueIngredients, idDiv)
                break;
            case "Appareils":
                buildTagArrayDOM(inputField, uniqueAppliancesClone, idDiv)
                break;

            case "Ustensiles":
                buildTagArrayDOM(inputField, uniqueUstensilesClone, idDiv)


        }

    }
}