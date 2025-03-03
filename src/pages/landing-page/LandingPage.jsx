import Header from "./header/Header"
import Overview from "./overview/Overview"
import Features from "./features/Features"
import DiveDeeper from "./dive-deeper/DiveDeeper"
import Newsletter from "./newsletter/Newsletter"
import Footer from "./footer/Footer"

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Overview />
        <Features />
        <DiveDeeper />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}