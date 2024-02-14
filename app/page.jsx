import Bottom_Card from "./components/Bottom_Card";
import Hero from "./components/Hero";
import Material_bir from "./components/Material_bir";
import Nav from "./components/Nav";
import Why_choose from "./components/Why_choose";
import We_help from "./components/we_help";

export default function Home() {
  return (
   <div>
    <Nav />
    <Hero />
   <Material_bir />
  
   <Why_choose />

   <We_help  />

   <Bottom_Card />
   
 
   </div>
  )
}