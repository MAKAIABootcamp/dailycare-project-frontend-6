import CategoryLabel from "../../components/CategoryLabel"
import ContentDetail from "../../components/ContentDetail"
import PlayButton from "../../components/PlayButton"

const VideoDetail = () => {
  return (
    <main className='reading-detail'>
      <ContentDetail>
        <PlayButton />
        <div className='flex gap-5 px-10'>
          <CategoryLabel />
          <CategoryLabel />
          <CategoryLabel />
        </div>
      </ContentDetail>
    </main>
  )
}

export default VideoDetail
