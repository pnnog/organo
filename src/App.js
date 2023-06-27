import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Squad from './components/Squad';
import squads from './squads';
import Footer from './components/Footer';

function App() {
  const [colaborators, setColaborators] = useState([])

  const updateColaborators = (data) =>{
    setColaborators([...colaborators, data])
  }

  return (
    <>
      <Banner />
      <Form handleSubmit={updateColaborators} squads={squads.map(squad=> squad.name)} />  
      
      {squads.map((squad)=>{

        const currentColaborators =  colaborators.filter(colaborator => colaborator.time===squad.name)
        
        return(
          <Squad 
            key={squad.name} 
            title={squad.name} 
            primaryColor={squad.primaryColor} 
            secondaryColor={squad.secondaryColor}
            colaborators={currentColaborators}
          />
        )
      })}

      <Footer />

    </>
  )
}

export default App;
