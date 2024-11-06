function getMediaAuth(type) {
  navigator.mediaDevices
    .getUserMedia({
      [type]: true,
    })
    .then((stream) => {
      console.log(stream);
      setVideoStream(stream);
      return stream;
    })
    .catch((err) => {
      console.log(err);
    });
}

function setVideoStream(stream) {
  const ele = document.getElementsByTagName("video")[0];
  ele.srcObject = stream;
}

function stopVideoStream() {
  const stream = document.getElementsByTagName("video")[0].srcObject;
  stream.getTracks().forEach((track) => track.stop());
}
