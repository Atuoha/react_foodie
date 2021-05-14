import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

class Body extends Component{

    constructor(props){
        super(props)
        this.state = {
                            // obtaining the data stored in localStorage 
            recipes_content: JSON.parse(localStorage.getItem('recipes')) || []
        }

    }

  

    render(){
        return(
            <div className="container">
                <div className="row">

                {this.state.recipes_content.map((recipe, i) =>  
                        <div className="col-md-4 mt-2">
                            <Card className="card_element">
                                <Card.Img variant="top " src={recipe.image} style={{ maxHeight: '170px', minHeight: '170px' }}  />
                                <Card.Body>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>
                                        <p>{recipe.description}</p>
                                        <b><i className="fa fa-check-circle"></i> Recipes:</b>
                                            <p>
                                                {recipe.ingredients.map(item=>
                                                    <span>
                                                    {item.quantity} {item.ingredient} ,
                                                    </span>
                                                )}   
                                            </p> 
                                    </Card.Text>
                                    <a className="btn btn-secondary" href={`/single/${i}`} rel="noreferrer" target="_blank">View More <i className="fa fa-caret-right"></i></a>
                                </Card.Body>
                            </Card>
                        </div>
    
                )}
                          
                </div>
            </div>
        )
    }
}


export default Body