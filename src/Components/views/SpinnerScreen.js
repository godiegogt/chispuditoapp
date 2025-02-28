import Spinner from 'react-native-loading-spinner-overlay';
function SpinnerScreen() {
    
    return(
        <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Cargando...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  });