import React, { Component } from 'react'
import IngredientList from './IngredientList'

class Ingredient extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
        this.addIngredient = this.addIngredient.bind(this)
    }

    addIngredient(){
        // collecting inputs
        let quantity = this.quantity.value
        let ingredient = this.ingredient.value 
        
        // passing the collected input to the parent function
        this.props.addIngredient(quantity, ingredient)

        // clearing inputs
        this.quantity.value = '';
        this.ingredient.value = ''
    }

    render(){
        return(
            <div className="row">
                <div className="form-group col-md-6">
                    <label><i className="fa fa-sort-numeric-asc"></i> <b>Ingredient Quantity: </b></label>    
                    <input ref={(input) => {this.quantity = input}} id="quantity" type="text" placeholder="Recipe Quantity " required className="form-control" />
                </div>

                <div className=" form-group col-md-6">
                    <label><i className="fa fa-thumb-tack"></i> <b>Recipe Ingredient: </b></label>    
                    <input type="text" id="ingredient" ref={(input) => {this.ingredient = input}} placeholder="Recipe Ingredient" required className="form-control"></input>
                    <button type="button" onClick={this.addIngredient} className="btn btn-primary"><i className="fa fa-plus"></i> Add Ingredient</button>
                </div>

                    {/* Child component with an available_ingredients props */}
                    <IngredientList available_ingredients={this.props.available_ingredients} />
                
            </div>
          
        )
    }
}

export default Ingredient