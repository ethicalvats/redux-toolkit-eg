import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

const Home = (props) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        // console.log(props)
        
        props.fetch()
    }, [])

    return (
        <View>
            <Text>App</Text>
            <View style={{display: 'flex',alignItems: 'center', width: '100%'}}>
                <Text style={{fontSize: 32}}>{props.store?.title}</Text>
            </View>
        </View>
    )
}

const mapDispatchToProps = {
    triggerUpdate: (val) => ({
        type: "update",
        payload: val
    }),
    fetch: () => ({
        type: 'fetch'
    })
}

const mapStateToProps = state => ({
    store: state.root
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home

