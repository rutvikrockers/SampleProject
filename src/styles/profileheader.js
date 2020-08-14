import {
    StyleSheet,Dimensions,Platform
  } from 'react-native';
  
  import ProfileHeader from '../ProfileHeader';
  const margin = 15;
  const styles = StyleSheet.create({
    ...ProfileHeader,
    profileHeader: {
        backgroundColor: "#fff",
        paddingBottom: margin,
        width: 100 + "%"
      },
      profileHeaderShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4
      },
    
      mainSection: {
        width: 100 + "%",
        marginTop: Dimensions.get('window').height/6,
        marginBottom: 30,
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
      },
      userDetails: {
        flex: 1,
        marginLeft:20,
        marginTop:45
      },
      userName: {
        fontSize: 39,
        fontWeight: "600",
        color: "#364047"
      },
      userUrl: {
        fontSize: 12,
        color: "#364047"
      },
      userDesc: {
        fontSize: 14,
        fontWeight: "500",
        color: "#364047",
        lineHeight: 19,
        marginTop: 7
      },
      statSection: {
        paddingLeft: margin * 2,
        paddingRight: margin,
        flexDirection: "row"
      }
  });
  
  module.exports = styles;