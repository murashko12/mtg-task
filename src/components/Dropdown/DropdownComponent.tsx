import { Component } from 'react'

interface Option {
    id: number;
    label: string;
}
  
interface DropdownMenuProps {
    options: Option[];
}
  
interface DropdownMenuState {
    isOpen: boolean;
    selectedOption: Option | null;
}
  

export default class DropdownComponent extends Component<DropdownMenuProps, DropdownMenuState> {

    constructor(props: DropdownMenuProps) {
        super(props);
        this.state = {
            isOpen: false,
            selectedOption: null
        }
    }
    
    toggleDropdown = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    
    handleOptionSelect = (option: Option) => {
        this.setState({
            selectedOption: option,
            isOpen: false
        })
    }
    

    render() {
        const { options } = this.props;
        const { isOpen, selectedOption } = this.state;

        return (
            <div>
                <button onClick={this.toggleDropdown}>Выбрать</button>
                {isOpen && (
                    <ul>
                        {options.map(option => (
                            <li key={option.id} onClick={() => this.handleOptionSelect(option)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
                {selectedOption && <p>Выбрано: {selectedOption.label}</p>}
            </div>
        )
    }
}
