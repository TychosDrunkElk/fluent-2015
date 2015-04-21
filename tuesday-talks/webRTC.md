## why do we care?
* chatting
* live broadcasting
* internet of things

## History
* muzak - wired music streaming
### the internet!
* real player
* quicktime
* windows media player
* web-ex
* all these needed external application
    - then came flash
* red5
    - limitation: everything runs on flash
    - flash is diening
    - not supported on mobile

## WEBRTC
* web real time communication
    - video
    - audio
    - data
* P2P
### steps
1. get access to media
    - ```navigator.getUserMedia(constraints, successCallback, errorCallback)```
    - signaling
        * HTTP, websockets (socketio)
2. find peer
    - custom logic (again use socketIO or other for signaling)
3. negotiate media formats (JSEP)
    - javascript session establismnet protocal
4. establish communication channel (ICE)
    - STUN: session traverl utilitis for NAT
    - TURN: traversal using relays around NAT
    - STUN + TURN = ICE: Interactive connectivity establishment
5. stream media
    
#### recording
* server helps if you want to record the experience or combine streams into one
* P2P connections can break down if there are too many connections
* combine on server instead

http://www.html5rocks.com/en/tutorials/webrtc/basics/

## What is possible with WEBRTC
* be my eyes
* second screen experience for browser + phone
