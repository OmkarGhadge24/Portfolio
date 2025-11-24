import { WindowControls } from "#components/index.js";
import { socials } from "#constants/index.js";
import windowWrapper from "#hoc/WindowWrapper.jsx"

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target='contact' />
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/omkar1.jpg" alt="Omkar" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to Squash? Or just wanna talk tech? I'm in.</p>
                <p>omkarghadge2454@gmail.com</p>
                <ul>
                    {socials.map(({id,bg,link,icon,text})=>(
                        <li key={id} style={{backgroundColor : bg}}>
                            <a href={link} target="_blank" rel="noreferrer noopener" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const ContactWindow = windowWrapper(Contact, 'contact')
export default ContactWindow;