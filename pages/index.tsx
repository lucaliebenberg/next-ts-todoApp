
import { useState} from 'react';
import { Paper, Typography, Checkbox, IconButton, Button } from '@mui/material'  ;
import { Delete } from '@mui/icons-material';
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

type task = {
  id: string, 
  title: string,
  completed: boolean
}

type props = {
  tasks: task[],
}

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

const useTasks = () => {

}


export const Home: NextPage<props> = () => {
  const [tasks, setTasks] = useState<task[]>([])

  if (tasks.length < 1) {
    return (
      <Typography>There are no tasks. Please add one.</Typography>
    )
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
