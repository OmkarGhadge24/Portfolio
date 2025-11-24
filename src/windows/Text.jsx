import { WindowControls } from "#components/index.js";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description = [] } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="px-6 py-5 space-y-4 text-sm text-gray-600 bg-white">
        {image && (
          <div className="w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover object-center"
            />
          </div>
        )}

        {subtitle && (
          <p className="text-base font-semibold text-gray-800">{subtitle}</p>
        )}

        {!!description.length && (
          <div className="space-y-3 leading-relaxed">
            {description.map((paragraph, index) => (
              <p key={`${name}-${index}`}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");

export default TextWindow;

