import Header from "./Header"

export default function Home() {
    return(
        <div className="home">
            <Header/>
            <div className="homeArticles">
                <p className="mover">Find the part you want!</p>
                <p>Computer part reviews play a crucial role in guiding consumers through the complex landscape of hardware choices. These reviews serve as valuable insights into the performance, reliability, and compatibility of various components such as processors, graphics cards, memory modules, and storage devices. Users often rely on the firsthand experiences shared by others to make informed decisions about which computer parts best suit their needs.</p>
            </div>
        </div>
    )
}