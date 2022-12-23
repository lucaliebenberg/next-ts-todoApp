
import { useState} from 'react';
import { Paper, Typography, Checkbox, IconButton, Button, Dialog, TextField, Alert } from '@mui/material'  ;
import { Delete, Warning } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import {faker} from '@faker-js/faker'
import type { NextPage, GetStaticProps } from 'next';


const List = styled.div`
  padding: 1rem;
  background: #EEE;
  min-height: 100vh;
`
const Card = styled(Paper)`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  background: #EEE;
  min-height: 100vh;
  padding: 1rem;
`
const InnerDialog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const ButtonFlex = styled.div`
  display: flex;
  flex-drection: row;
  justify-content: space-between;
  margin-top: 1rem;
`

const StyledALert = styled(Alert)`
  margin-top: 1rem;
`

type task = {
  id: string, 
  title: string,
  completed: boolean
}

type props = {
  tasks: task[],
}

type phase = 'resting' | 'adding'

// export const getStaticProps: GetStaticProps<props> = () => {
//   const TASKS = faker.datatype.array(100).map(() => ({
//     id: faker.datatype.uuid(),
//     title: faker.hacker.phrase(),
//     completed: faker.datatype.boolean(),
//   }))

//   return {
//     props:{
//       tasks: TASKS,
//     }
//   }
// }

// const useTasks = () => {

// }


export const Home: NextPage<props> = () => {
  const [phase, setPhase] =  useState<phase>()
  const [tasks, setTasks] = useState<task[]>([])
  const [alert, setAlert] = useState<null | string>(null);

  const handleToResting = () => {
    setPhase('resting')
  }
  
  const handleToAdding = () => {
    setPhase('adding')
  }


  if (tasks.length < 1) {
    return (
      <Wrapper>
        {phase === 'adding' && (
          <Dialog onClose={handleToResting} open>
            <InnerDialog>
              <TextField label="Name" />


              <StyledALert severity='warning' icon={<Warning />}>No value added</StyledALert>

              <ButtonFlex>
                <Button onClick={handleToResting} variant="outlined">Cancel</Button>
                <Button variant="contained">Add</Button>
              </ButtonFlex>
            </InnerDialog>
          </Dialog>
      )} 
        <Typography>There are no tasks. Please add one.</Typography>
        <Button variant='contained' onClick={handleToAdding}>Add Task</Button>
      </Wrapper>
    );
  }

  return (
    <div>
      <List>
        {tasks.map(({id, title, completed}) => (
          <Card key={id}>
            <IconButton><Checkbox checked={completed} /></IconButton>
            <Typography>{title}</Typography>
            <IconButton>
              <Delete />
            </IconButton>  
            
          </Card>
        ))}
      </List>
    </div>
  )
}

export default Home;
