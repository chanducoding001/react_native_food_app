import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export function vectorIcons(data){
  const {name,type} = data;
  switch(type){
    case 'SimpleLineIcons':return <SimpleLineIcons name={name} style={reUseStyles.iconStyles}/>
    default:return <Ionicons name={name} style={reUseStyles.iconStyles}/>
  }
}
export const reUseStyles = {
  topHeight:{
    flex:2,
    // backgroundColor:'red'
  },
  bottomHeight:{
    flex:2,
    marginBottom:30,
    // backgroundColor:'red'
  },
    boldText:{
        fontSize:20,
        fontWeight:'600'
      },
      regularText: {
        fontSize: 15,
        lineHeight: 24,
        
      },
      makeCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      container:{
        flex:1,
        // backgroundColor:'yellow'
      },
      spaceEvenly:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        // backgroundColor:'red'
      },
      loginTop:{
        marginTop:50,
        marginBottom:20,
        // backgroundColor:'red',
        // height:280,
        // backgroundColor:'blue'
      },
      linkContainer:{
        color:'blue',
        borderBottomWidth:1,
        borderBottomColor:'blue',
        fontSize:15,
        fontWeight:'600'
      },
      iconStyles:{
        fontSize:25,
        color:'#3E5481',
        // backgroundColor:'#3E5481'
      },
      sideText:{
        color:'#3E5481',
        fontSize:17,
        fontWeight:700
      },
      marginBottom20:{
        marginBottom:10,
      },
      textColor:{
        color:'#3E5481'
      }
}

export const searchData = [
  {name:'Pizza'},
  {name:'Burger'},
  {name:'Chicken Biryani'},
  {name:'Veg Biryani'},
  {name:'Mutton Biryani'},
  {name:'Prawns Biryani'},
  {name:'Cakes'},
  {name:'IceCreams'},
]