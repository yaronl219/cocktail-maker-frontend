export interface Cocktail {

}

export interface CocktailMinified {
    strDrink: string,
    _id: string,
    strDrinkThumb: string,
    strAlcoholic: string,
    strCategory: string
}

export interface Filters {
    glass: [],
    ingredients: [],
    category: []
}

export interface subFilters {
    header :string,
    checkedFilters: []
  }