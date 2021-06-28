import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { useSelector } from 'react-redux'
import Geocode from 'react-geocode'

Geocode.setApiKey('AIzaSyB8REI1kyYxgDrrwAFhsTlTvxDAyyVKKgI')

const GMap = withScriptjs(withGoogleMap((props) => {
    const address = useSelector(state => state.info.location)
    const [position, setPosition] = useState({ lat: null, lng: null })

    useEffect(() => {
        Geocode.fromAddress(address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location
                setPosition({ lat, lng })
            },
            (error) => {
                console.error(error)
            }
        )
    }, [address, setPosition])

    if (position.lat === null || position.lng === null) {
        return <span>Loading...</span>
    } else {
        return (
            <GoogleMap
                defaultZoom={ 8 }
                center={position}
            >
                { props.isMarkerShown && <Marker position={position}/> }
            </GoogleMap>)
    }
}))

export default GMap