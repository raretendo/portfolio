export default function Card({
  icon,
  content
}: {
  icon: React.ReactElement,
  content: React.ReactNode
}) {
  return (
    <div className="flex gap-1 items-center">
      {icon}
      {content}
    </div>
  )
}