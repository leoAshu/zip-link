import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
