## Description

Spreading of hate against women, has become very common in cyberspace. Everyday women recieve so many crass, crude and insulting toxic messages on social media patforms. The need of the hour is to have methods to be able to identify and block such toxic messages, and Instagram Toxicity BLocker aims to help in solving this problem.

Instagram-Toxicity-Blocker is a browser extension, which if being used will able to classify your messages as toxic, and block them, so that they lose their ability to destroy your mental calm.

This extension checks all the text messages that you have recieved in you instagram inbox, and classifies them as toxic or not. If it finds a message to be toxic, the message is blocked from your sight.

## Installation -
   
1. Download the dist folder from this link-

    https://drive.google.com/drive/folders/0B92NGQb8d0MVRzlzbVdRbk9qT0U?usp=sharing

2. In chrome://extensions page , click on developer mode -> click on load unpacked,
    and load the file downloaded in previous step.

## Usage-

Go to instagram, and click on the extension, the extension will now block all toxic messages in your inbox.

## Tech stack-

1. We are using a tensorflow model called toxicity-

    https://github.com/tensorflow/tfjs-models/tree/master/toxicity

    to classify the messages. The model was created by google and is free to use.

2. We have used Javascript along with chrome extension features to extract messages from inbox, and block them from sight.

3. We have used Parcel- which is a developer dependency, to bundle the javascript files into the chrome extension.

## How the classifying model works

The model takes as input a string of texts, along with a threshhold, and a set of labels for which we need the probabilities, we in this project have just used the toxicity label.

The threshold parameter specifies the minimum degree of confidence required for a forecast to be considered true (defaults to 0.85). Setting the threshold to a higher value increases the likelihood of forecasts returning null when they fall below the threshold.

The model returns an array of objects, one for each toxicity label, that contain the raw probabilities for each input sentence along with the final prediction. The final prediction can be one of three values:

- true if the probability of a match exceeds the confidence threshold,
- false if the probability of *not* a match exceeds the confidence threshold, and
- null if neither probability exceeds the threshold.


    