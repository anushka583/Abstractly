interface Props {
  summary: string
}

export default function SummaryPanel({ summary }: Props) {
  return (
    <div className="w-full max-w-3xl p-4 bg-white border rounded-lg shadow">
      {summary ? summary : "Summary will appear here..."}
    </div>
  )
}