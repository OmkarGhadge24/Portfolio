import WindowControls from "#components/WindowControls.jsx";
import { gallery, photosLinks } from "#constants/index.js";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";
import { Mail, Search } from "lucide-react";
import React from "react";

const Photos = () => {
    const { openWindow } = useWindowStore();
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p className="text-sm font-medium"> {title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="gallery">
                    <ul className={gallery.length === 1 ? "single" : ""}>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery Image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    })
                                }
                            >
                                <img src={img} alt={`Gallery Image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const WrappedPhotos = windowWrapper(Photos, "photos");

export default WrappedPhotos;