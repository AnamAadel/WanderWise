
import { useLoaderData } from 'react-router-dom'
import LocationMap from '../../components/LocationMap'
import Breadcrumb from '../shared/Breadcrumb'
import BookingForm from './components/BookingForm'
import DayPlan from './components/DayPlan'
import HeroGallery from './components/HeroGallery'
import PackageInfo from './components/PackageInfo'
import PriceCard from './components/PriceCard'
import TourGuideList from './components/TourGuideList'

const PackageDetails = () => {
  const {data} = useLoaderData();
  console.log(data);
  return (
    <>
    <Breadcrumb page={data.tourTitle} />
        <HeroGallery images={data?.images} video={data?.video} />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='col-span-2'>
          <PackageInfo info={data} />
          <LocationMap />
        <DayPlan />
        </div>
        <div>
            <PriceCard price={data?.price} />
            <BookingForm selectedPackage={data} />
        </div>

        </div>
        <TourGuideList />
    </>
  )
  }

export default PackageDetails