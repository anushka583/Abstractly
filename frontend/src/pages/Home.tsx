import { useState } from "react"
import { motion } from "framer-motion"

import Navbar from "../components/Navbar"
import TextInput from "../components/TextInput"
import GenerateButton from "../components/GenerateButton"
import SummaryPanel from "../components/SummaryPanel"
import UploadBox from "../components/UploadBox"

import { container, item } from "../animations/motionVariants"

export default function Home() {

  const [text, setText] = useState("")
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const generateSummary = async () => {
    setLoading(true)

    setTimeout(() => {
      setSummary("This is a simulated AI-generated summary.")
      setLoading(false)
    }, 1500)
  }

  const handleFileUpload = (file: File) => {
    setFile(file)
    console.log("Uploaded file:", file.name)
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-8 p-10"
      >
        <motion.div variants={item}>
            <UploadBox onFileUpload={handleFileUpload} />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl font-bold"
        >
          Abstractly
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-600"
        >
          Abstractive Text Summarization
        </motion.p>

        <motion.div variants={item}>
          <TextInput text={text} setText={setText} />
        </motion.div>

        <motion.div variants={item}>
          <GenerateButton onClick={generateSummary} />
        </motion.div>

        <motion.div variants={item}>
          {loading ? (
            <div className="text-blue-600 font-medium">
              Generating summary...
            </div>
          ) : (
            <SummaryPanel summary={summary} />
          )}
        </motion.div>

      </motion.div>

    </div>
  )
}