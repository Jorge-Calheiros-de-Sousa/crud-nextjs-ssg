import type { NextPage } from 'next'
import Main from '../components/main'
import Title from '../components/title'
import Default from '../layouts/default'

const Home: NextPage = () => {
  return (
    <Default>
      <Main>
        <Title title='Página inícial' />
      </Main>
    </Default>
  )
}

export default Home
