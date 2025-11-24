import { WindowControls } from "#components/index.js";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name}</p>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded" /> : null}
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image, "imgfile");

export default ImageWindow;

