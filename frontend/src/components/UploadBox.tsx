import { motion } from "framer-motion"

interface Props {
  onFileUpload: (file: File) => void
}

export default function UploadBox({ onFileUpload }: Props) {

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) onFileUpload(file)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-3xl p-8 border-2 border-dashed rounded-xl bg-white text-center shadow"
    >
      <p className="text-gray-600">
        Drag & drop a document here
      </p>

      <p className="text-sm text-gray-400 mt-2">
        or paste text below
      </p>
    </motion.div>
  )
}