import Lottie from "react-lottie";

function LoadingImage() {
  return (
    <Lottie
      options={{
        animationData: "/lottie/loading_image.json",
        autoplay: true,
        loop: true,
      }}
    />
  );
}

export default LoadingImage;
