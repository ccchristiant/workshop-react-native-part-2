# Workshop - React Native Part 2

- [Introduction](#introduction)
  - [Workshop content](#workshop-content)
  - [Documentation](#documentation)
- [Setup](#setup)
- [Step 1 - The Forecasts](#step-1---the-forecasts)
  - [Step 1.1 - Create the Forecasts component](#step-11---create-the-forecasts-component)
  - [Step 1.2 - Logic of the Forecasts component](#step-12---logic-of-the-forecasts-component)
  - [Step 1.3 - Arrange the view](#step-13---arrange-the-view)
- [Step 2 - The Forecast component](#step-2---the-forecast-component)
  - [Step 2.1 - Create the Forecast component](#step-21---create-the-forecast-component)
  - [Step 2.2 - Display the icon for each forecast](#step-22---display-the-icon-for-each-forecast)
- [Step 3 - Improvements](#step-3---improvements)
- [Bonus - More features and styling](#bonus---more-features-and-styling)
- [Conclusion](#conclusion)

## Introduction

### Workshop content

This workshop is the continuation of *Workshop - React Native Part 1*.

During this workshop, you will learn :

- How to improve an existing weather application using React Native by adding forecasts based on the current location
- How to use Expo to accelerate the development process
- How to interact with an API, here, OpenWeather's one

### Documentation

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/)
- [Open Weather API](https://openweathermap.org/api)

> Do not hesitate to explore the docs, it could be useful for this workshop

## Setup

Set up you project [here](SETUP.md)

## Step 1 - The Forecasts

### Step 1.1 - Create the Forecasts component

Copy the following code into a new file named "Forecasts.js" in the components folder.

    import React from 'react'
    import { View, Text, StyleSheet } from 'react-native'

    export default function Forecasts = ({ data }) => {
        return (
            <View>
                <Text>les prévisions</Text>
            </View>
        )
    }

    const styles = StyleSheet.create({
        scroll: {
            width: "100%",
            height: "35%",
        }
    })

Import that Forecasts in App.js and use it in the App component's return.

### Step 1.2 - Logic of the Forecasts component

Similarly to he CurrentWeather component, you will need to use the useEffect hook to update the Forecasts component with the new data.

In a useEffect hook depending on data, store each forecast from data.list, in a "forecasts" state.
For each element, you have to retrieve :

- the date
- the hour
- the temperature
- the icon
- the name of the day formatted in french, using the date-fns package

To check that your effect is correct, display the name of the day, the hour and the temperature of each element in a React Fragment, in the Forecasts component.

### Step 1.3 - Arrange the view

After displaying the data, you may have noticed that the list is displayed vertically and that we can only see a portion of the results.

Therefore, you want to present it horizontally and make the user scroll to see all the results.

Using a core component from React Native, achieve the desired result. Apply the "scroll" style to it.

## Step 2 - The Forecast component

### Step 2.1 - Create the Forecast component

As you have seen above, it is difficult to read the forecasts since there is no formatting.

To ease the readability of the forecast, you will create a new Forecast component (without the "s") to represent a single element from the list.

Copy the following code into a new file named "Forecast.js" in the components folder.

    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native'

    export default function Forecast({ forecast }) {
        return (
            <View>
                {...}
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: white,
            height: 140,
            width: 75,
            paddingVertical: 6,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            borderRadius: 50
        }
    })

Inside {...}, place the name of the day, the hour and the temperature from Forecasts.

### Step 2.2 - Display the icon for each forecast

Similarly to the CurrentWeather component, display the icon for each forecast, by using another getIcon function in Forecast.js :

    const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

It is basically the same as CurrentWeather's one, except that there are less details here since the icons are smaller.

## Step 3 - Improvements

A good exercise for you would be to group the forecasts depending on the day. Instead of displaying the day for each forecast, you would place once the date at the beginning of the forecast group.

How would you implement that in the useEffect hook of the Forecasts component ?

> *Tips*: The logic would be the following :
>
> [ forecast, ... ] -> [ { day: name, data: [ forecast, ... ] }, ... ]
>
> The map and filter functions should be enough to handle that problem.

## Bonus - More features and styling

You could add more feature such as :

- More details about the current weather and the forecasts
- A data refresh
- A search bar with an optional autocomplete for cities name
- Storing several cities weather page

Or, if you want to customize your app to your tastes, just add some styling.

## Conclusion

Congrats ! You now have the beginning of a great portfolio mini-project !
