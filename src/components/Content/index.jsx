import ArticleCard from "../ArticleCard"
import Column from "../Column"
import "./content.css"

function Content () {
    return(
        <div class="content">
    
           <Column/> 
           <Column/> 
           <Column/> 

           <ArticleCard/>
    
        </div>
    )

}

export default Content