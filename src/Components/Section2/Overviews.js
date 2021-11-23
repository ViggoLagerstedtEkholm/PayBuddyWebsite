import Card from "./Card";
import Collection from "./Collection";

import Settings from '../../Images/IMG_0096.PNG'
import Overview from '../../Images/IMG_0095.PNG'
import Occasions from '../../Images/IMG_0097.PNG'
import Maps from '../../Images/IMG_0124.PNG'

import All from '../../Images/IMG_0097.PNG';
import Pending from '../../Images/IMG_0098.PNG';
import History from '../../Images/IMG_0099.PNG';
import Expired from '../../Images/IMG_0100.PNG';

import PendingAction from '../../Images/IMG_0101.PNG';
import HistoryAction1 from '../../Images/IMG_0102.PNG';
import HistoryAction2 from '../../Images/IMG_0125.PNG';
import ExpiredAction from '../../Images/IMG_0104.PNG';

import Title from '../../Images/IMG_0106.PNG';
import ExpiryDate from '../../Images/IMG_0107.PNG';
import PeopleList from '../../Images/IMG_0108.PNG';
import PeopleAdd from '../../Images/IMG_0109.PNG';
import PeopleAdded from '../../Images/IMG_0110.PNG';
import ItemsList from '../../Images/IMG_0111.PNG';
import ItemAdd from '../../Images/IMG_0112.PNG';
import AddPersonToItem from '../../Images/IMG_0113.PNG';
import ItemAddWithPerson from '../../Images/IMG_0114.PNG';
import ItemsListAdded from '../../Images/IMG_0115.PNG';
import LocationLoading from '../../Images/IMG_0116.PNG';
import Location from '../../Images/IMG_0117.PNG';
import OverviewPreview from '../../Images/IMG_0118.PNG';

import GitHub from '../../Images/GitHub.png';

import OccasionBreakdown from "./OccasionBreakdown";
import OccasionActions from "./OccasionActions";

function Overviews() {
    return (
        <section id="sec-2" className="overview">
            <div className="app-description-title">
                Overview
            </div>

            <h3 className="app-description">PayBuddy is an app that allows you to log owed money. It gives you an overview
            of all purchases and makes it possible to easier remember money that you owe or are owed. Below is a collection of images from the app running on my iPhone X
            </h3>

            <Collection>
                <Card image={Settings} description={"Settings screen"}/>
                <Card image={Overview} description={"Overviews screen"}/>
                <Card image={Occasions} description={"Occasions screen"} />
                <Card image={Maps} description={"Maps screen"}/>
            </Collection>

            <OccasionBreakdown/>

            <Collection>
                <Card image={All} description={"All screen"}/>
                <Card image={Pending} description={"Pending screen"}/>
                <Card image={History} description={"History screen"} />
                <Card image={Expired} description={"Expired screen"}/>
            </Collection>

            <OccasionActions/>

            <Collection>
                <Card image={PendingAction} description={"Pending action"}/>
                <Card image={HistoryAction1} description={"History action"}/>
                <Card image={HistoryAction2} description={"History action"}/>
                <Card image={ExpiredAction} description={"Expired action"} />
            </Collection>

            <h3 className="app-description text-background">Adding an occasion, a total of 13 steps, described below.
            </h3>
            <Collection>
                <Card image={Title} description={"1. Title"}/>
                <Card image={ExpiryDate} description={"2. Expiry date"}/>
                <Card image={PeopleList} description={"3. People list"}/>
                <Card image={PeopleAdd} description={"4. Add person"}/>
                <Card image={PeopleAdded} description={"5. Added person"}/>
                <Card image={ItemsList} description={"6. Items list"}/>
                <Card image={ItemAdd} description={"7. Add item"}/>
                <Card image={AddPersonToItem} description={"8. Add person to item"}/>
                <Card image={ItemAddWithPerson} description={"9. Add person with item"}/>
                <Card image={ItemsListAdded} description={"10. Items"}/>
                <Card image={LocationLoading} description={"11. Loading location"}/>
                <Card image={Location} description={"12. Location detected"}/>
                <Card image={OverviewPreview} description={"13. View the selected values"}/>
            </Collection>

            <a href="https://github.com/ViggoLagerstedtEkholm/PayBuddy-React-Native"><img src={GitHub}/></a>
        </section>
    );
}

export default Overviews;
