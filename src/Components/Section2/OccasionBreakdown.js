import PendingIcon from '../../Images/Pending.png';
import HistoryIcon from '../../Images/History.png';
import ExpiredIcon from '../../Images/Expired.png';

function OccasionBreakdown() {
    return (
        <div className="text-background">
            <div className="app-description-title">
                Breakdown of the occasions
            </div>

            <div className="app-description">
                <h3 >We have 4 selectable tabs for the occasions.</h3>
                <h3 >Pending occasions are purchases that has not yet been paid or expired.</h3>
                <h3 >History occasions are purchases that has been paid.</h3>
                <h3 >Expired occasions are purchases that has not been paid before the expiry date.</h3>
                <br/>

                <h3>
                    1. The first tab is the "All" tab, this will show all occasions.
                </h3>

                <h3>
                    2. The second tab is the "Pending" tab, this will show all pending occasions.
                </h3> <img src={PendingIcon} alt={"test"} className="icons"/>

                <h3>
                    3. The third tab is the "History" tab, this will show all history occasions.
                </h3> <img src={HistoryIcon} alt={"test"} className="icons"/>

                <h3>
                    4. The forth, and last tab, will show the "Expired" occasions.
                </h3> <img src={ExpiredIcon} alt={"test"} className="icons"/>
            </div>
        </div>
    );
}

export default OccasionBreakdown;
