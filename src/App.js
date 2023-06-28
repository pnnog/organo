import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';

import Banner from './components/Banner';
import Form from './components/Form';
import Squad from './components/Squad';
import Footer from './components/Footer';

function App() {
  const [colaborators, setColaborators] = useState([])

  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      name:'Programação',
      color:'#57C278'
    },
    
    {
      id: uuidv4(),
      name:'Front-End',
      color:'#82CFFA'
    }, 

    {
      id: uuidv4(),
      name:'Data-Science',
      color:'#A6D157'
    },
    
    {
      id: uuidv4(),
      name:'Devops',
      color:'#E06B69'
  
    },

    {
      id: uuidv4(),
      name:'UX e Design',
      color:'#DB6EBF'
    },

    {
      id: uuidv4(),
      name:'Mobile',
      color:'#FFBA05'
  
    },

    {
      id: uuidv4(),
      name:'Inovação e gestão',
      color:'#FF8A29'
    }
  ])


  const updateSquads = (newSquad) =>{
    !!newSquad && setSquads([...squads, newSquad])
    
  }

  const updateColaboratorsState = (data) =>{
    setColaborators([...colaborators, data])
  }

  const deleteColaborator = (id) =>{
    setColaborators(
      colaborators.filter(colaborator => colaborator.id  !== id)
    )
  }

  const changeSquadColor = (cor, id) =>{
    setSquads (
      squads.map(squad => {
        if(squad.id === id)squad.color = cor
        return squad
      })
    )
  }

  return (
    <>
      <Banner />
      <Form 
        SubmitColaborators={updateColaboratorsState}
        SubmitNewSquad={updateSquads} 
        squads={squads.map(squad=> ({name: squad.name, id: squad.id}))} />  
      
      {squads.map((squad)=>{

        const currentColaborators =  colaborators.filter(colaborator => colaborator.squad===squad.id)
        
        return(
          <Squad 
            key={squad.id} 
            squad = {squad}
            colaborators={currentColaborators}
            onDelete={deleteColaborator}
            changeColor={changeSquadColor} />
        )
      })}


      <Footer />

    </>
  )
}

export default App;
