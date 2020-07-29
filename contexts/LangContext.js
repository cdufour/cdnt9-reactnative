import React from 'react'

const LangContext = React.createContext()

class LangProvider extends React.Component {
    state = { lang: 'fr' }
    setLang = lang => this.setState({ lang }) 

    render() {

        const { children } = this.props
        const { lang } = this.state
        const { setLang } = this

        return(
            <LangContext.Provider value={{ lang, setLang }}>
                { children }
            </LangContext.Provider>
        )
    }
}

export default LangContext
export { LangProvider }