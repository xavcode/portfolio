import { Avatar } from './components/Avatar'
import { Content } from './components/Content'

export default function Home() {
  return (
    <main className=''>
      <aside >      
        <div className='pt-3'>
         <Avatar/>
        </div>
      </aside>
      <section>
        <Content/>
      </section>
    </main>
  )
}
