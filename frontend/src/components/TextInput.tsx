interface Props {
  text: string
  setText: (value: string) => void
}

export default function TextInput({ text, setText }: Props) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Paste your document here..."
      className="w-full max-w-3xl h-48 p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}