
/* eslint-disable react/prop-types */
import { useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { MdCancel } from "react-icons/md"
import * as pdfjsLib from "pdfjs-dist"

function FileUploader({ type = "image", file, setFile, onExtractText }) {
  // Set up PDF.js worker
    useEffect(() => {
        // Option 1: Use CDN (recommended for most cases)
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

        // Option 2: If you want to use a local worker file, uncomment this instead:
        // pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    }, [])

    const extractPdfText = async (file) => {
        const arrayBuffer = await file.arrayBuffer()
        const typedArray = new Uint8Array(arrayBuffer)

        try {
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise
        let fullText = ""

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i)
            const content = await page.getTextContent()
            const pageText = content.items.map((item) => item.str).join(" ")
            fullText += pageText + "\n\n"
        }

        if (onExtractText) {
            onExtractText(fullText)
        }
        } catch (err) {
        console.error("Failed to extract PDF text:", err)
        }
    }

    const onDrop = useCallback(
        (acceptedFiles) => {
        const uploadedFile = acceptedFiles[0]
        if (uploadedFile) {
            const fileWithPreview = Object.assign(uploadedFile, {
            preview: URL.createObjectURL(uploadedFile),
            })

            setFile(fileWithPreview)

            if (type === "pdf") {
            extractPdfText(uploadedFile)
            }
        }
        },
        [type, setFile, onExtractText],
    )

    const getAcceptType = () => {
        if (type === "image") return { "image/*": [] }
        if (type === "pdf") return { "application/pdf": [] }
        return {}
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: getAcceptType(),
        multiple: false,
    })

    const removeFile = () => {
        if (file?.preview) {
        URL.revokeObjectURL(file.preview)
        }
        setFile(null)
        if (onExtractText) onExtractText("") // Clear extracted text
    }

    return (
        <div className="w-full h-[250px] mx-auto">
        <div
            {...getRootProps()}
            className="cursor-pointer h-[150px] border-2 border-dashed border-gray-400 p-10 text-center rounded-lg hover:border-gray-600 transition-colors"
        >
            <input {...getInputProps()} />
            <p className="text-gray-600 text-3xl mt-4">اسحب الملف هنا أو انقر لاختياره</p>
        </div>

        {file && (
            <div className="relative mt-4 w-15 h-15 md:w-32 md:h-32 border rounded overflow-hidden shadow">
            <button
                onClick={removeFile}
                className="absolute top-0 right-0 text-2xl cursor-pointer bg-white rounded-full text-red-500 hover:bg-red-50 transition-colors"
                aria-label="Remove file"
            >
                <MdCancel />
            </button>
            {file.type.startsWith("image/") ? (
                <img src={file.preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
            ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 text-sm text-gray-600 px-2 text-center">
                {file.name}
                </div>
            )}
            </div>
        )}
        </div>
    )
}

export default FileUploader
