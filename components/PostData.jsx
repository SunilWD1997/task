import { MdOutlineLocationOn } from "react-icons/md";
import { FaCalenderAlt } from "react-icons/fa";


export const postData = [
    { id: 1, postType:'article',  name: 'Sarthak Kamra', views: '1.4k', postTypeImg: '/article.png', postImg: '/post_1.png', profileImg: '/profile_1.png', postHeading:'What if famous brands had regular fonts? Meet RegulaBrands!', para:'I’ve worked in UX for the better part of a decade. F..'  },
    { id: 2, postType:'education',  name: 'Sarah West', views: '4.8k', postTypeImg: '/education.png',postImg: '/post_2.png', profileImg: '/profile_2.png', postHeading:'Tax Benefits for Investment under National Pension Scheme launched by Government', para:'I’ve worked in UX for the better part of a decade. F..'  },
    { id: 3, postType:'education',  name: 'Ronal Jones', views: '1.4k', postTypeImg: '/meetup.png',postImg: '/post_3.png', profileImg: '/profile_3.png', postHeading:'Finance & Investment Elite Social Mixer @Lujiazui', buttomData: 'Visit Website',postTimeLine: {desc1: `Fri, 12 Oct, 2018`, desc2: `Ahmedabad, India`, logo1: `/calender.png`, logo2: '/location.png'} , cName: 'meetup' },
    { id: 4, postType:'education',  name: 'Joseph Gray', views: '1.4k', postTypeImg: '/job.png', profileImg: '/profile_4.png', postHeading:'Software Developer', buttomData: 'Apply on Timesjob',postTimeLine: {desc1: `Fri, 12 Oct, 2018`, desc2: `Ahmedabad, India`, logo1:'/bag.png', logo2: '/location.png' },  cName: 'jobs', logo: <FaCalenderAlt/>  },
]