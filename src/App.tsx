import './App.css'
import TopNavBar from "../components/topnavbar"
import Card from "../components/card"
function App() {
  const data = [
    {
      id: 1,
      title: "Health",
      imgUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
      pageUrl: "#"
    },
    {
      id: 2,
      title: "Fitness",
      imgUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
      pageUrl: "#"
    },
    {
      id: 3,
      title: "Laptop",
      imgUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
      pageUrl: "#"
    },
    {
      id: 4,
      title: "Electronics",
      imgUrl: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
      pageUrl: "#"
    }
  ]
  return (
    <div className="App">
      <TopNavBar />
      <div className="w-full bg-slate-200 h-[50vh]"></div>
      <div className="cards flex mt-[-60px]">
        {data.map(c => {
          return <Card
            title={c.title}
            imgUrl={c.imgUrl}
            pageUrl={c.pageUrl}
          />
        }
        )}
      </div>

    </div>
  )
}

export default App
