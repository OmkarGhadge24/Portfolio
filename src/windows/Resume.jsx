import { WindowControls } from "#components/index.js"
import windowWrapper from "#hoc/WindowWrapper.jsx"
import { Download } from "lucide-react"

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="files/OMKAR GHADGE.pdf" download className="cursor-pointer" title="Download Resume">
                    <Download className="icon" />
                </a>
            </div>

            <div>
                <Document file="files/OMKAR GHADGE.pdf">
                    <Page pageNumber={1} renderTextlayer renderAnnotationLayer />
                </Document>
            </div>

        </>
    )
}

const ResumeWindow = windowWrapper(Resume, 'resume')

export default ResumeWindow