
import './App.css'
import { Footer } from './components/Footer'
import { EditorSection } from './components/panels/EditorSection'
import { Preview } from './components/panels/Preview'
import { SectionsPanel } from './components/panels/sections/SectionsPanel'
import { useSections } from './hooks/useSections'

function App() {

  const { addedSections, activeSection, availableSections, setActiveSection,
    addSection, updateSectionContent, reset, reorderAddedSections,
    resetSection, removeSection } = useSections()

  return (
    <main className='min-h-screen w-full bg-[#1e1e1e] text-[#fafbfb] p-4 pt-8 xl:px-16'>
      <div className='flex flex-wrap gap-x-4 gap-y-6 lg:justify-between'>
        <div className="xl:w-1/4 lg:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)] sm:w-full xs:w-full max-[640px]:w-full">
          <SectionsPanel
            addedSections={addedSections}
            availableSections={availableSections}
            setActiveSection={setActiveSection}
            addSection={addSection}
            reset={reset}
            removeSection={removeSection}
            reorderAddedSections={reorderAddedSections}
            resetSection={resetSection} />
        </div>
        <div className="xl:w-1/3 lg:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.5rem)] sm:w-full xs:w-full max-[640px]:w-full">
          <EditorSection activeSection={activeSection} updateSectionContent={updateSectionContent} />
        </div>
        <div className="flex flex-1">
          <Preview addedSections={addedSections} />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App
