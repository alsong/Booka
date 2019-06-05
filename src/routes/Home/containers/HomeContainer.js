import {connect} from 'react-redux';
import Home from './components/Home';
import {
    GetCureentLocation
} from '.../modules/home';

const mapStateToProps = (state) =>({
    //This is where i will pass all my props that i want to map to my components
    region: state.home.region
});

const mapActionCreators = {
    GetCureentLocation
};

export default connect(mapStateToProps,mapActionCreators)(Home);