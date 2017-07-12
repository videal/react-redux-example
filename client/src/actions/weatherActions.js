import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from '../constants/actionTypes';
import 'whatwg-fetch'

const weatherAPIconfig = {
    key: 'key=d2dcfcc341764c3bbd785120170607',
    url: 'http://api.apixu.com/v1/current.json?'
};

export const getWeather = (city) => (dispatch) => {
        dispatch({
            type: GET_WEATHER_REQUEST
        });

        fetch(`${weatherAPIconfig.url}${weatherAPIconfig.key}&q=${city}`)
            .then((response) => {
                response.json().then((body) => {
                    if(body.error) {
                        dispatch({
                            type: GET_WEATHER_FAIL
                        });
                    } else {
                        dispatch({
                            type: GET_WEATHER_SUCCESS,
                            temperature: body.current.temp_c,
                            location: body.location.name
                        });
                    }
                });
            })
            .catch((result) => {
                dispatch({
                    type: GET_WEATHER_FAIL
                })

            })
};
