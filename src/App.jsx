
import ContactForm from "./components/ContactForm"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {
    return(
        <div>
            <Nav/>
            <h1>Important that you download the correct version, it will change depending on which type of Mac you are using.</h1>
            <p>My first React project</p>
            <Content/>
            <ContactForm/>
            <Footer/>
           
        </div>
    )

}
export default App