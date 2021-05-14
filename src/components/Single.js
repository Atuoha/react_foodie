import React, { Component } from 'react'


class Single extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                   <div className="col-md-8 mx-auto mt-2">
                    <div className="row">
                        <div className="col-md-6">
                            <img variant="top" alt="imagery" className="img-thumbnail" src="images/f.jpg" style={{ maxHeight: '200px', minHeight: '200px' }}  />
                        </div>

                        <div className="col-md-6">
                            <h1><b>Creamy Silk</b></h1>
                            <p className="small">Creamy silk known for it's taste, aroma and beauty....</p>

                            <b><i className="fa fa-check-circle"></i> Recipes:</b>
                            <p> 
                                2 Full Cup of Water, half kilo of butter, full bag of undiluted milk
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti non labore eveniet officiis, nostrum consectetur provident? Unde tenetur, accusamus consequuntur corporis dolor saepe beatae facilis repellat inventore? Error, non.      
                            </p> 
                            <a className="btn btn-danger" href="#d" rel="noreferrer" target="_blank" style={{ marginRight: '2px' }}>Delete Recipe <i className="fa fa-remove"></i></a>

                            <a className="btn btn-secondary" href="#d" rel="noreferrer" target="_blank">Edit Recipe <i className="fa fa-pencil"></i></a>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Single