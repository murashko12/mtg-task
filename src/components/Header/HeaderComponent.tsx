import { Component } from 'react'
import styles from "./HeaderComponent.module.css"
import WatchComponent from '../Watch/WatchComponent'
import DropdownComponent from '../Dropdown/DropdownComponent'
// import Dropdown from '../Dropdown/DropdownComponent'
export default class HeaderComponent extends Component {
    render() {
        return (
            <header className={styles.headerContainer}>
                <img src="/src/assets/mtgLogo.png" alt="MTG. логотип" height={40} />
                <WatchComponent/>
                <DropdownComponent 
                    options={[
                        {
                            id: 1,
                            label: "ru"
                        },
                        {
                            id: 2,
                            label: "en"
                        }
                    ]} 
                />
            </header>
        )
    }
}
