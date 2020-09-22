const socket = io('/')
const ROOM_ID = '#{roomId}'

const myPeer = new Peer(undefined, {
  host: '/',
  port: '3001',
})

const videoContainer = document.querySelector('.video-flex')
const video = document.createElement('video')

video.muted = true

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideoStream(video, stream)
  })
  .catch((err) => {
    // catch some errors
    if (err.name === 'NotFoundError') {
      alert('Не найдено устройств видео/аудио захвата 🙁')
    }
  })

myPeer.on('open', (id) => {
  socket.emit('join-room', ROOM_ID, id)
})

socket.on('user-connected', (userId) => {
  console.log('user connected:', userId)
})

function addVideoStream(video, stream) {
  video.srcobject = stream
  video.addEventlistener('loadedmetadata', () => {
    video.play()
  })
  videoContainer.append(video)
}
