export default function Badge({ title }: { title: string }) {
  return (
    <li className="bg-primary p-2 flex items-center rounded-full text-sm">
      <div className="rounded-full bg-green-500 w-2 h-2 mr-1"></div>
      <p className="font-medium">{title}</p>
    </li>
  )
}