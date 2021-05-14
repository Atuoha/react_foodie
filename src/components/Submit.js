import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { Form } from 'react-bootstrap'
import Ingredient from './Ingredient'

const CLOUDINARY_UPLOAD_PRESET = 'b3pggsfv'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/AXK1GHyGfXrFK8vayCbDB55ADNo/upload'

class Submit extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipes:JSON.parse(localStorage.getItem('recipes')) || [],
            recipe:{
                name: '',
                description: '',
                ingredients: []
            },
            uploadedFileCloudinaryUrl: ''
        }
        this.submitRecipe = this.submitRecipe.bind(this)
        this.onImageDrop  = this.onImageDrop.bind(this)
    }

    addIngredient(quantity, ingredient){      
        // pushing quantity and ingredient to ingredients array in recipe state
        let recipe = this.state.recipe
        recipe.ingredients.push({quantity, ingredient})
        this.setState({recipe})
    }

    submitRecipe(){

        // collecting inputs
        let name = this.name.value
        let description = this.description.value

        // add a single recipe to state
        let recipe = this.state.recipe
        recipe.name = name
        recipe.description = description
        this.setState({recipe})

        // pushing single recipe to recipes array
        let recipes = this.state.recipes

        // creating a object that will contain the current data from the state
        let data = {
            name: this.state.recipe.name,
            description: this.state.recipe.description,
            ingredients: this.state.recipe.ingredients,
            image: this.state.uploadedFileCloudinaryUrl
        }

        // pushing the object in the recipes state array
        recipes.push(data)
        this.setState({recipes})
        
        // storing it using local storage
        localStorage.setItem('recipes', JSON.stringify(recipes));

        // clearing inputs
        this.name.value = ""
        this.description.value = ""
        console.log(recipes)

        // clearing states
        recipe.ingredients = []

        // go back to index page
        this.props.history.push('/')


    }

    onImageDrop(files){
        this.setState({
            uploadedFile: files[0]
        })

        this.handleImageUpload(files[0])
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1 className="lead">Add Recipe</h1>
                    <p className="small">...dropping the best ones for last with intentions brighter than clearer visions</p>
                </div>

               <Form method="post">
                   <div className="row">
                        <div className="form-group col-md-4">
                               <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop} >
                                <p>Drop an image to reprent the recipe to be added</p>
                               </Dropzone>  

                                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                    <div>
                                        <p>{this.state.uploadedFile.name}</p>
                                        <img src={this.state.uploadedFileCloudinaryUrl} alt={this.state.uploadedFile.name} />
                                    </div>
                                }
                        </div> 


                        <div className="form-group col-md-8">
                            <label><i className="fa fa-sticky-note"></i> <b>Recipe Name: </b></label>    
                            <input ref={(input) =>{this.name = input;}} id="name" type="text" placeholder="Recipe Name" required autoFocus className="form-control" />
                        </div>


                        <div className="form-group col-md-12">
                            <label><i className="fa fa-paragraph"></i> <b>Recipe Description: </b></label>   
                            <textarea type="text" ref={(input) => {this.description = input}} id="description" placeholder="Recipe Description" required className="form-control" cols="3" rows="3" />
                        </div>
                    </div>    
                    
                     {/* Child component with an available_ingredients props and addIngredient function */}
                    <Ingredient available_ingredients={this.state.recipe.ingredients} addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)} } /> {/* Ingredient Component that has quantity and Ingredient elements */}

                    <button type="button" className="btn btn-primary" onClick={this.submitRecipe}><i className="fa fa-send"></i> Add Recipe</button>
                       
                </Form> 
            </div>
        )
    }
}

export default Submit



