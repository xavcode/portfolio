import { Avatar } from './components/Avatar'
import { Content } from './components/Content'

export default function Home() {
  return (
    <main className=''>
      <aside className="grid grid-flow-row-dense">      
        <div className=''>
         <Avatar/>
        </div>
      </aside>
      <section>
        <Content/>
      </section>
    </main>
  )
}
