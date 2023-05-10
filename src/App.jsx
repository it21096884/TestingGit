import Button from "./component/Button"
import Greeting from "./component/Greeting"
import Navbar from "./component/Navbar"
import Testimonial from "./component/Testimonial"

 

function App() {
  
  return (
    <>
      <div>
        <Navbar/>
         <Greeting />
         <Card Tittle = "My work" image = "https://picsum.photos/200/300" description = "This is my work" />
        <Card Tittle="MY job" image="https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=600" description="manicure is good"/>

        <Button color = "#ff0000" size = "70%" name = "Red Button"></Button><br/>
        <Button color = "#ff0000" size = "70%" name = "Red Button"></Button><br/>
        <Button color = "#ff0000" size = "70%" name = "Red Button"></Button><br/>
        <Button color = "#ff0000" size = "70%" name = "Red Button"></Button><br/>

<h2>Banner</h2>
<Banner image = "https://picsum.photos/200/300" color = "#ff0000" message = "This is my  First  banner" /><br/>
<Banner image = "https://picsum.photos/200/300" color = "#ff0000" message = "This is my  First  banner" /><br/>


      <footer />
      </div>
      
    </>
  )
}

export default App
