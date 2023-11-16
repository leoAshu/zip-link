import Content from './ui-components/Content'
import Header from './ui-components/Header'
import Footer from './ui-components/Footer'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
