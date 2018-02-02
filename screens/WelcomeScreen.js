import React, {Component} from 'react';
import {View, Text, ScrollView, StatusBar, ViewPagerAndroid, Dimensions, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {colorGreyDark1, colorGreyLight1, colorGreyLight2, colorGreyDark3, colorPrimary} from '../assets/base';
import Select from '../components/Select/Select';
import NavigationStateNotifier from '../utils/NavigationStateNotifier';
import {addCategory, removeCategory} from '../actions/CategoryActions';
import {addCountry, removeCountry} from '../actions/CountryActions';
import {settingsUpdated} from '../actions/SettingsActions';
import {submit} from '../utils';
import Test from './test';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const country = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WelcomeScreen extends Component{
    constructor (props) {
        super(props);
        const onEnter = () => {
            this.setState({activeScreen: true});
        };

        const onExit = () => {
            this.setState({activeScreen: true});
        };

        NavigationStateNotifier.newListener(this, onEnter, onExit);
    }

    state = {
        activeScreen: false,
        warning: ''
    }

    render () {
        
        return (
                <Test ar={[1,2,3,4,56]}/>
        )
        
        // return (
        //     <View style={styles.screenContainer}>
        //     <ViewPagerAndroid style={styles.viewPager}>

        //     <View key='1'>
        //     <Text style={{textAlign: 'center', color: '#fff'}}>1</Text>
        //     </View>

        //     <View key='2'>

        //         <ScrollView>
        //         <Text style={styles.screenTitle}>Get breaking news headlines with short description filtered by your interests and country preferences.</Text>
        //         <Text style={styles.screenParagraph}>{this.state.warning}</Text>
        //         <Icon
        //         name='settings'
        //         color={colorGreyLight1}
        //         size={40}
        //         containerStyle={styles.iconContainer}
        //         />

        //         <Text style={styles.screenParagraph}>Put your interests here: </Text>
        //         <Select
        //         add={this.props.addCategory}
        //         remove={this.props.removeCategory}
        //         items={this.props.category}
        //         style={{marginTop: 10, marginBottom: 10}}
        //         type='CATEGORY'
        //         options={categories}
        //         icon='call-received'
        //         />

        //         <Text style={styles.screenParagraph}>Select one or several countries: </Text>
        //         <Select
        //         add={this.props.addCountry}
        //         remove={this.props.removeCountry}
        //         items={this.props.country}
        //         style={{marginTop: 5, marginBottom: 20}}
        //         type='COUNTRY'
        //         options={country}
        //         icon='map'
        //         />

        //         <Button 
        //         buttonStyle={{backgroundColor: colorGreyLight1, borderRadius: 3}}
        //         color={colorGreyDark1} 
        //         icon={{name: 'check', color: colorGreyDark1}} 
        //         title='DONE'
        //         onPress={() => submit(this.props.country.length, this.props.category.length, this, this.props.navigation.navigate)}
        //         />
        //         </ScrollView>

        //         <Text style={{alignSelf: 'flex-end', color: colorGreyLight1, fontSize: 8}}>App was developed with newsapi.org</Text>

        //     </View>

        //     </ViewPagerAndroid>
                
        //     </View>

        // );
    }
}


const mapStateToProps = ({category, country}) => ({
    category,
    country
});

export default connect(mapStateToProps, {addCategory, removeCategory, addCountry, removeCountry, settingsUpdated})(WelcomeScreen);

const styles = {
    viewPager: {
        height: SCREEN_HEIGHT,
    },
    screenContainer: {
        flex: 1,
        backgroundColor: colorGreyDark1,
        paddingBottom: 20,
        paddingTop: StatusBar.currentHeight
    },
    screenTitle: {
        textAlign: 'center',
        color: colorGreyLight1,
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10
    },
    screenParagraph: {
        textAlign: 'center',
        color: colorGreyLight1
    },
    iconContainer: {
        alignSelf: 'center',
        paddingTop: 10
    }
}




{/* <View style={[styles.screenContainer, {backgroundColor: colorGreyLight1}]}>
<Image
source={require('../assets/meh_logo.png')}
/>
<Text style={styles.screenTitle}>Get breaking news headlines with short description filtered by your interests and country preferences.</Text>
</View> */}