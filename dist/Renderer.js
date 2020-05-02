class Renderer{
    constructor(){

    }
    renderData(newRecipes){
        console.log(newRecipes)
        const source = $("#recipe-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({recipe: newRecipes})
        $("#recipe-container").append(someHTML)
    }
}