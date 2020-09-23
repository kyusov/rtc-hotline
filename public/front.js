const socket = io('/')
const ROOM_ID = '#{roomId}'

const myPeer = new Peer(undefined, {
  host: '/',
  port: '3001',
})

const peers = {}

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

    myPeer.on('call', (call) => {
      call.answer(stream)

      const video = document.createElement('video')

      call.on('stream', (userVideoStream) => {
        addVideoStream(video, userVideoStream)
      })
    })

    socket.on('user-connected', (userId) => {
      connectToNewUser(userId, stream)
    })
  })
  .catch((err) => {
    // catch some errors
    if (err.name === 'NotFoundError') {
      alert('Не найдено устройств видео/аудио захвата 🙁')
    }
  })

socket.on('user-disconnected', (userId) => {
  console.log('user disconneted', userId)
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', (id) => {
  socket.emit('join-room', ROOM_ID, id)
})

socket.on('user-connected', (userId) => {
  console.log('user connected:', userId)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')

  call.on('stream', (userVideoStream) => {
    addVideoStream(video, userVideoStream)
  })

  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoContainer.append(video)
}
