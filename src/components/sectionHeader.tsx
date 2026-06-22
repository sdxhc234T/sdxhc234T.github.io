function SectionWithHeader({ icon, title }: { icon: React.ReactNode; title: string; }) {
  return (
      <div className="rounded-full bg-teal-400/20 p-4 mb-4 flex items-center justify-center backdrop-blur-xs">
        <h2 className="text-2xl font-bold flex gap-x-4 items-center">{icon}{title}</h2>
      </div>
  )
}

export default SectionWithHeader
