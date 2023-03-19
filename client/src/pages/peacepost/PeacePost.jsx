import './peacepost.scss'
// import NoEvent from '../../components/peace-post/no-event/NoEvent'
import SickAndShutIn from '../../components/peace-post/sickandshutin/SickAndShutIn'
import Slider from '../../components/peace-post/slider/Slider'
import PostCalendar from '../../components/peace-post/post-calendar/PostCalendar'
import Revival from '../../components/peace-post/revival/Revival'

export default function PeacePost() {
    return (
        <div className="peacepost">
            <div className="post-hero">
                <h1>Peace Post</h1>
            </div>
            <div className="center">
                {/* <NoEvent /> */}
                <Revival />
                <SickAndShutIn />
            </div>
            <Slider />
            <PostCalendar />
        </div>
    )
}
