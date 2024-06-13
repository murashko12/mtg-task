import { Component, ReactNode } from 'react'
import { TClient } from '../../Types/TClient'
import styles from "./ClientCardComponent.module.css"

export default class ClientCardComponent extends Component<TClient> {
    render(): ReactNode {
        return (
            <div className={styles.clientCardContainer}>
                <p>{this.props.name}</p>
                <p>{this.props.review}</p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}
