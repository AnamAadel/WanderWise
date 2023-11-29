import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useAuth } from '../../../context/AuthProvider';
import useGetOverview from '../../../hooks/useGetOverview';
import useGetPackages from '../../../hooks/useGetPackages';
import useTourGuide from '../../../hooks/useTourGuide';
import PackageCard from '../../shared/PackageCard';
import ProfileCard from '../../shared/ProfileCard';
import VideoCard from './VideoCard';

const menuNames = ["Overview", "Our Packages", "Meet Our Teem Guide"];

function TourismAndTRavelGuide({setModalVideoLink}) {
    const {overviewData} = useGetOverview();
    const {packageData} = useGetPackages();
    const {wishlist, setWishlist} = useAuth()
    const {tourGuideData} = useTourGuide()



    return (
        <Tabs>
        <div className='w-full bg-blue-400 pt-20 text-center rounded-tl-3xl rounded-tr-3xl -mt-24 relative z-10'>
            <h2 className='font-thin text-5xl text-white capitalize mb-10 font-permanent'>Tourism And Travel Guide</h2>
            <TabList>
                {menuNames.map(item => (
                    <Tab key={item}><span className='text-neutral'>{item}</span></Tab>

                ))}
            </TabList>
        </div>


            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-blue-100 py-10 px-4" >
                {overviewData.map((item, idx)=> (
                    <VideoCard key={idx} item={item} setModalVideoLink={setModalVideoLink} />

                ))}

                </div>
            </TabPanel>
            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-neutral-800 py-16 px-8" >
                {packageData.map((item, idx)=> (
                <PackageCard key={idx} item={item} setWishlist={setWishlist} wishlist={wishlist} />

                ))}
                <Link to="/packages" className='btn btn-white font-bold col-span-full my-12'>All Packages</Link>
                </div>

            </TabPanel>

            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-16 px-8" >
                {tourGuideData.map((tourGuide, idx)=> (
                <ProfileCard key={idx} tourGuideInfo={tourGuide} />

                ))}
                </div>

            </TabPanel>
        </Tabs>
    )
}

export default TourismAndTRavelGuide