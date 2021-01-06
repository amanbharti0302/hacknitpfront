import './dashboard-main-styles.css';
import Home from './home-route/home.jsx';
import Explore from './explore-route/explore.jsx';
import MyFiles from './myfiles-route/myfiles.jsx';
import ContactUs from './contactus-route/contactus.jsx';

const DashBoard=({route,subjects,student})=>{
	if(subjects==='ALL')
		subjects=student.subjects;
	else
		subjects=[subjects];
	let dashboard;
	if(route==='home')
		dashboard=<Home/>
	else if(route==='explore')
		dashboard=<Explore/>
	else if(route==='myfiles')
		dashboard=<MyFiles/>
	else
		dashboard=<ContactUs/>
	return(
        <div className="main-body">
            <div className="title">
                {dashboard}
            </div>
        </div>
    )
}

export default DashBoard;