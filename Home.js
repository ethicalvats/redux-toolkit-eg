import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { connect, useDispatch } from "react-redux"

import { fetch } from "./rootSlice"

const Home = (props) => {

    const [data, setData] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        // console.log(props)
        
        // props.fetch()
        dispatch(fetch({id:'1'}))
    }, [])

    return (
        <View>
            <Text>App</Text>
            <Text>Loading:</Text><Text>{props.store?.loading}</Text>
            <View style={{display: 'flex',alignItems: 'center', width: '100%'}}>
                <Text style={{fontSize: 32}}>{props.store?.data.title}</Text>
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

