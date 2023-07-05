import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
//import { createRoot } from 'react-dom/client';



class App extends React.Component {

    // constructor(props) {
    //     super(props);
        
    //     //this is the only time we do direct assigment
    //     this.state ={lat: null , errorMessage: ''} ; // this is a state object that has the properties relevent to us that is used here 
        
    //     // another way to initialize state methods.

    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     position => {
    //     //         // we call setState
                
    //     //         // never do direct assigment while changing or updating state
    //     //         // like this.state.lat = position.coords.latitude NEVER! 
                
    //     //         //this is the best practice
    //     //         this.setState({ lat: position.coords.latitude }); // this does not run when a constuctor is called. it runs at some point in time in the future.3
    //     //     }, // when it is a success
    //     //     err => //console.log(err) 
    //     //     {
    //     //         this.setState({ errorMessage: err.message});
    //     //     }  
    //     // );       
    // }

    // Instead of this constructor we can write
    state = {lat: null, errorMessage :''};

    // componentDidMount(){
    //     console.log('My component was rendered to the screen');
    // } 

    // componentDidUpdate(){
    //     console.log('My component was just updated - it re-rendered');
    // }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition( // built-in function to find position
            position => this.setState({ lat: position.coords.latitude }), 
            err => this.setState({ errorMessage: err.message})
        );  
    } 

    // this is called a helper method
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error : {this.state.errorMessage} </div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            //return <div>Latitude: {this.state.lat} </div>;
            return <SeasonDisplay lat ={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>; // replacein with a new component spinner instead of just Loading!
    
    }

    // React says we have to define render!!
    render() { // render to just return jsx
        // return <div>
        //     Latitude: {this.state.lat}
        //     <br/>
        //     Error: {this.state.errorMessage}
        //     </div>;

        //now doing conditional rendering
    //     if(this.state.errorMessage && !this.state.lat){
    //         return <div>Error : {this.state.errorMessage} </div>;
    //     }

    //     if(!this.state.errorMessage && this.state.lat){
    //         //return <div>Latitude: {this.state.lat} </div>;
    //         return <SeasonDisplay lat ={this.state.lat} />
    //     }

    //     return <Spinner message="Please accept location request"/>; // replacein with a new component spinner instead of just Loading!
    // }

    return(
        <div className="border red">
            {this.renderContent()}
        </div>
    );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);