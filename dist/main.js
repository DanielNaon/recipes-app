function getIngredient(){
    let ingredient = $('input').val()
    console.log(ingredient)
    $.get(`/recipes/${ingredient}`, function(data){
        console.log(JSON.parse(data).results)
       let results = JSON.parse(data).results
        let newRecipes = results.map(r=>{return {title: r.title, img: r.thumbnail, href: r.href, ingredients: r.ingredients}})
        console.log(newRecipes)
        let renderer = new Renderer()
        renderer.renderData(newRecipes)
    })
}