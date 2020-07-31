class SportsGame extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            playerOneScore: 0,
            playerTwoScore: 0,

            winner: 0,
            loser: 0
        }
    }

playerOneInput = (event) => {
    this.setState({playerOneScore: event.target.value}) 
}

playerTwoInput = (event) => {
    this.setState({playerOneScore: event.target.value}) 
}

handlePlayerOneShot = (event) => { console.log("Do something" + this.state.playerOneScore) 
 this.setState((state, props) => ({

     answer: Number(state.playerOneScore)}))}
 
}