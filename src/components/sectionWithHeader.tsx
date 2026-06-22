function SectionWithHeader({ header, children }: { header?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center mb-8 px-10 w-full z-50">
          <div className="max-w-[1200px] w-full flex flex-col justify-center items-center">
              { header && <div className="sticky top-0 py-10 z-200">{header}</div>}
              {children}
          </div>
    </section>
  )
}

export default SectionWithHeader