function ContactForm() {
    return(
        <form>
        <div>
            <label for="fname"> Name:</label>
            <input type="text" id="fname" placeholder="john"></input>
         </div>
         <div>
         <label for="email"> email:</label>
         <input type="email" id="email" placeholder="john@gmail.com"></input>
         </div>
         <div>
         <label for="message">Message: </label>
         <textarea id="message"></textarea>
         </div>
         

        </form>  
    )

}
export default ContactForm