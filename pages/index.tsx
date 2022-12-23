
import { Inter } from '@next/font/google'
import { Paper, Typography, Checkbox } from '@mui/material'  ;
import styled from '@emotion/styled';
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
`

type task = {
  id: string, 
  title: string,
  completed: boolean
}

type props = {
  tasks: task[],
}

export const getStaticProps: GetStaticProps<props> = () => {
  const TASKS = faker.datatype.array(100).map(() => ({
    id: faker.datatype.uuid(),
    title: faker.hacker.phrase(),
    completed: faker.datatype.boolean(),
  }))

  return {
    props:{
      tasks: TASKS,
    }
  }
}


export const Home: NextPage<{ tasks: task[]}> = ({ tasks}) => {
  return (
    <List>
      {tasks.map(({id, title, completed}) => (
        <Card key={id}>
          <Checkbox checked={completed} />
          <Typography>{title}</Typography>  
        </Card>
      ))}
    </List>
  )
}

export default Home;
