import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CategoryLabel from '../../components/CategoryLabel'
import ContentDetail from '../../components/ContentDetail'
import { useEffect } from 'react'
import { getDataById } from '../../store/content/contentThunks'
import './styles.sass'

const ReadingDetail = () => {
  const { content } = useSelector((store) => store.content)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getDataById(id))
  }, [])


  return (
    <main className='reading-detail'>
      <ContentDetail details={content[0]}>
        <div className='flex gap-5 px-10'>
          <CategoryLabel details={content[0].tag} />
        </div>
      </ContentDetail>
    </main>
  )
}

export default ReadingDetail
