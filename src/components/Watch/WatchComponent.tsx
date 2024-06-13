import { Component } from 'react'
import { TWatchState } from '../../Types/TWatchState';
import styles from "./WatchComponent.module.css"


export default class WatchComponent extends Component<object, TWatchState> {
    
    tick() {
        this.setState({
             time: new Date()
        });
    }

    componentWillMount() {
        this.tick();
    }
  
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }
  
    render() {
        return (
            <span className={styles.watchContainer}>
                {this.state.time.toLocaleTimeString()}
            </span>
        )
    }
}
    