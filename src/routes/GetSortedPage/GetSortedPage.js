import React from 'react';
import AppContext from '../../contexts/context'
import Header from '../../components/Header/Header'
import NavBar from '../../components/Nav/NavBar'


export default class RandomizeHouse extends React.Component {
    state = {
        house: ''
    }

    static contextType = AppContext

    handleRandomizeHouse = (e) => {
        const hogwartsHouses = [
            'Gryffindor',
            'Hufflepuff',
            'Ravenclaw',
            'Slytherin'
        ];
        const house = hogwartsHouses[
            Math.floor(Math.random()*hogwartsHouses.length)]
        this.setState({
            house: house
        })

    }

    render() {
        if (this.state.house) {
        return(<p>Welcome to house {this.state.house}</p>)
        }
        return (
            <div>
                <Header />
                <NavBar />
                <button type="button" onClick={(e) => this.handleRandomizeHouse(e)}>GET SORTED!</button>
            </div>
        )
        
    }
}


