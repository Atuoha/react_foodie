import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class IngredientList extends Component{
    render(){
        return(
            <div className="col-md-5 col-sm-12">
                <Table className="table table-striped">
                    <caption>Available Ingredients</caption>
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Ingredient</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.available_ingredients.map((item, i)=>{
                            return(
                                <tr>
                                    <td key={i}>{item.quantity}</td>
                                    <td key={item.ingredient}>{item.ingredient}</td>
                                </tr>
                            )
                        })}

                            
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default IngredientList