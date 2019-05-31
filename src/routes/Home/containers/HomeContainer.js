import {connect} from 'react-redux';
import Home from './components/Home';
import {
    setName
} from '.../modules/home';

const mapStateToProps = (state) =>({
    //This is where i will pass all my props that i want to map to my components
    name: state.home.name
});

const mapActionCreators = {
    setName
};

export default connect(mapStateToProps,mapActionCreators)(Home);