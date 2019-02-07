import React from 'react'

class Greet extends React.Component{
    constructor(props){
        super(props)
        this.state = {names: '', message: ''};
        this.onLanguageSelect.bind(this)
    }

    greet(name, language){
        console.log(name + language)
        switch(language){
            case 'English':             
                return 'Good Morning ' + name
                break
            case 'French': 
                return 'Bonjour ' + name
                break;
            default: return 'Please select a language ' + name
        }
    }

    onLanguageSelect(value){
        let names = this.state.names;
        let arrNames = names.split("\n");
        console.log(arrNames)
        this.setState({message: arrNames.map(n => this.greet(n, value))})
    }

    inputChange(value){
        console.log(value);
        this.setState({names:value})
    }

    render(){
        return (
            <div>
                <div>
                    <textarea type='text' 
                        rows='5'
                        ref={node=>this.input=node} 
                        placeholder="type text to filter" 
                        onChange={()=>this.inputChange(this.input.value)}/>
                </div>
                <div>
                    <select ref={node => this.select = node} onChange={() => this.onLanguageSelect(this.select.value)}>
                        <option>None</option>
                        <option>English</option>
                        <option>French</option>
                    </select>
                </div>
                {this.state.message && this.state.message.map(m=> {
                    return (<p key={m}>{m}</p>)
                })}
            </div>
        )
    }
}

export default Greet;