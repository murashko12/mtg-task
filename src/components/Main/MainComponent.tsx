import { Component } from 'react'
import styles from "./MainComponent.module.css"
import ClientCardComponent from '../ClientCard/ClientCardComponent'
import data from '../../data/data.json'

export default class MainComponent extends Component {
    render() {

        const CLIENTS_RU: string[] = Object.keys(data.ru)
        // const CLIENTS_EN = Object.keys(data.en)
        
        return (
            <main className={styles.mainContainer}>
                {
                    CLIENTS_RU.map((client) => (
                        <ClientCardComponent 
                            key={CLIENTS_RU.indexOf(client)}
                            name={data.ru[client].name}
                            review={data.ru[client].review}
                            date={data.ru[client].date}
                        />
                    ))
                }            
            </main>
        )
    }
}
