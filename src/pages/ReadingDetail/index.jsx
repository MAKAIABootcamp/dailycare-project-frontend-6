import CategoryLabel from '../../components/CategoryLabel'
import ContentDetail from '../../components/ContentDetail'

const ReadingDetail = () => {
  return (
    <main className='reading-detail'>
      <ContentDetail>
        <div className='flex gap-5 px-10'>
          <CategoryLabel />
          <CategoryLabel />
          <CategoryLabel />
        </div>
      </ContentDetail>
    </main>
  )
}

export default ReadingDetail
