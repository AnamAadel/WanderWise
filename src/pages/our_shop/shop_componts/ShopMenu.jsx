import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../../../components/Card';
import useMenu from '../../../hooks/useMenu';

const menuNames = ["salad", "pizza", "soups", "desserts", "drinks"];

function ShopMenu() {
    const [menu] = useMenu();

    const desserts = menu?.filter((item) => item.category === "dessert")
    const salads = menu?.filter((item) => item.category === "salad")
    const soups = menu?.filter((item) => item.category === "soup")
    const pizzas = menu?.filter((item) => item.category === "pizza")
    const drinks = menu?.filter((item) => item.category === "drinks")



    return (
        <Tabs>
            <TabList>
                {menuNames.map(item => (
                    <Tab key={item}><span>{item}</span></Tab>

                ))}
            </TabList>


            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    {salads && salads.map((item, ind) => (
                        <Card key={ind} item={item} />
                    ))}

                </div>
            </TabPanel>
            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    {pizzas && pizzas.map((item, ind) => (
                        <Card key={ind} item={item} />
                    ))}

                </div>
            </TabPanel>
            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    {soups && soups.map((item, ind) => (
                        <Card key={ind} item={item} />
                    ))}

                </div>
            </TabPanel>
            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >

                    {desserts && desserts.map((item, ind) => (
                        <Card key={ind} item={item} />
                    ))}
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >

                    {drinks && drinks.map((item, ind) => (
                        <Card key={ind} item={item} />
                    ))}
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default ShopMenu