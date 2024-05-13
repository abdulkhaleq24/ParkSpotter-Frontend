import AchivementSection from "./Sections/AchivementSection/AchivementSection.component"
import ClientSection from "./Sections/ClientsSection/ClientSection.component"

import HeroSection from "./Sections/HeroSection/HeroSection"
import HappyCarOwnersCounterSection from "./Sections/HappyCarOwnersCounterSection/HappyCarOwnersCounterSection"
import FeatureSection from "./Sections/FeatureSection/FeatureSection"
import ParkBusinesses from "./Sections/ParkBusinesses/ParkBusinesses"
import BusinessQuery from "./Sections/BusinessQuery/BusinessQuery"
import MentionsSectionMobileDevice from "./Sections/MentionsSection/MentionsSectionMobileDevice.component"
import MentionsSectionOtherDevices from "./Sections/MentionsSection/MentionsSectionOtherDevices.component"

const Home = () => {
  const isMobileDevice = window.innerWidth <= 768

  return <>{isMobileDevice ? <MobileContent /> : <DesktopContent />}</>
}

const MobileContent = () => {
  return (
    <>
      <HeroSection />
      <HappyCarOwnersCounterSection />
      <FeatureSection />
      <ParkBusinesses />
      <AchivementSection />
      <ClientSection />
      <MentionsSectionMobileDevice />

      <BusinessQuery />
    </>
  )
}

const DesktopContent = () => {
  return (
    <>
      <HeroSection />
      <HappyCarOwnersCounterSection />
      <FeatureSection />
      <ParkBusinesses />
      <AchivementSection />
      <ClientSection />
      <MentionsSectionOtherDevices />
      <BusinessQuery />
    </>
  )
}

export default Home
