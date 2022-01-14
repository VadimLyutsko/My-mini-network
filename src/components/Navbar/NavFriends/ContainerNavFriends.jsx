import { connect } from 'react-redux';
import NavFriends from './NavFriends';


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = () => {
    return {}
}

const ContainerNavFriends = connect(mapStateToProps, mapDispatchToProps)(NavFriends);


export default ContainerNavFriends;
